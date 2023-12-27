/******************************
* File Name: AddCategory.jsx  *
* Author: Ammar S.A.A         *
* Output: Add Category Modal  *
******************************/

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { SERVER } from "../../App";
import UpdateCategory from "./UpdateCategory";

function AddCategory({ Variant, ClassForButton, Name, ClassForName, Icon, ClassForIcon }) {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const addCategory = () => {
    setIsLoading(true);
  
    if (!categoryName) {
      setError("Please fill in all fields.");
      setIsLoading(false);
      return;
    }
  
    axios
      .post(`${SERVER}api/category/createCategory`, { Name: categoryName })
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        setError(error.response);
      })
      .finally(() => {
        setIsLoading(false);
        setShow(false);
      });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCategoryNameChange = (event) => {
    setCategoryName(event.target.value);
  };

  return (
    <>
      <Button variant={Variant} className={ClassForButton} onClick={handleShow}>
        {Icon && <Icon className={ClassForIcon} />}
        {Name && <span className={ClassForName}>{Name}</span>}
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="d-flex align-items-center justify-content-center">
          <form className="form1">
            {isLoading ? (
              <h4 className="alert alert-info text-center text-capitalize">
                Creating Category...
              </h4>
            ) : message ? (
              <h4 className="alert alert-success text-center text-capitalize">
                {message}
              </h4>
            ) : error ? (
              <h4 className="alert alert-danger text-center text-capitalize">
                {error}
              </h4>
            ) : null}
            <p className="title1">Category</p>
            <p className="message1">Add New Category.</p>
            <label>
              <input
                className="input1 pb-1"
                type="text"
                placeholder=""
                required={true}
                value={categoryName}
                onChange={handleCategoryNameChange}
              />
              <span>Category</span>
            </label>
            <button className="submit1" onClick={addCategory}>
              Add New
            </button>
            <p className="signin1">
              Wanna Update Category?{" "}
              <a href="#" className="btn-sm">
                <UpdateCategory Name={"Update Now"} Variant={"outline-primary"} />
              </a>
            </p>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddCategory;
