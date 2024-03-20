import React from "react";
import { Styles } from "./styles/cardSection";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../Cards";

const CardSection = () => {
  return (
    <Styles>
      <section className="cards">
        <Container>
          <Row className="cardsRow">
            <Col className="mb-4 mx-5 flex-grow-0 flex-shrink-0 mt-4">
              <Cards />
            </Col>
            <Col className="mb-4 mx-5 flex-grow-0 flex-shrink-0 mt-4">
              <Cards />
            </Col>
            <Col className="mb-4 mx-5 flex-grow-0 flex-shrink-0 mt-4">
              <Cards />
            </Col>
            <Col className="mb-4 mx-5 flex-grow-0 flex-shrink-0 mt-4">
              <Cards />
            </Col>
            <Col className="mb-4 mx-5 flex-grow-0 flex-shrink-0 mt-4">
              <Cards />
            </Col>
            {/* <Col lg={4} md={6} sm={12} className="mb-4">
              <Cards />
            </Col>
            <Col lg={4} md={6} sm={12} className="mb-4">
              <Cards />
            </Col> */}
          </Row>
        </Container>
      </section>
    </Styles>
  );
};

export default CardSection;
