import express from 'express';
import { register, login, logout, sendVerifiOTP, verifiEmail, sendResetOtp, resetPassword } from '../controllers/authController.js';
import userAuth from '../middleware/userAuth.js';

const authRouter = express.Router();

// Define las rutas
authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);
authRouter.post('/send-verify-otp', userAuth, sendVerifiOTP);
authRouter.get('/is-auth', userAuth, verifiEmail);
authRouter.post('/send-reset-otp', sendResetOtp);
authRouter.post('/reset-password', resetPassword);


// Exporta el router correctamente
export default authRouter;
