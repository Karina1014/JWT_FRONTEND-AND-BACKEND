import axios from 'axios';
import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const AppContent = createContext();

export const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [isLoggedin, setIsLoggedin] = useState(false); // Sin espacio extra
  const [userData, setUserData] = useState(null); // Corregido: inicializado como null

  const getUserData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/data`);
      
      // Verificar si la respuesta es exitosa
      if (data.success) {
        setUserData(data.userData); // Guardamos los datos del usuario
      } else {
        toast.error(data.message);  // Enviar el mensaje de error si no es exitoso
      }
    } catch (error) {
      // Manejo de errores
      const errorMessage = error.response?.data?.message || error.message || 'Ocurrió un error inesperado';
      toast.error(errorMessage);  // Mostrar el error
    }
  };

  const value = {
    backendUrl,
    isLoggedin,
    setIsLoggedin,
    userData,
    setUserData,
    getUserData // Asegúrate de que esta función se pase al contexto
  };

  return (
    <AppContent.Provider value={value}> {/* El value debe estar definido correctamente */}
      {props.children}
    </AppContent.Provider>
  );
};
