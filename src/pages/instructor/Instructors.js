import React, { Component } from "react";
import Datas from "../../data/instructor/instructor.json";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import HeaderTwo from "../../components/HeaderTwo";
// import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import Pagination from "./../../components/Pagination";
import FooterTwo from "../../components/FooterTwo";
import Footer from "../../components/Footer";
import { Styles } from "./styles/instructor.js";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { listStaff } from "../../actions/staffActions";

function Instructor() {
  const dispatch = useDispatch();
  const stafflist = useSelector((state) => state.staffList);
  const { error, loading, staff } = stafflist;
  console.log("staff", staff);
  useEffect(() => {
    dispatch(listStaff());
  }, [dispatch]);
  return (
    <Styles>
      {/* Main Wrapper */}
      <div className="main-wrapper instructor-page">
        {/* Header 2 */}
        <HeaderTwo />

        {/* Breadcroumb */}
        {/* <BreadcrumbBox title="Board of Managment" /> */}

        {/* Instructor Area */}
        <section className="instructor-area">
          <Container>
            <Row>
              {staff.map((data, i) => (
                <Col lg="3" md="4" sm="6" key={i}>
                  <div className="instructor-item">
                    {/* <Link to={process.env.PUBLIC_URL + "/instructor-details"}><img src={process.env.PUBLIC_URL + `/assets/images/${data.personImage}`} alt="" className="img-fluid" /></Link> */}
                    <img
                      src={
                        process.env.REACT_APP_API_URL + `${data.person_image}`
                      }
                      alt=""
                      className="img-fluid"
                    />

                    <div className="img-content text-center">
                      {/* <h5><Link to={process.env.PUBLIC_URL + "/instructor-details"}>{data.personName}</Link></h5> */}
                      <h5>{data.person_name}</h5>
                      <p>{data.person_title}</p>
                      <small>{data.person_occupation}</small>
                      {/* <ul className="list-unstyled list-inline">
                                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + data.socialLinks.facebook}><i className="fab fa-facebook-f"></i></a></li>
                                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + data.socialLinks.twitter}><i className="fab fa-twitter"></i></a></li>
                                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + data.socialLinks.youtube}><i className="fab fa-youtube"></i></a></li>
                                                    </ul> */}
                    </div>
                  </div>
                </Col>
              ))}

              <Col md="12" className="text-center">
                {/* <Pagination /> */}
              </Col>
            </Row>
          </Container>
        </section>

        {/* Footer 2 */}
        {/* <FooterTwo /> */}
        <Footer />
      </div>
    </Styles>
  );
}

export default Instructor;
