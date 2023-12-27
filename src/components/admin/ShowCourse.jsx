/******************************
* File Name: ShowCourse.jsx  *
* Author: Ammar S.A.A         *
* Output: Show All Courses   *
******************************/

import axios from 'axios';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import DeleteCourse from './DeleteCourse';
import UpdateCourse from './UpdateCourse';
import './style.css';
import { AiFillDelete } from 'react-icons/ai';
import { BsFillPencilFill } from "react-icons/bs";
import { SERVER } from '../../App';

function ShowCourses() {

  const [course, setCourses] = useState([])

  useEffect(() => {
    axios.get(`${SERVER}api/course/getCourse`)
      .then((json) => setCourses(json.data.course))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="table-responsive">
      <Table striped bordered hover className='w-100 table-fluid'>
        <thead>
          <tr>
            <th className='text-center w-25'>ID</th>
            <th className='text-center'>Name</th>
            <th className='text-center'>Thumbnail</th>
            <th className='text-center'>Retail Price</th>
            <th className='text-center'>Category</th>
            <th className='text-center'>Description</th>
            <th className='text-center'>Creation Date</th>
            <th className='text-center'>Updation Date</th>
            <th colSpan={2} className='text-center justify-content-center align-items-center'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {course && course.length > 0 ? (
            course?.map((val, key) =>
              <tr key={key}>
                <td className='text-truncate'>{val._id}</td>
                <td>{val.name}</td>
                <td><img src={val.thumbnail} alt={val.name} className='course-image' /></td>
                <td>{val.retailPrice}</td>
                <td>{val.catID}</td>
                <td>{val.description}</td>
                <td>{val.createdAt}</td>
                <td>{val.updatedAt}</td>
                <td className='text-center justify-content-center align-items-center'>
                  <DeleteCourse
                    Variant="danger"
                    ClassForButton="btn-sm custom-button align-items-center mt-2"
                    Name=""
                    ClassForName="d-none d-lg-inline"
                    Icon={AiFillDelete}
                    ClassForIcon="navbar-icon"
                    setCourses={setCourses}
                    courseID={val._id}
                    initialCourseName={val.name}
                  />
                </td>
                <td className='text-center justify-content-center align-items-center'>
                  <UpdateCourse
                    Variant="primary"
                    ClassForButton="btn-sm custom-button align-items-center mt-2"
                    Name=""
                    ClassForName="d-none d-lg-inline"
                    Icon={BsFillPencilFill}
                    ClassForIcon="navbar-icon"
                    setCourses={setCourses}
                    course={val}

                  />
                </td>
              </tr>
            )) : (
            <tr>
              <td colSpan="10" className="bg-light text-center text-capitalize">Oops! No Courses Found.</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default ShowCourses;
