import mongoose, { Schema, Document } from 'mongoose';

interface ILink {
  url: string;
  description: string;
  previewImage?: string;
}

interface ICategory {
  name: string;
  links: ILink[];
}

export interface IKnowledge extends Document {
  categories: ICategory[];
  createdAt: Date;
  updatedAt: Date;
}

const KnowledgeSchema = new Schema<IKnowledge>(
  {
    categories: [
      {
        name: { type: String, required: true },
        links: [
          {
            url: { type: String, required: true },
            description: { type: String, default: 'A tailored solution showcasing our expertise in this category.' },
            previewImage: { type: String },
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<IKnowledge>('Knowledge', KnowledgeSchema);
