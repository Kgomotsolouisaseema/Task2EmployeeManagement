import React, { useEffect, useState } from "react";

import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import {
  getDataFromLocalStorage,
  saveDataToLocalStorage,
} from "../utils/localStorage";

function EmployeeList() {
  //Use state for storing employee data
  const [employees, setEmployess] = useState([ ]);

  //use Effect to load data from local  storage
  useEffect(() => {
    const storedEmployees = getDataFromLocalStorage("Employees");
    if (storedEmployees) {
      setEmployess(storedEmployees);
    }
    //Load data from local storage
  }, []);

  //function to handle employee deletion
  const deleteEmployee = (employeeId) => {
    console.log("Delete employee btn clicked ");
    const updatedEmployees = employees.filter(
      (employee) => employee.id !== employee.id
    );
    setEmployess(updatedEmployees);
    saveDataToLocalStorage("Employees", updatedEmployees);
    //Delete employee from local storage
  };

  return (
    <Paper>
      <h2> Employee List  </h2>

      <ul>
      {employees.map((employee) => (
        <li key={employee.id}>
          {employee.name} -{" "}
      


          <Button onClick={() => deleteEmployee(employee.id)}>Delete</Button>
        </li>

        ))}

      </ul>
      
     
    </Paper>
  
  );
}

export default EmployeeList;
