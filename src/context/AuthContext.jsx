
import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

//here we make a custom hook to use the AuthContext
// this allows us to use the context without importing it every time
// and also makes the code cleaner
export function useAuth() {
    return useContext(AuthContext);
}

export default function AuthProvider({children}) {

   const [token, setToken] = useState(sessionStorage.getItem('token'));


    function login(newToken) {
        setToken(newToken);
        sessionStorage.setItem('token', newToken);
    }

    function logout() {
        setToken(null);
        sessionStorage.removeItem('token');
    }



    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}