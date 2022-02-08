import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  return (
    <Card className="mt-5" bg="light">
      <Card.Body
        style={{
          marginTop: "45px",
          textAlign: "center",
        }}
      >
        <Row>
          <Col md={{ span: 3, offset: 0 }}>
            <Link to={`/shop/${props.id}`}>
              <Card.Img
                //   variant="top"
                src={props.image}
                alt="product-img"
                style={{ width: 250, height: 250 }}
              />
            </Link>
          </Col>
          <Col md={9}>
            <h3>{props.title}</h3>
            <p>
              €{props.price} {props.rating}
            </p>
            <p>{props.description}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
