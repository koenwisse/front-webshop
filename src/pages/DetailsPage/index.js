import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProductDetails } from "../../store/product/actions";
import { selectProductDetails } from "../../store/product/selectors";
import Button from "react-bootstrap/Button";
import TopContainer from "../../components/TopContainer";
import FooterContainer from "../../components/FooterContainer";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import {
  TiSocialFacebookCircular,
  TiSocialInstagram,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import "./styles.css";

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
  const button = {
    borderColor: "#1d3178",
    backgroundColor: "white",
    color: "#1d3178",
    marginLeft: "35px",
  };
  const header = {
    marginRight: "75px",
  };

  return (
    <div className="detailsPageContainer">
      <TopContainer />
      <div className="productContainer">
        <div>
          <img
            src={details.mainImage}
            alt="product-img"
            style={{ width: 250 }}
          />
        </div>
        <div>
          <h3>{details.title}</h3>
          <p>
            {details.rating} ⭐ ⭐ ⭐ (22){" "}
            <Button style={button}> Add Review </Button>
          </p>
          <p>€{details.price}</p>
          <p>{details.description}</p>
          <Button
            style={{ backgroundColor: "#FF3EB2", borderColor: "#FF3EB2" }}
          >
            {" "}
            <AiOutlineShoppingCart />
            Add to Cart{" "}
          </Button>{" "}
          <Button style={button}>
            {" "}
            <AiOutlineHeart />
            Favorite
          </Button>
          <p>Categories: {details.category.title}</p>
          <p>
            Share: <TiSocialFacebookCircular /> <TiSocialInstagram />{" "}
            <TiSocialTwitterCircular />{" "}
          </p>
        </div>
      </div>
      <div className="infoContainer">
        <div className="description">
          <h5 style={header}>Description</h5>
          <h5 style={header}>Additional info</h5>
          <h5 style={header}>Reviews</h5>
        </div>
        <div>
          <h6>Lorem Ipsum</h6>
          <p>
            For instance, =lorem(2,5) will create 2 paragraphs of Lorem Ipsum
            text and it will span across 5 lines (or sentences). The parameters
            are optional. If you omit the parameters the default number of
            paragraphs is three, and the default number of lines per paragraph
            is also three.
          </p>
        </div>
        <div>
          <h6>More info</h6>
          <p>
            For instance, =lorem(2,5) will create 2 paragraphs of Lorem Ipsum
            text and it will span across 5 lines (or sentences). The parameters
            are optional. If you omit the parameters the default number of
            paragraphs is three, and the default number of lines per paragraph
            is also three.
          </p>
        </div>
      </div>
      <FooterContainer />
    </div>
  );
}
