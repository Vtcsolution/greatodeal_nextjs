import mongoose, { Schema, Document } from 'mongoose';

export interface IPartnership extends Document {
  name: string;
  email: string;
  company: string;
  budget: string;
  description: string;
  ndaAgreed: boolean;
  serviceType: string;
  partnershipTier: string;
  phone?: string;
  website?: string;
  industry?: string;
  employees?: string;
  timeline?: string;
  referralSource?: string;
  status: 'pending' | 'contacted' | 'qualified' | 'rejected';
  notes?: string;
  submissionDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

const PartnershipSchema = new Schema<IPartnership>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, lowercase: true },
    company: { type: String, required: true },
    budget: {
      type: String,
      enum: ['<$10k', '$10k-$50k', '$50k-$100k', '$100k-$500k', '>$500k'],
      required: true,
    },
    description: { type: String, required: true },
    ndaAgreed: { type: Boolean, default: false },
    serviceType: { type: String },
    partnershipTier: { type: String },
    phone: { type: String },
    website: { type: String },
    industry: { type: String },
    employees: { type: String },
    timeline: { type: String },
    referralSource: { type: String },
    status: {
      type: String,
      enum: ['pending', 'contacted', 'qualified', 'rejected'],
      default: 'pending',
    },
    notes: { type: String },
    submissionDate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model<IPartnership>('Partnership', PartnershipSchema);
