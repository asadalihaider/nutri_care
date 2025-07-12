import { Router } from 'express';
import { getWeeklyNutritionPlan, generateBloodTestSummary } from '../controllers/gpt.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.use(authenticate);

router.get('/nutrition-plan', getWeeklyNutritionPlan);
router.post('/blood-summary', generateBloodTestSummary);

export default router;
