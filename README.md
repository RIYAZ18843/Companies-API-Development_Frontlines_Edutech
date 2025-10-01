Companies API Development - MERN Stack Project Frontlines Edutech
Objective
This project implements a full-stack MERN application to manage "Company" data with CRUD operations, filtering, and a responsive frontend, developed for the MERN Stack Developer technical assessment at Frontlines Edutech.
Technologies Used

Backend: Node.js, Express.js, MongoDB (Mongoose), dotenv, cors
Frontend: React.js (Vite), Tailwind CSS
Database: MongoDB Atlas
Tools: Postman (API testing), MongoDB Atlas/Compass (database verification)

Prerequisites

Node.js (v16+)
MongoDB Atlas account
Postman for API testing
Git for version control

Project Structure
project/
├── backend/
│   ├── src/
│   │   ├── controllers/companyController.js  # API logic for CRUD and filtering
│   │   ├── models/Company.js                 # Mongoose schema for Company
│   │   ├── routes/companyRoutes.js           # Express routes for /api/companies
│   │   ├── config/db.js                      # MongoDB connection fallback
│   │   └── seed.js                           # Script to seed initial data
│   ├── .env                                  # Environment variables (PORT, MONGO_URI)
│   ├── server.js                             # Main Express server
│   └── package.json                          # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CompanyCard.jsx               # Card view component
│   │   │   ├── CompanyTable.jsx              # Table view component
│   │   │   ├── Filters.jsx                   # Filter form component
│   │   │   └── AddCompanyForm.jsx            # Form to add new companies
│   │   ├── App.jsx                           # Main React app
│   │   └── main.jsx                          # React entry point
│   ├── public/index.html                     # HTML template with Tailwind CSS
│   ├── vite.config.js                        # Vite configuration
│   └── package.json                          # Frontend dependencies
└── README.md                                 # This file

Development Steps

Backend Setup:

Initialized Node.js project and installed express, mongoose, dotenv, cors.
Configured .env with PORT=5000 and MONGO_URI for MongoDB Atlas.
Set up Express server in server.js with CORS (http://localhost:5173) and JSON parsing.


Database Model:

Defined Company schema in models/Company.js with required fields: name, industry, location, size, and optional description.


API Implementation:

Built RESTful APIs in controllers/companyController.js:
GET /api/companies: Fetch all/filtered companies (regex for name, industry, location).
GET /api/companies/:id: Fetch single company.
POST /api/companies: Create company with validation.
PUT /api/companies/:id: Update company.
DELETE /api/companies/:id: Delete company.


Added error handling (e.g., 400 for missing fields, 404 for not found).


Routing:

Configured routes in routes/companyRoutes.js for /api/companies.


Data Seeding:

Created seed.js to populate MongoDB with initial companies (e.g., TechCorp, FinanceHub).
Ran with node src/seed.js.


API Testing:

Tested APIs in Postman for CRUD operations and filtering, verifying MongoDB storage.


Frontend Setup:

Initialized React with Vite, added Tailwind CSS via CDN in public/index.html.
Created main.jsx for React rendering.


Frontend Components:

Built CompanyCard.jsx (card view), CompanyTable.jsx (table view), Filters.jsx (filter form), and AddCompanyForm.jsx (add company form) with Tailwind CSS.
Managed state and fetch requests in App.jsx for data display, filtering, and adding companies.


Integration and Testing:

Connected frontend to backend via fetch (http://localhost:5000/api/companies).
Tested UI at http://localhost:5173 for adding companies (e.g., Cloud Innovations), filtering, and view toggling.
Verified data in MongoDB Atlas.



Setup Instructions
Backend

Navigate to backend/.
Install dependencies: npm install.
Create .env with PORT=5000 and MONGO_URI.
Seed database: node src/seed.js.
Start server: node server.js.

Frontend

Navigate to frontend/.
Install dependencies: npm install.
Start app: npm run dev.
Open http://localhost:5173.

API Endpoints

GET /api/companies: Fetch all companies or filter by query (e.g., ?industry=Tech).
GET /api/companies/:id: Fetch company by ID.
POST /api/companies: Create new company.
PUT /api/companies/:id: Update company.
DELETE /api/companies/:id: Delete company.

Submission

Code, screenshots (Postman, MongoDB, UI), and a 2–3 minute video (explanation.mp4) are uploaded to Google Drive in the folder YourName_Task.
The video explains the approach, steps, and key decisions (e.g., Tailwind CSS, regex filtering, error handling).

GitHub Setup

Create a GitHub repository.
Clone locally: git clone <repo-url>.
Copy project files to the repo.
Add README.md.
Commit and push:git add .
git commit -m "Add Companies API project"
git push origin main



Notes

Enhanced with AddCompanyForm.jsx for adding companies via the UI.
Assumed deadline as October 2, 2025 (email typo: September 1, 2025).
