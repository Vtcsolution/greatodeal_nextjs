import mongoose, { Schema, Document } from 'mongoose';

export interface IMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface IChat extends Document {
  username: string;
  supportQuery: string;
  messages: IMessage[];
  queries: string[];
  createdAt: Date;
  updatedAt: Date;
}

const ChatSchema = new Schema<IChat>(
  {
    username: { type: String, default: 'Anonymous', index: true },
    supportQuery: { type: String, default: '' },
    messages: [
      {
        role: { type: String, enum: ['user', 'assistant'], required: true },
        content: { type: String, required: true },
      },
    ],
    queries: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.model<IChat>('Chat', ChatSchema);
