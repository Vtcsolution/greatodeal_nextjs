import { Request, Response } from 'express';
import Partnership from '../models/PartnershipModel';
import { sendPartnershipEmail } from '../utils/emailService';

export const submitPartnership = async (req: Request, res: Response): Promise<void> => {
  try {
    const partnership = await Partnership.create(req.body);
    await sendPartnershipEmail(req.body).catch(err => console.error('Partnership email error:', err));
    res.status(201).json({ success: true, message: 'Partnership application submitted', data: partnership });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error submitting partnership', error });
  }
};

export const getAllPartnerships = async (req: Request, res: Response): Promise<void> => {
  try {
    const { status, page = 1, limit = 20 } = req.query;
    const filter: Record<string, unknown> = {};
    if (status) filter.status = status;
    const skip = (Number(page) - 1) * Number(limit);
    const [partnerships, total] = await Promise.all([
      Partnership.find(filter).sort({ submissionDate: -1 }).skip(skip).limit(Number(limit)),
      Partnership.countDocuments(filter),
    ]);
    res.json({ success: true, data: partnerships, total });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching partnerships', error });
  }
};

export const updatePartnershipStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const partnership = await Partnership.findByIdAndUpdate(req.params.id, { status: req.body.status, notes: req.body.notes }, { new: true });
    if (!partnership) { res.status(404).json({ success: false, message: 'Partnership not found' }); return; }
    res.json({ success: true, data: partnership });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating partnership', error });
  }
};
