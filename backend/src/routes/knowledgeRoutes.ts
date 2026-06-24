import { Router } from 'express';
import { getKnowledge, updateKnowledge, addCategory, addLinkToCategory, deleteCategory, getPortfolio } from '../controllers/knowledgeController';
import { adminAuth } from '../middleware/adminAuth';

const router = Router();

router.get('/portfolio', getPortfolio);
router.get('/', adminAuth, getKnowledge);
router.put('/', adminAuth, updateKnowledge);
router.post('/category', adminAuth, addCategory);
router.post('/category/:categoryName/link', adminAuth, addLinkToCategory);
router.delete('/category/:categoryName', adminAuth, deleteCategory);

export default router;
