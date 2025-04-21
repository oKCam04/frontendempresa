import {createContext, useContext, useState, useEffect} from 'react';
export const AuthContext = createContext();
export const useAuth=()=>useContext(AuthContext);

export const AuthProvider=({children})=>{
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token=localStorage.getItem('token');
        const userData=localStorage.getItem('user');
        if(token){
            setIsAuthenticated(true);
            setUser(JSON.parse(userData));

        }
    },[]);
    const login=(token, userData)=>{
        localStorage.setItem('token',token);
        setIsAuthenticated(true);
        setUser(userData);
    };
    const logout=()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        setUser(null);
    };
    return(
        <AuthContext.Provider value={{isAuthenticated, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useUser=()=>{
    useContext(AuthContext);
}