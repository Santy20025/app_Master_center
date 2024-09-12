import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";

// Configuración del cliente Appwrite
export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    projectId: '66df79710020952a698e', // Project ID de Appwrite
    databaseId: '66df79cc000bdacee9c5', // ID del Database
    clienteId: '66df79d30000a2e2fc8a',  // Collection ID de clientes
    vehiculosID: '66e09aa10004dc693563' // Collection ID de vehículos
};

// Inicialización del cliente
const client = new Client();
client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.projectId);

// Inicialización de los servicios de Appwrite
export const account = new Account(client);
export const avatars = new Avatars(client);
export const databases = new Databases(client);

// Función para iniciar sesión con manejo de límites de tasa
export const signIn = async (email, password, retryCount = 0) => {
    const maxRetries = 5;
    const retryDelay = Math.pow(2, retryCount) * 1000; // 1s, 2s, 4s, 8s, etc.

    try {
        const session = await account.createEmailPasswordSession(email, password); // Cambié createEmailPasswordSession a createEmailSession
        return session;
    } catch (error) {
        if (error.message.includes('Rate limit')) {
            if (retryCount < maxRetries) {
                console.warn(`Rate limit exceeded. Retrying in ${retryDelay} ms...`);
                await new Promise(resolve => setTimeout(resolve, retryDelay));
                return signIn(email, password, retryCount + 1);
            } else {
                console.error("Max retries reached. Please try again later.");
                throw new Error("Rate limit exceeded. Please try again later.");
            }
        } else {
            console.error("Error en signIn:", error);
            throw new Error("Error al iniciar sesión: " + error.message);
        }
    }
};

export const fetchUser = async () => {
    try {
        const user = await account.get();  // Usamos account.get() para obtener el usuario actual
        return user;
    } catch (error) {
        console.error("Error en fetchUser:", error);
        throw new Error("Error obteniendo los detalles del usuario: " + error.message);
    }
};

// Función para cerrar sesión
export const deleteSession = async () => {
    try {
        const session = await account.get(); // Asegúrate de que la sesión es válida obteniendo el usuario actual
        if (session) {
            await account.deleteSession('current'); // 'current' elimina la sesión actual
        }
    } catch (error) {
        console.error("Error al cerrar sesión:", error);
        throw new Error("Error al cerrar sesión: " + error.message);
    }
};

// Función para obtener la sesión actual
export const getSession = async () => {
    try {
        const sessions = await account.listSessions();
        return sessions.sessions.length > 0 ? sessions.sessions[0] : null;
    } catch (error) {
        console.error("Error obteniendo la sesión actual:", error);
        throw new Error("Error obteniendo la sesión actual: " + error.message);
    }
};

// Función para crear un nuevo usuario
export const createUser = async (email, password, name, lastname) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            `${name} ${lastname}`
        );

        if (!newAccount) throw new Error("Account creation failed");

        const avatarUrl = avatars.getInitials(name);

        await signIn(email, password);

        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.clienteId,
            ID.unique(),
            {
                Correo: email,
                Nombre: name,
                Apellido: lastname,
                Password: password,
            }
        );

        return newUser;
    } catch (error) {
        console.error("Error en createUser:", error);
        throw new Error("Error creando el usuario: " + error.message);
    }
};

// Función para crear un nuevo vehículo
export const createVehicle = async (marca, modelo, placa, registro, kilometraje, estado) => {
    try {
        const session = await getSession();
        if (!session) {
            throw new Error("El usuario no está autenticado.");
        }

        let registroDateTime;
        if (typeof registro === 'string') {
            registroDateTime = new Date(registro);
        } else if (registro instanceof Date) {
            registroDateTime = registro;
        } else {
            throw new Error('El campo de registro debe ser una cadena o un objeto Date.');
        }

        const registroISO = registroDateTime.toISOString();

        const newVehicle = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.vehiculosID,
            ID.unique(),
            {
                Marca: marca,
                Modelo: modelo,
                Placa: placa,
                Registro: registroISO,
                Kilometraje: kilometraje,
                Estado: estado
                // Elimina el campo userId si no está en la colección
            }
        );

        return newVehicle;
    } catch (error) {
        console.error("Error en createVehicle:", error);
        throw new Error("Error creando el vehículo: " + error.message);
    }
};

// Función para obtener vehículos del usuario actual
export const getVehicles = async () => {
    try {
        const session = await getSession();
        if (!session) {
            throw new Error("El usuario no está autenticado.");
        }

        const userId = session.userId;

        const response = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.vehiculosID,
            [] // Consulta sin filtros si el campo userId no está disponible
        );

        return response.documents;
    } catch (error) {
        console.error('Error obteniendo vehículos:', error.message);
        throw error;
    }
};


