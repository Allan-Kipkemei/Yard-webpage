import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { getStudents } from "../services/StudentService";
import "../App.css";

const Students = () => {
  // State variable "students" and setter function "setStudents" initialized using useState hook
  const [students, setStudents] = useState([]);

  // useEffect hook to fetch data from the backend when the component mounts
  useEffect(() => {
    // Define a variable "mounted" to track if the component is still mounted
    let mounted = true;

    // Call the "getStudents" function to retrieve student data from the backend
    getStudents().then((data) => {
      // Inside the Promise's "then" callback
      // Check if the component is still mounted before updating the state
      if (mounted) {
        // Update the "students" state with the fetched data
        setStudents(data);
      }
    });

    // Cleanup function for the useEffect hook
    // This function will run when the component is unmounted
    return () => {
      // Set "mounted" to false to indicate that the component is unmounted
      mounted = false;
    };
  }, []);
  return (
    <div className="container-fluid side-container">
      <div className="row side-row">
        <p id="before-table"></p>
        <Table
          striped
          bordered
          hover
          className="react-bootstrap-table"
          id="dataTable"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Registration No</th>
              <th>Email</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            {students.map((stu) => (
              <tr key={stu.id}>
                <td>{stu.studentId}</td>
                <td>{stu.FirstName}</td>
                <td>{stu.LastName}</td>
                <td>{stu.RegistrationNo}</td>
                <td>{stu.Email}</td>
                <td>{stu.Course}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Students;
