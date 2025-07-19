import { Router } from 'express';
import {
  createChatSession,
  getUserChatSessions,
  getChatSessionMessages,
  sendMessageToSession,
} from '../controllers/chat.controller';
import { authenticate } from '../middlewares/auth.middleware';
import { validateBody } from '../middlewares/validate.middleware';
import { createSessionSchema, sendMessageSchema } from '../validators/chat.validator';

const router = Router();

router.use(authenticate);

router.get('/sessions', getUserChatSessions);
router.get('/sessions/:sessionId', getChatSessionMessages);
router.post('/sessions', validateBody(createSessionSchema), createChatSession);
router.post('/sessions/:sessionId/messages', validateBody(sendMessageSchema), sendMessageToSession);

export default router;
