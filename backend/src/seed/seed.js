import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Company from '../models/Company.js';

dotenv.config();

const seedCompanies = [
  {
    name: 'TechCorp',
    industry: 'Tech',
    location: 'San Francisco, CA',
    size: 'Large',
    description: 'Leading software development company.',
  },
  {
    name: 'FinanceHub',
    industry: 'Finance',
    location: 'New York, NY',
    size: 'Medium',
    description: 'Financial services and consulting.',
  },
  {
    name: 'HealthPlus',
    industry: 'Healthcare',
    location: 'Boston, MA',
    size: 'Small',
    description: 'Innovative healthcare solutions.',
  },
  {
    name: 'InnovateTech',
    industry: 'Tech',
    location: 'Austin, TX',
    size: 'Medium',
    description: 'AI and machine learning solutions.',
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected');

    await Company.deleteMany({});
    console.log('Cleared existing companies');

    await Company.insertMany(seedCompanies);
    console.log('Seeded companies');

    mongoose.connection.close();
    console.log('MongoDB connection closed');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDB();