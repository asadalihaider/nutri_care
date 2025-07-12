import { Router } from 'express';
import {
  signup,
  login,
  sendOtp,
  verifyOtp,
  forgotPassword,
  resetPassword,
} from '../controllers/auth.controller';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtp);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

export default router;
