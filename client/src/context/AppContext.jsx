import {createContext, useState} from 'react'

export const AppContent = createContext() 

export const AppContextProvider = (props)=>{

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [isLoggedin, setIsLoggedin] = useState (false)
    const [userData, setUserDta ] = useState(false)

    const value ={
        backendUrl,
        isLoggedin,
        setIsLoggedin,
        userData,
        setUserDta
    }

    return(
        <AppContent.Provider value={}>
            {props.children}

        </AppContent.Provider>
    )

}
  