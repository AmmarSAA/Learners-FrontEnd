/**********************************
* File Name: UpdateCategory.jsx   *
* Author: Ammar S.A.A 			      *
* Output: Update Category Modal   *
**********************************/

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./style.css";
import axios from 'axios';
import { SERVER } from "../../App";
import AddCategory from "./AddCategory";

function UpdateCategory({ setCategories, category, Variant, ClassForButton, Name, ClassForName, Icon, ClassForIcon }) {
  const [show, setShow] = useState(false);
  const [updatedName, setUpdatedName] = useState(""); // State to hold the updated category name
  const [categoryID, setCategoryID] = useState(""); // State to hold the category ID

  const handleClose = () => setShow(false);
  const handleShow = () => {
    if (category) {
      setCategoryID(category._id); // Set the category ID when the modal is shown
    } else {
      setCategoryID(null);
    }
    setShow(true);
  };

  const updateCategory = () => {
    if (categoryID && updatedName) {
      axios.put(`${SERVER}api/category/updateCategory`, {
        _id: categoryID,
        Name: updatedName,
      })
        .then((response) => {
          console.log(response.data.message);
          setCategories(prevCategories => prevCategories.map(b => b._id === category._id ? { ...b, name: updatedName } : b));
          setShow(false);
        })
        .catch((error) => {
          console.error("Error updating category:", error.message);
        });
    }
  }

  return (
    <>
      <Button variant={Variant} className={ClassForButton} onClick={handleShow}>
        {Icon && <Icon className={ClassForIcon} />}
        {Name && <span className={ClassForName}> {Name}</span>}
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="d-flex align-items-center justify-content-center">
          <form className="form1">
            <p className="title1">Category</p>
            <p className="message1">Update Existing Category.</p>
            <label>
              <input
                className="input1 pb-1"
                type="text"
                placeholder="Enter Category ID to Update"
                value={categoryID}
                onChange={(e) => setCategoryID(e.target.value)}
                required={true}
              />
              <span>Category ID</span>
            </label>
            <label>
              <input
                className="input1 pb-1"
                type="text"
                placeholder="Enter Updated Category Name"
                value={updatedName || category?.name}
                onChange={(e) => setUpdatedName(e.target.value)}
                required
              />
              <span>Category</span>
            </label>
            <button className="submit1" onClick={updateCategory}>Update</button>
            <p className="signin1">
              Wanna Add New Category?{" "}
              <a href="#" className="btn-sm">
                <AddCategory Name={"Add Now"} Variant={"outline-primary"} />
              </a>
            </p>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UpdateCategory;
