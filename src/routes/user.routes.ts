import { Router } from 'express';
import {
  submitProfile,
  submitQuestionnaire,
  getUserData,
} from '../controllers/user.controller';
import { validateBody } from '../middlewares/validate.middleware';
import { authenticate } from '../middlewares/auth.middleware';
import { profileSchema, questionnaireSchema } from '../validators/user.validator';

const router = Router();

router.use(authenticate);

router.get('/data', getUserData);
router.post('/profile', validateBody(profileSchema), submitProfile);
router.post('/questionnaire', validateBody(questionnaireSchema), submitQuestionnaire);

export default router;
