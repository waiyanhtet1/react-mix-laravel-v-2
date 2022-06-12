import React, { useEffect, useState } from "react";
import ax from "../config/ax";
import Spinner from "./Spinner";

export default function RandomProduct() {
  const [slideProduct, setSlideProduct] = useState({ data: [] });
  const [loader, setLoader] = useState(true);
  // image path
  const imagepath = "https://testapi-laravel-react.000webhostapp.com/images/";

  useEffect(() => {
    ax.get("randomproduct").then((res) => {
      setSlideProduct(res.data);
      setLoader(false);
    });
  }, []);

  return (
    <>
      {loader ? (
        <Spinner />
      ) : (
        <div
          className="uk-slider-container uk-margin-medium-top"
          uk-slider="autoplay:true; autoplay-interval: 4000; pause-on-hover:false"
        >
          <div
            className="uk-position-relative uk-visible-toggle uk-light"
            tabIndex={-1}
          >
            <ul className="uk-slider-items uk-child-width-1-2@s uk-grid">
              {slideProduct.data.map((d) => (
                <a
                  href=""
                  uk-tooltip="title:Click me to see detail; pos: right"
                  key={d.id}
                >
                  <li>
                    <div className="uk-card uk-card-default">
                      <div className="uk-card-media-top">
                        <img
                          src={imagepath + d.image}
                          width={200}
                          height={200}
                          alt=""
                        />
                      </div>
                      <div className="uk-card-body">
                        <h3 className="uk-card-title">{d.name}</h3>
                        <p>$ {d.price}</p>
                      </div>
                    </div>
                  </li>
                </a>
              ))}
            </ul>
          </div>
          <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin" />
        </div>
      )}
    </>
  );
}
