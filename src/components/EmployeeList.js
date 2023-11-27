import React, { useEffect, useState } from "react";

import {
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from "../utils/localStorage";

function EmployeeList() {
  //Use state for storing employee data
  const [employees, setEmployees] = useState([ ]);
  console.log(employees)

  //use Effect to load data from local  storage
  useEffect(() => {
    const storedEmployees = getDataFromLocalStorage("Employees");
    console.log(storedEmployees)
    if (storedEmployees) {
      setEmployees(storedEmployees);
    }
    //Load data from local storage
  }, []);


  //function to handle employee deletion
  const deleteEmployee = (id) => {
    console.log("Delete employee btn clicked ");
    const updatedEmployees = employees.filter(
      (employee) => employee.id !== id
    );
    setEmployees(updatedEmployees);
    saveDataToLocalStorage("Employees", updatedEmployees);
    //Delete employee from local storage
  };

  return (
    <div>
      <h2> Employee List  </h2>

      <ol>
      {employees.map((employee) => (
        <li key={employee.id}>
          Employee Name :{employee.name} 
          Position : {employee.employeePosition}{" "}
      
          <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
        </li>

        ))}

      </ol>
      
     
    </div>
  
  );
}

export default EmployeeList;
