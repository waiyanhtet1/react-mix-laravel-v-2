import React from "react";
import Master from "./Layout/Master";

export default function Home() {
  return (
    <Master>
      <div className=" uk-text-center">
        <div
          className="uk-cover-container uk-transform-origin-bottom-center uk-margin-bottom"
          uk-parallax="scale: 1,.2; start: 100%; end: 40vh"
          uk-height-viewport=""
        >
          <img
            src="images/watch-4.jpg"
            width={1800}
            height={1200}
            alt=""
            uk-cover=""
          />
        </div>
        <div className="uk-container">
          <h1 className="uk-heading-small uk-text-uppercase uk-text-italic uk-text-emphasis">
            "Wearing Bow Tie is a statement. <br />
            Almost an act of defiance." <br /> -- Rick Kaplan --
          </h1>
        </div>
      </div>

      <div className="uk-section uk-section-default ">
        <div className="uk-container">
          <div
            id="js-sticky-parallax-container"
            className="uk-position-relative uk-background-muted uk-text-center uk-height-viewport-3"
          >
            <div
              className="uk-flex uk-flex-center uk-flex-middle uk-height-viewport uk-position-z-index"
              uk-sticky="end: #js-sticky-parallax-container"
            >
              <div>
                <img
                  className="uk-position-relative uk-position-z-index"
                  src="images/watch-3.jpg"
                  width={400}
                  height={800}
                  alt=""
                  style={{ maxWidth: "50vw" }}
                  uk-parallax="target: #js-sticky-parallax-container; y: 0,-250; easing: -1; start: 100vh; end: 100vh;"
                />
                <div style={{ marginTop: "-200px" }}>
                  <h1 className="uk-heading-large">
                    <span
                      className="uk-display-inline-block"
                      uk-parallax="target: #js-sticky-parallax-container; x: 0,-15vw,-7vw,0; easing: -1; start: 60vh; end: 100vh;"
                    >
                      Classic
                    </span>
                    <br />
                    <span
                      className="uk-display-inline-block"
                      uk-parallax="target: #js-sticky-parallax-container; x: 0,10vw,5vw,0; easing: -1; start: 60vh; end: 100vh;"
                    >
                      Aesthetics
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="uk-section uk-section-default uk-text-center uk-position-relative uk-position-z-index">
        <div
          className="uk-cover-container uk-position-z-index-negative"
          uk-sticky="end: true"
          uk-height-viewport=""
        >
          <img
            src="images/watch-2.jpg"
            width={1800}
            height={1200}
            alt=""
            uk-cover=""
          />
        </div>
        <div
          className="uk-light"
          style={{ marginTop: "-100vh", padding: "30vh 0" }}
        >
          <div uk-parallax="start: 100%; end: 100%; opacity: 0,1 10%,1 30%,0; y: 2vh, 0 10%, 0 30%, -10vh">
            <h1 className="uk-heading-small uk-margin-xlarge uk-text-uppercase uk-text-italic uk-text-emphasis">
              "It doesn't just tell time.It tells history." <br /> -- Rolex --
            </h1>
          </div>
          <div uk-parallax="start: 100%; end: 100%; opacity: 0,1 10%,1 30%,0; y: 2vh, 0 10%, 0 30%, -10vh">
            <h1 className="uk-heading-small uk-margin-xlarge uk-text-uppercase uk-text-italic uk-text-emphasis">
              "Time is what we want most, but what we use worst." <br /> --
              Willian Penn --
            </h1>
          </div>
          <div uk-parallax="start: 100%; end: 100%; opacity: 0,1 10%,1 30%,0; y: 2vh, 0 10%, 0 30%, -10vh">
            <h1 className="uk-heading-small uk-margin-xlarge uk-text-uppercase uk-text-italic uk-text-emphasis">
              "The time you enjoy wasting is not wasted time"
            </h1>
          </div>
          <div uk-parallax="start: 100%; end: 100%; opacity: 0,1 10%,1 30%,0; y: 2vh, 0 10%, 0 30%, -10vh">
            <h1 className="uk-heading-small uk-margin-xlarge uk-text-uppercase uk-text-italic uk-text-emphasis">
              "Hard work make dreams work."
            </h1>
          </div>
        </div>
      </div>
    </Master>
  );
}
