import { Router } from 'express';
import {
  submitProfile,
  submitQuestionnaire,
  getUserData,
} from '../controllers/user.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.use(authenticate);

router.post('/onboarding', submitProfile);
router.post('/questionnaire', submitQuestionnaire);
router.get('/data', getUserData);

export default router;
