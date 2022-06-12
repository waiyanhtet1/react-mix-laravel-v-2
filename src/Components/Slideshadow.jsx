import React from "react";

export default function Slideshadow() {
  return (
    <div uk-slideshow="ratio: 7:3; animation: fade; autoplay:true; autoplay-interval: 5000; pause-on-hover:false">
      <div
        className="uk-position-relative uk-visible-toggle uk-light"
        tabIndex={-1}
      >
        <ul className="uk-slideshow-items">
          <li>
            <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
              <img src="/images/watch-5.jpg" alt="" uk-cover="" width={300} />
            </div>
          </li>
          <li>
            <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
              <img src="/images/watch-6.jpg" alt="" uk-cover="" width={300} />
            </div>
          </li>
          <li>
            <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
              <img src="/images/watch-7.jpg" alt="" uk-cover="" width={300} />
            </div>
          </li>
        </ul>
        <a
          className="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-previous=""
          uk-slideshow-item="previous"
        />
        <a
          className="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-next=""
          uk-slideshow-item="next"
        />
      </div>
    </div>
  );
}
