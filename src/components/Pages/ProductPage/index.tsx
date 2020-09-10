import React, { useState } from "react";
import "./ProductPage.scss";
import IphoneImage from "../../../assets/images/iphone/Iphone 1.png";
import IphoneSmall from "../../../assets/images/iphone/apple-iphonexs-max-gold.png";
import IphoneBackSmall from "../../../assets/images/iphone/apple-iphonexs-max-gold-back-1.png";
import ProductIcons from "../../common/ProductIcons";

const ProductPageContent: React.FC = () => {
  const [currentPosition, setCurrentPosition] = useState<number>(0);
  const switchClick = () =>
    currentPosition > 50 ? setCurrentPosition(0) : setCurrentPosition(100);
  return (
    <div className="ProductPage">
      <div className="PageContentWrapper">
        <div className="ProductInfoBlock">
          <h4 className="ProductType">iPhone</h4>
          <h2 className="ProductTitle">
            The Ultimate <br /> iPhone
          </h2>
          <p className="AdditionalText">
            The future is here. Join the iPhone Upgrade <br /> Program to get
            the latest iPhone - NOW!
          </p>
          <span className="ShippingInfo">Starts shipping 2020/02/21</span>
        </div>

        <div className="ProductBlock">
          <img
            src={IphoneImage}
            onClick={switchClick}
            alt="iphone"
            className={currentPosition < 100 ? "hidden" : ""}
          />
          <img
            src={IphoneImage}
            onClick={switchClick}
            alt="iphone back"
            className={currentPosition === 100 ? "hidden" : ""}
          />
        </div>
        <div className="ProductIconsWrapper">
          <ProductIcons />
        </div>
      </div>
      <div className="PriceBlock">
        <h5 className="ProductPrice">From $699</h5>
        <a className="PurchaseInfoLink" href="/">
          {"Buy now >"}
        </a>
      </div>
      <div className="ProductOptions">
        <img
          src={IphoneSmall}
          className="ProductOptionImage"
          style={{ opacity: currentPosition < 100 ? 1 : 0.5 }}
          onClick={switchClick}
          alt="iphone small"
        />
        <img
          src={IphoneBackSmall}
          className="ProductOptionImage"
          style={{ opacity: currentPosition === 100 ? 1 : 0.5 }}
          onClick={switchClick}
          alt="phone back small"
        />
        <div className="OptionsSwitcher">
          <div className="IndicatorBase" onClick={switchClick} />
          <div
            className="Indicator"
            style={{ left: Math.round(currentPosition / 2) + "%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPageContent;
