import React, { useState } from 'react';

function EmployeeSeach({ employees, onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Filter employees based on the search query
    const filteredEmployees = employees.filter((employee) =>
      employee.idnumber.includes(searchQuery)
    );

    // Call the onSearch callback with the filtered employees
    onSearch && onSearch(filteredEmployees);
  };

  return (
    <div className="employee-search-container">
      <input
        type="text"
        placeholder="Search by ID"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default EmployeeSeach;
