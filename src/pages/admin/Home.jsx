/**********************************
* File Name: Home.jsx 		        *
* Author: Ammar S.A.A 			      *
* Output: Sample Admin Dashboard 	*
**********************************/

import { useState, useContext, useEffect } from "react";
import { LoginContext } from "../../Context/Login-Context/login-context";
import "./card9.css";
import axios from "axios";
import { SERVER } from "../../App";
import { Link } from "react-router-dom";
import usersIcon from "../../../public/images/users.png";
import courseIcon from "../../../public/images/course.png";
import orderIcon from "../../../public/images/order.png";
import categoryIcon from "../../../public/images/category.png";

function AdminHome() {
  const { state } = useContext(LoginContext);

  const [users, setUsers] = useState([]);
  const [course, setCourse] = useState([]);
  const [order, setOrder] = useState([]);
  const [category, setCategory] = useState([]);
  let userCount;
  let courseCount;
  let orderCount;
  let categoryCount;

  // Count Users
  useEffect(() => {
    axios
      .get(`${SERVER}api/users/getUsers`)
      .then((json) => setUsers(json.data.users))
      .catch((err) => console.log(err));
  }, []);
  userCount = users?.length ?? 0;

  // Count Courses
  useEffect(() => {
    axios
      .get(`${SERVER}api/course/getCourse`)
      .then((json) => setCourse(json.data.courses))
      .catch((err) => console.log(err));
  }, []);
  courseCount = course?.length ?? 0;

  // Count Orders
  useEffect(() => {
    axios
      .get(`${SERVER}api/order/getorder`)
      .then((json) => setOrder(json.data.orders))
      .catch((err) => console.log(err));
  }, []);
  orderCount = order?.length ?? 0;

  // Count Categories
  useEffect(() => {
    axios
      .get(`${SERVER}api/category/getCategory`)
      .then((json) => setCategory(json.data.categories))
      .catch((err) => console.log(err));
  }, []);
  categoryCount = category?.length ?? 0;

  const cardData = [
    {
      id: "01",
      title: "Users",
      icon: usersIcon,
      total: userCount,
      link: "/admin/users",
      bg: "primary",
    },
    {
      id: "02",
      title: "Courses",
      icon: courseIcon,
      total: courseCount,
      link: "/admin/course",
      bg: "warning",
    },
    {
      id: "03",
      title: "Orders",
      icon: orderIcon,
      total: orderCount,
      link: "/admin/order",
      bg: "info",
    },
    {
      id: "04",
      title: "Categories",
      icon: categoryIcon,
      total: categoryCount,
      link: "/admin/category",
      bg: "success",
    },
  ];

  return (
    <div className="container container-fluid justify-content-center align-items-center">
      <h2 className="text-capitalize pb-1 text-center mt-1">
        {state.userName}&apos;s {state.userRole} Dashboard
      </h2>

      {/* Cards Start */}
      <div className="row m-2">
        {cardData.map((item) => (
          <div className="col-auto" key={item.id}>
            <div className={`card9 text-decoration-none m-1 bg-${item.bg}`}>
              <div className="card__img9">
                <img src={item.icon} height="220vh" alt={item.title} />
              </div>
              <div className="card__subtitle9">
                Total {item.title}: {item.total}
              </div>
              <div className="card__wrapper9">
                <div className="card__title9">Details</div>
                <Link to={item.link}>
                  <div className="card__icon9">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    style={{
                      userSelect: "none",
                      width: "100%",
                      height: "100%",
                      display: "inline-block",
                      fill: "rgb(224, 223, 220)",
                      flexShrink: 0,
                      cursor: "auto",
                    }}
                    color="rgb(224, 223, 220)"
                  >
                    <g color="rgb(224, 223, 220)">
                      <circle cx={128} cy={128} r={96} opacity="0.2" />
                      <circle
                        cx={128}
                        cy={128}
                        r={96}
                        fill="none"
                        stroke="rgb(224, 223, 220)"
                        strokeMiterlimit={10}
                        strokeWidth={16}
                      />
                      <polyline
                        points="134.1 161.9 168 128 134.1 94.1"
                        fill="none"
                        stroke="rgb(224, 223, 220)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={16}
                      />
                      <line
                        x1={88}
                        y1={128}
                        x2={168}
                        y2={128}
                        fill="none"
                        stroke="rgb(224, 223, 220)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={16}
                      />
                    </g>
                  </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Cards End */}
    </div>
  );
}

export default AdminHome;

//       {/* <div className="col-9 p-4">
//         <div className="row">
//           <div className="col-6">
//             <canvas
//               ref={courseSalesChartRef}
//               width="400"
//               height="300"
//             ></canvas>
//           </div>
//           <div className="col-6">
//             <canvas
//               ref={monthlyRevenueChartRef}
//               width="400"
//               height="300"
//             ></canvas>
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// }