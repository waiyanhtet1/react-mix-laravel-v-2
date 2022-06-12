import React from "react";

export default function Spinner() {
  return (
    <div className="uk-flex uk-flex-center uk-margin-top">
      <div className="uk-margin" uk-spinner="ratio:2"></div>
    </div>
  );
}
