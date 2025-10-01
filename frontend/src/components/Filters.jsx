// src/components/Filters.jsx
import { useState } from 'react';

function Filters({ onFilterChange, onReset }) {
  const [localFilters, setLocalFilters] = useState({
    name: '',
    industry: '',
    location: '',
    size: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange(localFilters);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setLocalFilters({ name: '', industry: '', location: '', size: '' });
    onReset();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Search by name"
          value={localFilters.name}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <select
          name="industry"
          value={localFilters.industry}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="">Industry</option>
          <option value="Tech">Tech</option>
          <option value="Finance">Finance</option>
          <option value="Healthcare">Healthcare</option>
        </select>
        <input
          type="text"
          name="location"
          placeholder="Search by location"
          value={localFilters.location}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <select
          name="size"
          value={localFilters.size}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="">Size</option>
          <option value="Small">Small (1-50)</option>
          <option value="Medium">Medium (51-500)</option>
          <option value="Large">Large (501+)</option>
        </select>
      </div>
      <div className="flex gap-4 mt-4">
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
        >
          Apply Filters
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-600"
        >
          Reset Filters
        </button>
      </div>
    </form>
  );
}

export default Filters;