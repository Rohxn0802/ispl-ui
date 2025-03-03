import React from "react";
import SqareButton from "../../../common/cta/SqareButton";

function BannerSlideItem({
  tagline,
  bannerImg,
  title,
  buttonName,
  handleButtonClick,
}) {
  return (
    <>
      <div className="sliderItme">
        <div className="sliderItmeImg">
          <img src={bannerImg} alt={title} className="img-fluid" />
        </div>
        <div className="sliderItmeContent">
          <span>{tagline}</span>
          <h4>{title}</h4>
          <SqareButton
            classNameText="sqrBtn"
            btnName={buttonName}
            svgFill="#CAF75A"
            textColor="#CAF75A"
            bordercolor="#CAF75A"
            onClick={handleButtonClick}
          />
        </div>
      </div>
    </>
  );
}

export default BannerSlideItem;
