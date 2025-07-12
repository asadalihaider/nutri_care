import { Router } from 'express';
import { getUserNotifications, markNotificationRead } from '../controllers/notification.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.use(authenticate);

router.get('/', getUserNotifications);
router.post('/:id/read', markNotificationRead);

export default router;
