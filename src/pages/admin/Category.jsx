/********************************
* File Name: Category.jsx 	        *
* Author: Ammar S.A.A 	      	*
* Output: Category Page for Admin  *
********************************/

import React from 'react'
import ShowCategories from '../../components/admin/ShowCategory'
import { Form } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'

export default function Category() {
  return (
    <div className="container">
      <div className="justify-content-between align-items-center">
        <div className="row">
          <div className="col-8">
            <div className="h4 p-3">All Categories</div>
          </div>
          <div className="col-4">
            <Form inline="true">
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className="mt-1 p-2 pb-2 m-0"
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit" className='custom-button px-3 d-flex align-items-center'><FaSearch /></Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
        <ShowCategories />
      </div>
    </div>
  )
}
