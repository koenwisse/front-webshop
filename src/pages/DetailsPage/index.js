import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProductDetails } from "../../store/product/actions";
import { selectProductDetails } from "../../store/product/selectors";
import Button from "react-bootstrap/Button";
import TopContainer from "../../components/TopContainer";
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
    </div>
  );
}
