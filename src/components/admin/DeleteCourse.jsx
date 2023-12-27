/******************************
* File Name: DeleteCourse.jsx 	*
* Author: Ammar S.A.A 			  *
* Output: Delete Course Modal  *
******************************/

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './style.css';
import axios from 'axios';
import { SERVER } from '../../App';

export default function DeleteCourse({ setCourses, courseID, initialCourseName, Variant, ClassForButton, Name, ClassForName, Icon, ClassForIcon }) {
  const [show, setShow] = useState(false);
  const [courseName, setCourseName] = useState(initialCourseName || ''); // Use the initialCourseName if available
  const handleClose = () => {
    setShow(false);
    setCourseName(initialCourseName || ''); // Reset the courseName input on close
  };

  const handleShow = () => setShow(true);

  const deleteCourse = () => {
    axios.delete(`${SERVER}api/course/deleteCourse`, {
      data: { Name: courseName } // Sending the _id to delete the course
    })
      .then((response) => {
        console.log(response.data.message);
        // Update the state after successful deletion
        setCourses(prevCourses => prevCourses.filter(course => course._id !== courseID));
        setShow(false);
      })
      .catch((error) => {
        console.error("Error deleting course:", error.message);
      });
  }

  return (
    <>

      <Button variant={Variant} className={ClassForButton} onClick={handleShow}>
        {Icon && <Icon className={ClassForIcon} />} {/* Conditional rendering of the icon */}
        {Name && <span className={ClassForName}> {Name}</span>} {/* Conditional rendering of the name */}
      </Button>
      {/* <Button variant="white" className="btn align-items-center" onClick={handleShow}>
        <AiFillDelete className="navbar-icon" />
        <span className="d-none d-lg-inline"> Delete Course</span>
      </Button> */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="d-flex align-items-center justify-content-center">
          <form className="form1">
            <p className="title1">Course</p>
            <p className="message1">Delete Existing Course.</p>
            <input
              hidden="true"
              value={courseID}
            />
            <label>
              <input
                className="input1 pb-1"
                type="text"
                placeholder="Enter Course Name"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
              />
              <span>Name</span>
            </label>
            <button className="submit1" onClick={deleteCourse}>Delete</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
