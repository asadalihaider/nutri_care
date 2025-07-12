import { Router } from 'express';
import { getWeeklyNutritionPlan } from '../controllers/plan.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.use(authenticate);

router.get('/recommendation', getWeeklyNutritionPlan);

export default router;
