import { useContext } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom'; // Navegar Hook en enrutador
import { AppContent } from '../context/AppContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { userData, backendUrl, setUserData, setIsLoggedin } = useContext(AppContent);

  return (
    <div className='w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0'>
      <img src={assets.logo} alt="logo" className='w-28 sm:w-32' />
      {userData ? (
        <div className='w-8 h-8 flex justify-center items-center rounded-full
        bg-black text-white relative group'>
          {/* Corregido el error con toUpperCase */}
          {userData.name.charAt(0).toUpperCase() }
          {/* {userData.name.charAt(0).toUpperCase() + userData.name.slice(1)} */}
        </div>
      ) : (
        <button
          onClick={() => navigate('/login')}
          className='flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100 transition-all'
        >
          Login
          <img src={assets.arrow_icon} alt="Flecha" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
