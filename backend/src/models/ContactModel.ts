import mongoose, { Schema, Document } from 'mongoose';

export interface IContact extends Document {
  fullName: string;
  company?: string;
  phone?: string;
  email: string;
  services: string;
  message: string;
  status: 'new' | 'replied';
  repliedAt?: Date;
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>({
  fullName: { type: String, required: true },
  company: { type: String },
  phone: { type: String },
  email: { type: String, required: true },
  services: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, enum: ['new', 'replied'], default: 'new' },
  repliedAt: { type: Date },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IContact>('Contact', ContactSchema);
