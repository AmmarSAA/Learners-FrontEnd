/*****************************
* File Name: apiServices.jsx *
* Author: Ammar S.A.A 	     *
* Output: API funcitons:   	 *
* 1. fetchCategories         *
* 1. getCourses             *
*****************************/

import axios from "axios";

export const fetchCategories = async () => {    
    try {
      const response = await fetch('https://dummyjson.com/products/categories');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  };

export const getCourse = async (courseId) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/${courseId}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch course");
    }
  };
  