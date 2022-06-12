import React, { useContext, useEffect, useState } from "react";
import RandomProduct from "../Components/RandomProduct";
import Slideshadow from "../Components/Slideshadow";
import Spinner from "../Components/Spinner";
import ax from "../config/ax";
import Master from "./Layout/Master";
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

export default function Watches() {
  const [pageloader, setPageLoader] = useState(true);
  const [productLoader, setProductLoader] = useState(true);
  const [loadmoreLoader, setloadmoreLoader] = useState(false);
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState({ data: [] });
  const [filterBand, setFilterBand] = useState({ data: [] });
  const [selected, setSelected] = useState(null);
  const [api, setApi] = useState("/product");
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState("");

  // context
  const { setAuthUser } = useContext(AuthContext);

  // public image
  const imagepath = "https://testapi-laravel-react.000webhostapp.com/images/";

  useEffect(() => {
    ax.get(api).then((res) => {
      const { data } = res.data.data;
      setProduct(data);
      setNextPage(res.data.data.next_page_url);
      setPageLoader(false);
      setProductLoader(false);
    });

    ax.get("category").then((res) => {
      setCategory(res.data);
      setPageLoader(false);
    });

    ax.get("watchband").then((res) => {
      setFilterBand(res.data);
      setPageLoader(false);
    });

    const str = localStorage.getItem("authUser");
    const parseObj = JSON.parse(str);
    setAuthUser(parseObj);
  }, [api]);

  const setCategoryValue = (id) => {
    setSelected(id);
    setCurrentPage(1);
    setProductLoader(true);
    setApi(`/product?category_id=${id}`);
  };

  const viewAllProduct = () => {
    setSelected(null);
    setCurrentPage(1);
    setProductLoader(true);
    setApi("/product");
  };

  const loadMore = () => {
    setloadmoreLoader(true);
    setCurrentPage(currentPage + 1);
    const page = currentPage + 1;
    var url = "";
    if (selected !== null) {
      url += `/product?category_id=${selected}&page=${page}`;
    } else {
      url += `/product?page=${page}`;
    }

    ax.get(url).then((res) => {
      const { data } = res.data.data;
      setProduct([...product, ...data]);
      setloadmoreLoader(false);
      setNextPage(res.data.data.next_page_url);
    });
  };

  return (
    <Master>
      {pageloader ? (
        <Spinner />
      ) : (
        <div className="uk-container uk-container-large uk-padding-small">
          <div
            className="uk-text-center uk-grid-divider uk-child-width-expand@s"
            uk-grid=""
          >
            <div className="uk-width-expand@m">
              <div className="uk-card uk-card-muted">
                <Slideshadow />
                <RandomProduct />

                {/* product */}
                {productLoader ? (
                  <Spinner />
                ) : (
                  <div
                    className="uk-child-width-1-3@m uk-child-width-1-2"
                    uk-grid=""
                    uk-scrollspy="cls: uk-animation-top; target: .uk-card; delay: 300; repeat: true"
                  >
                    {product.map((d) => (
                      <div key={d.id}>
                        <Link
                          to={`/watches/${d.id}`}
                          className="uk-card uk-card-muted uk-card-body uk-card-hover uk-link-toggle"
                        >
                          <img src={imagepath + d.image} alt="" uk-contain="" />
                          <span hidden className="uk-link-heading">
                            Heading
                          </span>
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
                {/* end product */}

                {/* load more */}
                {nextPage !== null &&
                  (loadmoreLoader ? (
                    <Spinner />
                  ) : (
                    <button
                      onClick={() => loadMore()}
                      className="uk-button uk-button-secondary uk-margin"
                    >
                      <span uk-icon="icon: chevron-down"></span>
                    </button>
                  ))}
                {/* end loadmore */}
              </div>
            </div>

            <div className="uk-width-1-3@m">
              <div uk-sticky="position:bottom" className="uk-position-z-index">
                {/* category */}
                <div className="uk-card uk-card-muted">
                  <p className="uk-heading-line uk-text-right uk-text-bold uk-text-emphasis uk-text-italic">
                    <span>Search By</span>
                  </p>
                  <div className="uk-column-1-2" uk-margin="">
                    <button
                      className={`uk-button ${
                        selected === null
                          ? "uk-button-secondary"
                          : "uk-button-default"
                      } uk-button-small uk-width-1-1 uk-margin-small-bottom`}
                      onClick={() => viewAllProduct()}
                    >
                      View All
                    </button>
                    {category.data.map((d) => (
                      <button
                        onClick={() => setCategoryValue(d.id)}
                        className={`uk-button ${
                          selected === d.id
                            ? "uk-button-secondary"
                            : "uk-button-default"
                        } uk-button-small uk-width-1-1 uk-margin-small-bottom`}
                        key={d.id}
                      >
                        {d.name}
                      </button>
                    ))}
                  </div>
                  <p className="uk-heading-line uk-text-left uk-text-bold uk-text-emphasis uk-text-italic">
                    <span>Filter By Pointer</span>
                  </p>
                  <div className="uk-inline uk-light">
                    <img src="images/watch-4.jpg" alt="" />
                    <button
                      onClick={() => viewAllProduct()}
                      className="uk-position-absolute uk-transform-center"
                      uk-tooltip="All Watches"
                      style={{ left: "45%", top: "45%" }}
                      href="#"
                      uk-marker=""
                    />
                    {filterBand.data.map((d) => (
                      <button
                        key={d.id}
                        onClick={() => setCategoryValue(d.id)}
                        className="uk-position-absolute uk-transform-center"
                        style={{ left: "80%", top: "60%" }}
                        href="#"
                        uk-marker=""
                        uk-tooltip={d.name}
                      />
                    ))}
                  </div>

                  <div className="uk-padding-small"></div>
                </div>
                {/* end category */}
              </div>
            </div>
          </div>
        </div>
      )}
    </Master>
  );
}
