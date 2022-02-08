import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProductDetails } from "../../store/product/actions";
import { selectProductDetails } from "../../store/product/selectors";
import { Col, Row, Button, Card } from "react-bootstrap";
import { AiOutlineHeart } from "react-icons/ai";
import {
  TiSocialFacebookCircular,
  TiSocialInstagram,
  TiSocialTwitterCircular,
} from "react-icons/ti";

export default function DetailsPage() {
  const dispatch = useDispatch();
  const params = useParams();
  // console.log("params", params);
  const details = useSelector(selectProductDetails);
  // console.log("details", details);

  useEffect(() => {
    dispatch(fetchProductDetails(params.id));
  }, [dispatch, params.id]);

  if (!details) return <h1>Loading</h1>;

  return (
    <Card>
      <Card.Body>
        <Row>
          <Col>
            <Card.Img
              src={details.mainImage}
              alt="product-img"
              style={{ width: 250, height: 250 }}
            />
          </Col>
          <Col>
            <h1>{details.title}</h1>
            <Col>
              {details.rating} <Button> Add Review </Button>
            </Col>
            <p>€{details.price}</p>
            <p>{details.description}</p>
            <Button> Add to Cart </Button>{" "}
            <Button>
              {" "}
              <AiOutlineHeart />
              Favorite
            </Button>
            <p>Categories: {details.category.title}</p>
            <p>
              Share: <TiSocialFacebookCircular /> <TiSocialInstagram />{" "}
              <TiSocialTwitterCircular />{" "}
            </p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
