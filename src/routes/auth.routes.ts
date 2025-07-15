import { Router } from 'express';
import {
  signup,
  login,
  sendOtp,
  verifyOtp,
  forgotPassword,
  resetPassword,
} from '../controllers/auth.controller';
import { validateBody } from '../middlewares/validate.middleware';
import { signUpSchema, loginSchema, sendOtpSchema, verifyOtpSchema, forgotPasswordSchema, resetPasswordSchema  } from '../validators/auth.validator';

const router = Router();

router.post('/signup', validateBody(signUpSchema), signup);
router.post('/login', validateBody(loginSchema), login);
router.post('/send-otp', validateBody(sendOtpSchema), sendOtp);
router.post('/verify-otp', validateBody(verifyOtpSchema), verifyOtp);
router.post('/forgot-password', validateBody(forgotPasswordSchema), forgotPassword);
router.post('/reset-password', validateBody(resetPasswordSchema), resetPassword);

export default router;
