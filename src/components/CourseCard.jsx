/******************************
* File Name: CourseCard.jsx  *
* Author: Ammar S.A.A         *
* Output: Each Course Card   *
******************************/

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CourseCard({course}) {
  return (
    <div className="col-md-4 my-4">
      <div className="container">
      <Card style={{width: '250px', height: '63vh', border:'none', outline:'none',position:'relative'}} className="card-css">
        <Card.Img variant="top" src={course.thumbnail} style={{width: '100%', height: '150px'}}/>
        <Card.Body>
          <Card.Title>{course.title}</Card.Title>
          <Card.Text>{course.description.length > 50 ?
            `${course.description.substring(0, 40)} ...` : course.description
          }
          </Card.Text>
          <Card.Text> <b>Price: </b>$ {course.price}</Card.Text>
          <Link to={`/course/${course.id}`} style={{position:'absolute', bottom:'20%',right:'12px'}} className="btn btn-outline-dark float-end">View Details</Link>
        </Card.Body>
      </Card>
    </div>
    </div>
  );
}

export default CourseCard;
