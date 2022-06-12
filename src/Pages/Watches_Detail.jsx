import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ax from "../config/ax";
import { Link } from "react-router-dom";
import Master from "./Layout/Master";
import Spinner from "../Components/Spinner";

export default function Watches_Detail() {
  const [product, setProduct] = useState({ data: [] });
  const [loader, setLoader] = useState(true);
  const parm = useParams();
  // image path
  const imagepath = "https://testapi-laravel-react.000webhostapp.com/images/";

  useEffect(() => {
    ax.get(`/product/${parm.id}`).then((res) => {
      setProduct(res.data.data);
      setLoader(false);
    });
  }, []);

  return (
    <Master>
      {loader ? (
        <Spinner />
      ) : (
        <div className="uk-container uk-container-large uk-padding-large">
          <Link
            to="/watches"
            uk-close=""
            className="uk-close-large uk-float-right"
          />
          <div className="uk-panel">
            <img
              className="uk-align-center uk-align-left@m uk-margin-remove-adjacent"
              src={imagepath + product.image}
              alt=""
            />
            <h2>{product.name}</h2>
            <h3 className="uk-tile uk-tile-muted uk-padding-remove uk-width-small">
              $ {product.price}
            </h3>
            <p>
              {product.description} Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Temporibus inventore, minus, et minima iste
              voluptate saepe vitae fugit magnam repellendus sint accusantium
              asperiores similique possimus at culpa optio quam ullam earum
              magni quod mollitia esse! Beatae voluptatibus dolorum iure alias
              obcaecati sapiente consequuntur natus voluptatem, cumque eligendi
              ratione et enim dicta reiciendis unde! Quo deserunt
              necessitatibus, perspiciatis omnis natus ipsam inventore porro
              labore modi officia reiciendis ratione molestias sunt hic!
              Asperiores quod sint, eaque, ratione ab odit voluptate nemo fuga
              aut ea iste corrupti quos quis expedita eius inventore repudiandae
              debitis voluptatem commodi minus libero itaque, est dolore
              tenetur? Nam!
            </p>
            <button className="uk-button uk-button-default uk-float-right">
              <span uk-icon="cart" className="uk-margin-small-right"></span>
              Add To Cart
            </button>
          </div>
        </div>
      )}
    </Master>
  );
}
