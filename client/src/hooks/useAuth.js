import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, login } from 'helpers/api'

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState('')
    const navigate = useNavigate();

    // call this function when you want to authenticate the user
    const login = (username, password) => {
        api.post(`auth/login`, {
            username: username,
            password: password
        })
            .then(response => {
                console.log(response.data)
                localStorage.setItem("user_token", response.data.accessToken)
            })
    };

    // call this function to sign out logged in user
    const logout = () => {

    };



    return <AuthContext.Provider value={''}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};