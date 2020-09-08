import React from "react";
import "./ProductPage.scss";
import IphoneImage from "../../../assets/images/iphone/Iphone 1.png";
import IphoneSmall from "../../../assets/images/iphone/apple-iphonexs-max-gold.png";
import IphoneBackSmall from "../../../assets/images/iphone/apple-iphonexs-max-gold-back-1.png";
import { ReactComponent as IphoneIcon } from "../../../assets/images/icons/Iphone_Icon.svg";
import { ReactComponent as MacIcon } from "../../../assets/images/icons/Mac_Icon.svg";
import { ReactComponent as AppleWatchIcon } from "../../../assets/images/icons/Apple_Watch_Icon.svg";


const ProductPageContent: React.FC = () => {
  return (
    <div className="ProductPage">
      <div className='PageContentWrapper'>
        <div className="ProductInfoBlock">
          <h4 className="ProductType">iPhone</h4>
          <h2 className="ProductTitle">
            The Ultimate <br /> iPhone
          </h2>
          <p className="AdditionalText">
            The future is here. Join the iPhone Upgrade <br /> Program to get the
            latest iPhone - NOW!
          </p>
          <span className="AdditionalInfo">Starts shipping MM-DD-YYYY</span>
        </div>

        <div className='ProductBlock'>
          <img src={IphoneImage}/>
        </div>
        <div className='ProductSwitcherBlock'>
          <a>
            <IphoneIcon />
          </a>
          <a>
            <MacIcon />
          </a>
          <a>
            <AppleWatchIcon />
          </a>
        </div>

      </div>

      <div className="PriceBlock">
        <h5 className="ProductPrice">From $699</h5>
        <a className="RedText">Buy now ></a>
      </div>
      <div className='ProductOptions'>
        <img src={IphoneSmall}/>
        <img src={IphoneBackSmall}/>
        <div className="OptionsSwitcher">
          <div className='LeftIndicator'></div>
          <div className='RightIndicator'></div>
        </div>
      </div>

    </div>
  );
};

export default ProductPageContent;
