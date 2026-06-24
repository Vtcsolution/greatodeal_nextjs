import { Router } from 'express';
import { submitContact, getAllContacts, replyToContact } from '../controllers/contactController';
import { adminAuth } from '../middleware/adminAuth';

const router = Router();
router.post('/send', submitContact);
router.get('/all', adminAuth, getAllContacts);
router.post('/reply', adminAuth, replyToContact);

export default router;
