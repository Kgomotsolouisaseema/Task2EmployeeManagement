
import './App.css';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import EmployeeSeach from './components/EmployeeSeach';

import EmployeeSearch from './components/EmployeeSeach';
import React, { useState } from 'react';

function App() {
  

  const [employees, setEmployees] = useState([ ]);

  const handleUpdate = (updatedEmployees)=>{
    setEmployees(updatedEmployees);
  };

  const handleSearch = (filteredEmployees)=>{
    setEmployees(filteredEmployees)
  }
  


  return (
    <div className="App">
     <EmployeeForm onUpdate={handleUpdate}/>
     <EmployeeList employees={employees}/>
     <EmployeeSearch employees={employees} onSearch={handleSearch} />
     <EmployeeSeach/>

    </div>
  );
}

export default App;
  