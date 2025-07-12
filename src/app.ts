import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import gptRoutes from './routes/gpt.routes';
import chatRoutes from './routes/chat.routes';
import notificationRoutes from './routes/notification.routes';
import { errorHandler } from './middlewares/error.middleware';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => res.send('NutriCare App server is running!'));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/gpt', gptRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/notification', notificationRoutes);

// Error Handling
app.use(errorHandler);

export default app;
