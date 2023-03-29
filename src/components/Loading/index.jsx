import React from "react";
import { ThreeDots } from "react-loader-spinner";
import "./index.scss";

const Loading = ({ color = "#3d0e6f", width = "80", ...otherProps }) => {
  return (
    <div id="loading" className="align-center" {...otherProps}>
      <ThreeDots
        height="19"
        width={width}
        radius="9"
        color={color}
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
