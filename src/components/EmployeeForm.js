import React from "react";
import { useState } from "react";
import "../styles/EmployeeForm.css";

// import { saveDataToLocalStorage } from "../utils/localStorage";
import swal from "sweetalert";

function EmployeeForm({ onUpdate }) {
  //Usestates for toasty

  // const [successMessage, setSuccessMessage] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");

  //Use state for form Data

  // const [formData, setFormData] = useState({
  //   name: "",
  //   surname: "",
  //   idnumber: "",
  //   email: "",
  //   employeePositon: "",
  //   phoneNumber: "",
  //   image: "",
  // });

  //INDIVIDUAL STATES FOR ALL FIELDS
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [email, setEmail] = useState("");
  const [employeePosition, setEmployeePosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

 

  //FUNCTION TO HANDLE CHANGE
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));

  // };

  //HANDLE IMAGE CHANGE
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    //update imgae state
    setImage(file);

    //Preview the image
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  //Function to handle form submission (add/update  employee)
  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: idNumber, //unique identifier
      name,
      surname,
      idNumber,
      email,
      employeePosition,
      phoneNumber,
      image,
    };

    try {
      const newEmployee = {
        id: idNumber, //unique identifier
        name,
        surname,
        idNumber,
        email,
        employeePosition,
        phoneNumber,
        image,
      };
      console.log(newEmployee)
      //get employees from local storage
      const storedEmployees =
        JSON.parse(localStorage.getItem("Employees")) || [];
      //Update employee list with new employee
      const updatedEmployees = [...storedEmployees, newEmployee];
      //save updated employees list to loacl storage
      // saveDataToLocalStorage('Employees', updatedEmployees);
      localStorage.setItem("Employees", JSON.stringify(updatedEmployees));

      //Clear form fields after submission
      setName("");
      setSurname("");
      setIdNumber("");
      setEmail("");
      setEmployeePosition("");
      setPhoneNumber("");
      setImage("");
      setImagePreview("");

      // Notify success
      swal("'Employee added successfully!'");
      // setSuccessMessage('Employee added successfully!');
      // setErrorMessage('');/
      onUpdate && onUpdate(updatedEmployees);

      // Display a success notification
      swal("Employee added successfully");
    } catch (error) {
      // Handle errors
      // setSuccessMessage('');
      swal("Failed to add employee. Please try again.");
      console.error("Error adding employee:", error);
    }
  };

   //HANDLE INPUT CHANGE FUNCTION , THIS DYNAMICALLY CHANGES THE STATE OF THE FIELD BASED ON THE VALUE OF THE SET INPUT
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name === "phoneNumber") {
  //     //update the state  based on inout name
  //     switch (name) {
  //       case "name":
  //         setName(value);
  //         break;
  //       case "surname":
  //         setSurname(value);
  //         break;
  //       case "idnumber":
  //         setIdNumber(value);
  //         break;
  //       case "email":
  //         setEamil(value);
  //         break;
  //       case "employeePosition":
  //         setEmployeePosition(value);
  //         break;
  //       case "image":
  //         setImage(value);
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  // };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Employee Name</label>
        <input
          type="text"
          label="Name"
          name="name"
          required
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <label htmlFor="surname">Employee Surname:</label>
        <input
          type="text"
          id="surname"
          name="surname"
          required
          value={surname}
          onChange={(e)=>setSurname(e.target.value)}
          // onChange={handleInputChange}
        />
        <label htmlFor="idnumber">Employee ID Number :</label>
        <input
          type="text"
          id="Idnumber"
          name="Idnumber"
          required
          value={idNumber}
          onChange={(e)=>setIdNumber(e.target.value)}
          // onChange={handleInputChange}
        />
        <label htmlFor="email">Employee Email :</label>
        <input
          type="text"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          // onChange={handleInputChange}
        />
        <label htmlFor="position">Employee Positon :</label>
        <input
          type="text"
          id="position"
          name="position"
          required
          value={employeePosition}
          onChange={(e)=>setEmployeePosition(e.target.value)}
          // onChange={handleInputChange}
        />
      
        <label htmlFor="phonenumber">Employee Phone Number:</label>
        <input
          type="tel"
          id="phonenumber"
          name="phonenumber"
          placeholder="071 459 8679"
          // required
          value={phoneNumber}
          onChange={(e)=>setPhoneNumber(e.target.value)}
          // onChange={handleInputChange}
        />
        <label htmlFor="image">Employee Image:</label>
        <input
          type="file" //type for adding images , the type attribute allows for that
          id="img"
          name="img"
          accept="image/*" //field to only accept images
          value={image}
          // onChange={handleImageChange}
          onChange={(e)=>setImage(e.target.files)}
        />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            style={{ maxWidth: "100%", maxHeight: "200px" }}
          />
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
