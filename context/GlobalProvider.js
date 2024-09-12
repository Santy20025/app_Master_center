import { createContext, useContext, useState, useEffect } from "react";
import { Account, Client } from "react-native-appwrite";

// Configuración del cliente Appwrite
const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1') // Reemplaza con tu endpoint
    .setProject('66df79710020952a698e'); // Reemplaza con tu projectId

// Inicialización del servicio Account
const account = new Account(client);

// Crear el contexto global
const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await account.get(); // Usamos account.get() para obtener el usuario actual
                if (res) {
                    setIsLoggedIn(true);
                    setUser(res);
                } else {
                    setIsLoggedIn(false);
                    setUser(null);
                }
            } catch (error) {
                console.log("Error en fetchUser:", error);
                setIsLoggedIn(false);
                setUser(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchUser();
    }, []);

    return (
        <GlobalContext.Provider
            value={{
                isLoggedIn,
                setIsLoggedIn,
                user,
                setUser,
                isLoading
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
