import { Request, Response } from 'express';
import Knowledge from '../models/Knowledge';

export const getKnowledge = async (_req: Request, res: Response): Promise<void> => {
  try {
    let knowledge = await Knowledge.findOne();
    if (!knowledge) knowledge = await Knowledge.create({ categories: [] });
    res.json({ success: true, data: knowledge });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching knowledge', error });
  }
};

export const updateKnowledge = async (req: Request, res: Response): Promise<void> => {
  try {
    let knowledge = await Knowledge.findOne();
    if (!knowledge) knowledge = await Knowledge.create({ categories: req.body.categories || [] });
    else { knowledge.categories = req.body.categories; await knowledge.save(); }
    res.json({ success: true, data: knowledge });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error updating knowledge', error });
  }
};

export const addCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    let knowledge = await Knowledge.findOne();
    if (!knowledge) knowledge = await Knowledge.create({ categories: [] });
    knowledge.categories.push({ name: req.body.name, links: req.body.links || [] });
    await knowledge.save();
    res.json({ success: true, data: knowledge });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error adding category', error });
  }
};

export const addLinkToCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const knowledge = await Knowledge.findOne();
    if (!knowledge) { res.status(404).json({ success: false, message: 'Knowledge not found' }); return; }
    const category = knowledge.categories.find(c => c.name === req.params.categoryName);
    if (!category) { res.status(404).json({ success: false, message: 'Category not found' }); return; }
    category.links.push(req.body);
    await knowledge.save();
    res.json({ success: true, data: knowledge });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error adding link', error });
  }
};

export const deleteCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const knowledge = await Knowledge.findOne();
    if (!knowledge) { res.status(404).json({ success: false, message: 'Knowledge not found' }); return; }
    knowledge.categories = knowledge.categories.filter(c => c.name !== req.params.categoryName);
    await knowledge.save();
    res.json({ success: true, data: knowledge });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting category', error });
  }
};

export const getPortfolio = async (_req: Request, res: Response): Promise<void> => {
  try {
    const knowledge = await Knowledge.findOne();
    if (!knowledge || knowledge.categories.length === 0) {
      res.json({ success: true, data: [], message: 'No portfolio data yet' });
      return;
    }
    res.json({ success: true, data: knowledge.categories });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching portfolio', error });
  }
};
