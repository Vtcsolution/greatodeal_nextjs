import { Request, Response } from 'express';
import Comment from '../models/Comment';

export const addComment = async (req: Request, res: Response): Promise<void> => {
  try {
    const { blogId } = req.params;
    const comment = await Comment.create({ blogId, ...req.body });
    res.status(201).json({ success: true, data: comment });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error adding comment', error });
  }
};

export const getComments = async (req: Request, res: Response): Promise<void> => {
  try {
    const { blogId } = req.params;
    const comments = await Comment.find({ blogId, isApproved: true }).sort({ createdAt: -1 });
    res.json({ success: true, data: comments });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching comments', error });
  }
};

export const likeComment = async (req: Request, res: Response): Promise<void> => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.commentId, { $inc: { likes: 1 } }, { new: true });
    if (!comment) { res.status(404).json({ success: false, message: 'Comment not found' }); return; }
    res.json({ success: true, data: comment });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error liking comment', error });
  }
};

export const deleteComment = async (req: Request, res: Response): Promise<void> => {
  try {
    await Comment.findByIdAndDelete(req.params.commentId);
    res.json({ success: true, message: 'Comment deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting comment', error });
  }
};
