import { Router } from 'express';
import {
  chat,
} from '../controllers/chat.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.use(authenticate);

router.post('/chat', chat);

export default router;
