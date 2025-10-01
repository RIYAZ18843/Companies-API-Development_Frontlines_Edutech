// src/components/CompanyCard.jsx
function CompanyCard({ company }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{company.name}</h2>
      <p className="text-gray-600">Industry: {company.industry}</p>
      <p className="text-gray-600">Location: {company.location}</p>
      <p className="text-gray-600">Size: {company.size}</p>
      <p className="text-gray-500 mt-4">{company.description}</p>
    </div>
  );
}

export default CompanyCard;