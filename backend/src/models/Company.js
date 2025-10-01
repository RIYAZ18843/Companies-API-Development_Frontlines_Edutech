import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  industry: { type: String, required: true },
  location: { type: String, required: true },
  size: { type: String, required: true },
  description: { type: String },
}, { timestamps: true });

export default mongoose.model('Company', companySchema);