// src/components/CompanyTable.jsx
function CompanyTable({ companies }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-800">
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Industry</th>
            <th className="p-4 text-left">Location</th>
            <th className="p-4 text-left">Size</th>
            <th className="p-4 text-left">Description</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company._id} className="border-t">
              <td className="p-4">{company.name}</td>
              <td className="p-4">{company.industry}</td>
              <td className="p-4">{company.location}</td>
              <td className="p-4">{company.size}</td>
              <td className="p-4">{company.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CompanyTable;