import { Router } from 'express';
import {
  createChatSession,
  getUserChatSessions,
  getChatSessionMessages,
  sendMessageToSession,
} from '../controllers/chat.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.use(authenticate);

router.get('/sessions', getUserChatSessions);
router.get('/sessions/:sessionId', getChatSessionMessages);
router.post('/sessions', createChatSession);
router.post('/sessions/:sessionId/messages', sendMessageToSession);

export default router;
