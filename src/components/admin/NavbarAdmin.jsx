
import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './style.css'
import AddUser from './AddUser'
import AddCategory from './AddCategory';
import AddCourse from './AddCourse';
// import DeleteCourse from './DeleteCourse';
// import UpdateCourse from './UpdateCourse';
// import UpdateUser from './UpdateUser';
// import UpdateBrand from './UpdateBrand';
// import UpdateCategory from './UpdateCategory';
// import DeleteCategory from './DeleteCategory';
// import DeleteBrand from './DeleteBrand';
// import DeleteUser from './DeleteUser';
// import UpdateOrder from './UpdateOrder';
// import DeleteOrder from './DeleteOrder';
// import { BsFillPencilFill } from 'react-icons/bs';
// import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import './app';
import './style.css'
import { PiSignOut } from "react-icons/pi";
import ProfileForm from "../../components/ProfileForm";
import { ButtonGroup } from "react-bootstrap";
import { AiOutlinePlusSquare } from "react-icons/ai";
import AddOrder from './AddOrder';
import { GlobalContext } from '../../Context/context';
import { LoginContext } from '../../Context/Login-Context/login-context';

function NavbarAdmin() {
	const { state: loginState, dispatch: loginDispatch } = useContext(LoginContext);
	const { state: globalState, dispatch: globalDispatch } = useContext(GlobalContext);

	const logOutUser = () => {
		loginDispatch({ type: "LOGOUT_USER" });
	}
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="white" sticky="top" className="custom-navbar">
				<Container>
					<Navbar.Brand href="/" className='nav-brand text-success'>Learners</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link>
								<Link className="text-decoration-none mx-2 nav-color" to="/admin">
									Dashboard
								</Link>
							</Nav.Link>
							<NavDropdown title="User" id="collapsible-nav-dropdown" className="d-flex">
								<NavDropdown.Item href="#">
									<AddUser
										Variant="white"
										ClassForButton="btn align-items-center"
										Name=" Add User"
										ClassForName=""
										Icon={AiOutlinePlusSquare}
										ClassForIcon="navbar-icon"
									/>
								</NavDropdown.Item>
								{/* <NavDropdown.Item href="#">
									<UpdateUser
										Variant="white"
										ClassForButton="btn align-items-center"
										Name=" Update User"
										ClassForName=""
										Icon={BsFillPencilFill}
										ClassForIcon="navbar-icon"
									/>
									</NavDropdown.Item>
								<NavDropdown.Item href="#">
								<DeleteUser
										Variant="white"
										ClassForButton="btn align-items-center"
										Name=" Delete User"
										ClassForName=""
										Icon={AiFillDelete}
										ClassForIcon="navbar-icon"
									/>
									</NavDropdown.Item> */}
								<NavDropdown.Divider />
								<NavDropdown.Item href="/admin/users">View All</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Category" className='' id="basic-nav-dropdown">
								<NavDropdown.Item href="#">
									<AddCategory
										Variant="white"
										ClassForButton="btn align-items-center"
										Name=" Add Category"
										ClassForName=""
										Icon={AiOutlinePlusSquare}
										ClassForIcon="navbar-icon"
									/>
								</NavDropdown.Item>
								{/* <NavDropdown.Item href="#">
									<UpdateCategory
										Variant="white"
										ClassForButton="btn align-items-center"
										Name=" Update Category"
										ClassForName=""
										Icon={BsFillPencilFill}
										ClassForIcon="navbar-icon"
									/>
								</NavDropdown.Item>
								<NavDropdown.Item href="#">
									<DeleteCategory
										Variant="white"
										ClassForButton="btn align-items-center"
										Name=" Delete Category"
										ClassForName=""
										Icon={AiFillDelete}
										ClassForIcon="navbar-icon"
									/>
								</NavDropdown.Item> */}
								<NavDropdown.Divider />
								<NavDropdown.Item href="/admin/category">
									View All
								</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Order" id="basic-nav-dropdown">
								<NavDropdown.Item href="#"><AddOrder
										Variant="white"
										ClassForButton="btn align-items-center"
										Name=" Add Order"
										ClassForName=""
										Icon={AiOutlinePlusSquare}
										ClassForIcon="navbar-icon"
									/></NavDropdown.Item>
								{/* <NavDropdown.Item href="#">
									<UpdateOrder
										Variant="white"
										ClassForButton="btn align-items-center"
										Name=" Update Order"
										ClassForName=""
										Icon={BsFillPencilFill}
										ClassForIcon="navbar-icon"
									/>
								</NavDropdown.Item>
								<NavDropdown.Item href="#"><DeleteOrder
										Variant="white"
										ClassForButton="btn align-items-center"
										Name=" Delete Order"
										ClassForName=""
										Icon={AiFillDelete}
										ClassForIcon="navbar-icon"
									/>
								</NavDropdown.Item> */}
								<NavDropdown.Divider />
								<NavDropdown.Item href="/admin/order">
									View All
								</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title="Course" id="basic-nav-dropdown">
								<NavDropdown.Item href="#">
									<AddCourse
										Variant="white"
										ClassForButton="btn align-items-center"
										Name=" Add Course"
										ClassForName=""
										Icon={AiOutlinePlusSquare}
										ClassForIcon="navbar-icon"
									/>
								</NavDropdown.Item>
								{/* <NavDropdown.Item href="#">
									<UpdateCourse
										Variant="white"
										ClassForButton="btn align-items-center"
										Name=" Update Course"
										ClassForName=""
										Icon={BsFillPencilFill}
										ClassForIcon="navbar-icon"
									/>
								</NavDropdown.Item>
								<NavDropdown.Item href="#">
									<DeleteCourse
										Variant="white"
										ClassForButton="btn align-items-center"
										Name=" Delete Course"
										ClassForName=""
										Icon={AiFillDelete}
										ClassForIcon="navbar-icon"
									/>
								</NavDropdown.Item> */}
								<NavDropdown.Divider />
								<NavDropdown.Item href="/admin/course">
									View All
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<ButtonGroup aria-label="Basic example">
							<ProfileForm />
							<Button variant="light" className="custom-button d-flex align-items-center gap-2" onClick={logOutUser}>
								<PiSignOut className="navbar-icon text-white" />
								<span className="d-none d-lg-inline text-white"> Sign Out</span>
							</Button>
						</ButtonGroup>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default NavbarAdmin;