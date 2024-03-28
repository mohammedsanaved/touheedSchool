import React from "react";
import { Styles } from "./styles/cardSection";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../Cards";
import CardFlip from "../CardFlip";

const CardSection = () => {
  return (
    <Styles>
      <section className="cards">
        <Container>
          <div>Our Schools</div>
          <Row className="cardsRow">
            <Col className="mb-4 mx-5 flex-grow-0 flex-shrink-0 mt-4">
              {/* <Cards /> */}
              <CardFlip />
            </Col>
            <Col className="mb-4 mx-5 flex-grow-0 flex-shrink-0 mt-4">
              <CardFlip />
            </Col>
            <Col className="mb-4 mx-5 flex-grow-0 flex-shrink-0 mt-4">
              <CardFlip />
            </Col>
            <Col className="mb-4 mx-5 flex-grow-0 flex-shrink-0 mt-4">
              <CardFlip />
            </Col>
            <Col className="mb-4 mx-5 flex-grow-0 flex-shrink-0 mt-4">
              <CardFlip />
            </Col>
          </Row>
        </Container>
      </section>
    </Styles>
  );
};

export default CardSection;
