import { useState, useEffect } from 'react';
     import Filters from './components/Filters.jsx';
     import CompanyCard from './components/CompanyCard.jsx';
     import CompanyTable from './components/CompanyTable.jsx';
     import AddCompanyForm from './components/AddCompanyForm.jsx';

     function App() {
       const [filteredCompanies, setFilteredCompanies] = useState([]);
       const [viewMode, setViewMode] = useState('cards');
       const [filters, setFilters] = useState({
         name: '',
         industry: '',
         location: '',
         size: ''
       });
       const [loading, setLoading] = useState(false);
       const [error, setError] = useState(null);

       useEffect(() => {
         fetchCompanies();
       }, []);

       const fetchCompanies = async (filters = {}) => {
         setLoading(true);
         setError(null);
         try {
           const queryParams = new URLSearchParams(filters).toString();
           const url = `http://localhost:5000/api/companies${queryParams ? '?' + queryParams : ''}`;
           const response = await fetch(url);
           if (!response.ok) throw new Error('Failed to fetch companies');
           const data = await response.json();
           setFilteredCompanies(data);
         } catch (error) {
           console.error('Error fetching companies:', error);
           setError('Unable to load companies. Please try again later.');
         } finally {
           setLoading(false);
         }
       };

       const applyFilters = (newFilters) => {
         setFilters(newFilters);
         fetchCompanies(newFilters);
       };

       const resetFilters = () => {
         const emptyFilters = { name: '', industry: '', location: '', size: '' };
         setFilters(emptyFilters);
         fetchCompanies(emptyFilters);
       };

       const handleAddCompany = (newCompany) => {
         setFilteredCompanies((prev) => [...prev, newCompany]);
       };

       return (
         <div className="min-h-screen bg-gray-100 p-8">
           <header className="text-center mb-8">
             <h1 className="text-4xl font-bold text-gray-800">Companies Dashboard</h1>
           </header>
           <AddCompanyForm onAddCompany={handleAddCompany} />
           <Filters onFilterChange={applyFilters} onReset={resetFilters} />
           <div className="flex justify-end mb-4">
             <button
               onClick={() => setViewMode(viewMode === 'cards' ? 'table' : 'cards')}
               className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
             >
               Toggle to {viewMode === 'cards' ? 'Table' : 'Cards'} View
             </button>
           </div>
           {loading && <p className="text-center text-gray-600">Loading companies...</p>}
           {error && <p className="text-center text-red-500">{error}</p>}
           {!loading && !error && filteredCompanies.length === 0 && (
             <p className="text-center text-gray-500 mt-8">No companies found.</p>
           )}
           {!loading && !error && filteredCompanies.length > 0 && (
             viewMode === 'cards' ? (
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                 {filteredCompanies.map((company) => (
                   <CompanyCard
                     key={company._id || company.id || Math.random()}
                     company={company}
                   />
                 ))}
               </div>
             ) : (
               <CompanyTable companies={filteredCompanies} />
             )
           )}
         </div>
       );
     }

     export default App;