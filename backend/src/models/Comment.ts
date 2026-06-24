import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IComment extends Document {
  blogId: Types.ObjectId;
  parentId?: Types.ObjectId;
  username: string;
  comment: string;
  likes: number;
  isApproved: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const CommentSchema = new Schema<IComment>(
  {
    blogId: { type: Schema.Types.ObjectId, ref: 'Blog', required: true },
    parentId: { type: Schema.Types.ObjectId, ref: 'Comment', default: null },
    username: { type: String, required: true, maxlength: 50 },
    comment: { type: String, required: true, maxlength: 1000 },
    likes: { type: Number, default: 0 },
    isApproved: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model<IComment>('Comment', CommentSchema);
