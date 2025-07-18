import { Router } from 'express';
import {
  uploadImage,
  submitProfile,
  submitQuestionnaire,
  getUserData,
} from '../controllers/user.controller';
import { validateBody } from '../middlewares/validate.middleware';
import { authenticate } from '../middlewares/auth.middleware';
import { profileSchema, questionnaireSchema } from '../validators/user.validator';
import multer from 'multer';

const upload = multer();

const router = Router();

router.use(authenticate);

router.get('/data', getUserData);
router.post('/profile', validateBody(profileSchema), submitProfile);
router.post('/questionnaire', validateBody(questionnaireSchema), submitQuestionnaire);
router.post('/upload-image', upload.single('file'), uploadImage);

export default router;
