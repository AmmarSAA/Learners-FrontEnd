/*******************************
 * File Name: CategoryPage.jsx *
 * Author: Ammar S.A.A          *
 * Output: Category Page        *
 *******************************/

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CourseCard from "../components/CourseCard";
import Spinner from 'react-bootstrap/Spinner';

export default function CategoryPage() {
  const { categoryName } = useParams();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/category/${categoryName}`);
        setCourses(response.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [categoryName]);

  return (
    <div className="container">
      <div className="text-center">
        <h1 className="my-5">{categoryName.toUpperCase()}</h1>
      </div>

      <div className="row">
        {courses && courses.length > 0 ? (
          courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))
        ) : (
          <div className="d-flex justify-content-center align-items-center" style={{ width: '100vw', height: '60vh' }}>
            <Spinner animation="grow" />
          </div>
        )}
      </div>
    </div>
  );
}
