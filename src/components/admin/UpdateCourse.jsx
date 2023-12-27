/********************************
* File Name: UpdateCourse.jsx  *
* Author: Ammar S.A.A           *
* Output: Update Courses       *
********************************/

import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import axios from "axios";
import { storage } from "../../utils/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { SERVER } from "../../App";

export default function UpdateCourse({
  setCourses,
  Variant,
  ClassForButton,
  Name,
  ClassForName,
  Icon,
  ClassForIcon,
}) {
  const [show, setShow] = useState(false);
  const [CourseName, setCourseName] = useState("");
  const [CourseRetailPrice, setCourseRetailPrice] = useState("");
  const [CourseThumbnail, setCourseThumbnail] = useState(null);
  const [description, setDescription] = useState("");
  const [categoryVal, setCategoryVal] = useState("");
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${SERVER}api/category/getCategory`)
      .then((response) => {
        setCategories(response.data.categories);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const storageRef = ref(storage);

  const handleClose = () => {
    setShow(false);
    setError(null); // Reset any previous errors
  };

  const handleShow = () => setShow(true);

  const handleUpdateCourse = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const payload = {
        _id: setCourses,
        courseName: CourseName,
        retailPrice: CourseRetailPrice,
        thumbnail: CourseThumbnail,
        description: description,
        catID: categoryVal,
      };

      const response = await axios.put(
        `${SERVER}api/course/updateCourse`,
        payload
      );

      console.log(response.data);
      setIsLoading(false);
      setShow(false);
    } catch (error) {
      console.error(error);
      setError("Error updating course.");
      setIsLoading(false);
    }
  };


  return (
    <>
      <Button variant={Variant} className={ClassForButton} onClick={handleShow}>
        {Icon && <Icon className={ClassForIcon} />}
        {Name && <span className={ClassForName}> {Name}</span>}
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="d-flex align-items-center justify-content-center">
          <form onSubmit={handleUpdateCourse} className="form1">
            {isLoading && <p className="alert alert-info">Updating course...</p>}
            {error && <p className="alert alert-danger">{error}</p>}
            <p className="title1">Course</p>
            <p className="message1">Update Existing Course.</p>
            <label>
              <input
                className="input1 pb-1"
                type="text"
                placeholder=""
                required={true}
                value={CourseName}
                onChange={(e) => setCourseName(e.target.value)}
              />
              <span>Name</span>
            </label>
            <label>
              <input
                className="input1 pb-1"
                type="number"
                placeholder=""
                required={true}
                value={CourseRetailPrice}
                onChange={(e) => setCourseRetailPrice(e.target.value)}
              />
              <span>Retail Price</span>
            </label>
            <Form.Group controlId="formFileThumbnail" className="mb-3">
              <Form.Label>Thumbnail</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setCourseThumbnail(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                aria-label="Please Select a Category"
                onChange={(e) => setCategoryVal(e.target.value)}
              >
                <option>Please Select a Category</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Description"
              className="mb-3"
            >
              <Form.Control
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                as="textarea"
                placeholder="Course Description"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <button type="submit" className="btn btn-primary">
              Update Course
            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
