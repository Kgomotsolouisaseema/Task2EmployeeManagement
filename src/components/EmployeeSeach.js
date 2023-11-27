import React, { useState } from 'react';

function EmployeeSeach({ employees = [], onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  console.log("what is at search " ,searchQuery )
  const [selectedEmployee ,setSelectedEmployee]= useState(null)

  // const handleSearch = () => {
  //   // Filter employees based on the search query
  //   const filteredEmployees = employees.filter((employee) =>
  //     employee.idNumber.includes(searchQuery)
  //   );

  //   // Call the onSearch callback with the filtered employees
  //   onSearch && onSearch(filteredEmployees);
  // };

  const handleSearch = () =>{
    console.log("search btn clicked")
    //Does employees have data it in before we filter by id 
    if (!Array.isArray(employees)){
      console.error("Employees array is not empty");
      return;
    }
    const filteredEmployees = employees.filter((employee)=>
    employee.idNumber.includes(searchQuery)
    );
    onSearch && onSearch(filteredEmployees);
  };

  //handle employee search 
  const handleEmployeeSelect = (employee) =>{
    console.log("hand;e employee select btn clicked ")
    setSelectedEmployee(employee)

  };

  return (
    <div className="employee-search-container">
        <h2> Employee Search </h2>

      <input
        type="text"
        placeholder="Search by ID"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ol>
      {employees.map((employee) => (
        <li key={employee.id}>
          Employee Name :{employee.name} 
          Position : {employee.employeePosition}{" "}
          <button onClick={() => handleEmployeeSelect(employee)}>Select</button>
        </li>

        ))}

      </ol>
      {/*Display selected employee details for update/delete*/ }
      {selectedEmployee && (
        <div>
          <h3>{selectedEmployee.name}</h3>
          <p> ID: {selectedEmployee.idNumber}</p>

          {/* <label htmlFor="name"> Employee Name :</label>
        <input
          type="text"
          label="Name"
          name="name"
          required
          // onChange={(e)=>setName(e.target.value)}
        />
         <label htmlFor="name"> Employee ID Number:</label>
        <input
          type="number"
          label="ID number"
          name="num"
          required
          // onChange={(e)=>setName(e.target.value)}
        /> */}

        </div>


      )}


    </div>
  );
}

export default EmployeeSeach;
