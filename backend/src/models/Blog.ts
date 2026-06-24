import mongoose, { Schema, Document } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  excerpt: string;
  fullContent: string;
  category: string;
  author: string;
  authorBio?: string;
  authorImage?: string;
  date: Date;
  readTime: string;
  views: number;
  image: string;
  backlinks: Array<{ text: string; url: string }>;
  featured: boolean;
  trending: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    fullContent: { type: String, required: true },
    category: {
      type: String,
      enum: [
        'Artificial Intelligence',
        'Blockchain',
        'Data Science and Analytics',
        'Enterprise',
        'Industry',
        'Software Development',
        'Technology',
        'UI/UX Design',
      ],
      required: true,
    },
    author: { type: String, required: true },
    authorBio: { type: String },
    authorImage: { type: String },
    date: { type: Date, default: Date.now },
    readTime: { type: String, default: '5 min read' },
    views: { type: Number, default: 0 },
    image: { type: String, required: true },
    backlinks: [{ text: String, url: String }],
    featured: { type: Boolean, default: false },
    trending: { type: Boolean, default: false },
  },
  { timestamps: true }
);

BlogSchema.index({ category: 1, featured: 1, trending: 1 });

export default mongoose.model<IBlog>('Blog', BlogSchema);
