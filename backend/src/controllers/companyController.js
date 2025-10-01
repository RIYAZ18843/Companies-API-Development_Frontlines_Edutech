import Company from '../models/Company.js';

// Get all companies with optional filtering
export const getCompanies = async (req, res) => {
  try {
    const { name, industry, location, size } = req.query;
    const query = {};
    if (name) query.name = { $regex: name, $options: 'i' };
    if (industry) query.industry = { $regex: industry, $options: 'i' };
    if (location) query.location = { $regex: location, $options: 'i' };
    if (size) query.size = size;

    const companies = await Company.find(query);
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching companies', error: error.message });
  }
};

// Get single company by ID
export const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) return res.status(404).json({ message: 'Company not found' });
    res.json(company);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching company', error: error.message });
  }
};

// Create a new company
export const createCompany = async (req, res) => {
  try {
    const { name, industry, location, size, description } = req.body;
    if (!name || !industry || !location || !size) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    const company = new Company({ name, industry, location, size, description });
    await company.save();
    res.status(201).json(company);
  } catch (error) {
    res.status(500).json({ message: 'Error creating company', error: error.message });
  }
};

// Update a company
export const updateCompany = async (req, res) => {
  try {
    const { name, industry, location, size, description } = req.body;
    const company = await Company.findByIdAndUpdate(
      req.params.id,
      { name, industry, location, size, description },
      { new: true, runValidators: true }
    );
    if (!company) return res.status(404).json({ message: 'Company not found' });
    res.json(company);
  } catch (error) {
    res.status(500).json({ message: 'Error updating company', error: error.message });
  }
};

// Delete a company
export const deleteCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) return res.status(404).json({ message: 'Company not found' });
    res.json({ message: 'Company deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting company', error: error.message });
  }
};