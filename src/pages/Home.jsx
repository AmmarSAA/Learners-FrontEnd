/****************************
* File Name: Home.jsx       *
* Author: Ammar S.A.A       *
* Output: User Landing Page *
****************************/

import React from 'react';
import CrouselItem from '../components/CrouselItem';
import '../App.css';
import Badge from 'react-bootstrap/Badge';
import { Link, useParams } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Feature from '../components/Feature';
import ChooseUs from '../components/ChooseUs';
import FreeCourse from '../components/FreeCourse';
import Testimonials from '../components/Testimonials';
import Partner from '../components/Partner';
import About from './About';
import HeroSection from "../components/Hero-Section/HeroSection";


const Home = () => {
  return (
    <>
      <div className="container">
        {/* Crousel start from here */}
        {/* <CrouselItem /> */}
        {/* Crousel end */}
        <HeroSection />
        {/* Partners Section */}
        <Partner />

        {/* About Us */}
        <About />

        {/* <div className="container">
        <header className="jumbotron mt-5">
          <h1 className="prod-head my-5 shadow-text">Welcome to Learners</h1>
          <p className="text-center fs-5 fw-2">Anytime Anywhere
            Learn on your
            Suitable Schedule</p>
          <hr className="my-4" />
          <div className='d-flex justify-content-between align-items-center browse-c'>
            <p className='me-4 browse'>Explore our wide range of high-quality courses.</p>
            <Link to="/courses"><Button type="button" className='custom-button'>Browse Courses</Button></Link>
          </div>
        </header>
      </div> */}

        {/* Main section starts from here */}

        {/* Another Categories */}
        <HomePage />

        <ChooseUs />

        {/* Feature Course */}
        <Feature />

        <FreeCourse />

        <Testimonials />

      </div>
    </>
  );
};

export default Home;
