import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import Datas from "../data/about-us/about-us.json";
function Cards() {
  return (
    <Card style={{ width: "24rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)" }}>
      <Card.Img
        variant="top"
        src={process.env.PUBLIC_URL + `/assets/images/${Datas.mainImage}`}
      />
      <Card.Body>
        <Card.Title className="font-weight-bold fs-3">Card Title</Card.Title>
        <Card.Text className="fs-5">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="d-flex justify-content-start gap-2 mt-3">
          <Button variant="primary" size="sm">
            Read More
          </Button>
          <Button variant="success" size="sm">
            Contacts Us
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Cards;
