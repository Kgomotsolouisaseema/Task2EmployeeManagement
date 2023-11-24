
import './App.css';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import EmployeeSeach from './components/EmployeeSeach';
import {ToastContainer, toast} from "react-toastify";
import  'react-toastify/dist/ReactToastify.css';
import EmployeeSearch from './components/EmployeeSeach';
import React, { useState } from 'react';

function App() {
  // const notify = () => toast("Wow so easy !");

  const [employees, setEmployees] = useState([ ]);

  const handleUpdate = (updatedEmployees)=>{
    setEmployees(updatedEmployees);
  };

  const handleSearch = (filteredEmployees)=>{
    setEmployees(filteredEmployees)
  }
  

  // //display success message
  // toast.success('Employee added successfully!', {
  //   position: 'top-right',
  //   autoClose: 3000, // Close the notification after 3 seconds
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  // });

  return (
    <div className="App">
     <EmployeeForm onUpdate={handleUpdate}/>
     <EmployeeSearch employees={employees} onSearch={handleSearch} />
     <EmployeeList employees={employees}/>
     <EmployeeSeach/>
     
     <ToastContainer/>
    </div>
  );
}

export default App;
  