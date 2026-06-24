import { Router } from 'express';
import { startChat, sendMessage, getChatHistory, getAllChats } from '../controllers/chatController';
import { adminAuth } from '../middleware/adminAuth';

const router = Router();
router.post('/start', startChat);
router.post('/send', sendMessage);
router.get('/all-users', adminAuth, getAllChats);
router.get('/:chatId', getChatHistory);

export default router;
