import { Router } from 'express';
import { submitPartnership, getAllPartnerships, updatePartnershipStatus } from '../controllers/partnershipController';
import { adminAuth } from '../middleware/adminAuth';

const router = Router();
router.post('/submit', submitPartnership);
router.get('/applications', adminAuth, getAllPartnerships);
router.put('/applications/:id/status', adminAuth, updatePartnershipStatus);

export default router;
