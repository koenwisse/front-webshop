import React from "react";
import { Col, Container, Row, Card, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  return (
    <Card style={{ width: "21rem" }}>
      <Card.Body>
        <ListGroup>
          <Card.Img style={{ width: 300, height: 300 }} src={props.image} />
        </ListGroup>
        <ListGroup>
          <ListGroup.Item>
            <div>ID: </div>
            {props.id}
          </ListGroup.Item>
          <ListGroup.Item>
            <div>Price: </div>
            {props.price}
          </ListGroup.Item>
        </ListGroup>

        {/* style={{
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
        </Row> */}
      </Card.Body>
    </Card>
  );
}
