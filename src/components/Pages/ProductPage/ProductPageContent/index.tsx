import React from "react";
import "./ProductPageContent.scss";
import IphoneOption from "../../../../assets/images/apple-iphonexs-max-gold-1.png";
import IphoneImage from "../../../../assets/images/Iphone 1.png";
import { ReactComponent as IphoneIcon } from "../../../../assets/images/icons/Iphone_Icon.svg";
import { ReactComponent as MacIcon } from "../../../../assets/images/icons/Mac_Icon.svg";
import { ReactComponent as AppleWatchIcon } from "../../../../assets/images/icons/Apple_Watch_Icon.svg";


const ProductPageContent: React.FC = () => {
  return (
    <div className="ProductPageContent">
      <div className='wrapper'>
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
        <img src={IphoneOption}/>
        <img src={IphoneOption}/>
        <div className="lines">
          <div className='RedLine'></div>
          <div className='WhiteLine'></div>
        </div>
      </div>

    </div>
  );
};

export default ProductPageContent;
