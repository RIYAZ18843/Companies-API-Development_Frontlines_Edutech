import { useState } from 'react';

     function AddCompanyForm({ onAddCompany }) {
       const [formData, setFormData] = useState({
         name: '',
         industry: '',
         location: '',
         size: '',
         description: ''
       });
       const [error, setError] = useState(null);
       const [success, setSuccess] = useState(null);

       const handleChange = (e) => {
         const { name, value } = e.target;
         setFormData((prev) => ({ ...prev, [name]: value }));
       };

       const handleSubmit = async (e) => {
         e.preventDefault();
         setError(null);
         setSuccess(null);

         try {
           const response = await fetch('http://localhost:5000/api/companies', {
             method: 'POST',
             headers: { 'Content-Type': 'application/json' },
             body: JSON.stringify(formData)
           });

           if (!response.ok) {
             const errorData = await response.json();
             throw new Error(errorData.message || 'Failed to add company');
           }

           const newCompany = await response.json();
           onAddCompany(newCompany);
           setSuccess('Company added successfully!');
           setFormData({ name: '', industry: '', location: '', size: '', description: '' });
         } catch (err) {
           setError(err.message);
         }
       };

       return (
         <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
           <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Company</h2>
           {error && <p className="text-red-500 mb-4">{error}</p>}
           {success && <p className="text-green-500 mb-4">{success}</p>}
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             <input
               type="text"
               name="name"
               placeholder="Company Name"
               value={formData.name}
               onChange={handleChange}
               className="p-2 border rounded"
               required
             />
             <select
               name="industry"
               value={formData.industry}
               onChange={handleChange}
               className="p-2 border rounded"
               required
             >
               <option value="">Select Industry</option>
               <option value="Tech">Tech</option>
               <option value="Healthcare">Healthcare</option>
               <option value="Finance">Finance</option>
               <option value="Energy">Energy</option>
             </select>
             <input
               type="text"
               name="location"
               placeholder="Location"
               value={formData.location}
               onChange={handleChange}
               className="p-2 border rounded"
               required
             />
             <select
               name="size"
               value={formData.size}
               onChange={handleChange}
               className="p-2 border rounded"
               required
             >
               <option value="">Select Size</option>
               <option value="Small">Small (1-50)</option>
               <option value="Medium">Medium (51-500)</option>
               <option value="Large">Large (501+)</option>
             </select>
             <textarea
               name="description"
               placeholder="Description"
               value={formData.description}
               onChange={handleChange}
               className="p-2 border rounded col-span-2"
             />
           </div>
           <button
             type="submit"
             className="mt-4 bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
           >
             Add Company
           </button>
         </form>
       );
     }

     export default AddCompanyForm;