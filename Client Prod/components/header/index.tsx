import {  IlabelsProps } from "../../type";
import SwitcherLanguages from "../switcherLanguages";

const Header = ({ data }:  IlabelsProps ) => {

  return (
    <header className="header">
    <div className="header-dynamic header-top">

      <div className="header__wrapper">
        <div className="container">
        <div className="header-row">
          <a href="/" className="header-logo">
            <div className="header-logo__icon">
              <img src="./header/header-logo.svg" alt="header-logo" />
            </div>
            <div className="header-logo__hidden">
              <img src="./header/logo-hidden.svg" alt="hidden-info" />
            </div>
          </a>
          <div className="header-row__col">
            <button className="header-btn button modal-trigger">
              <span className="button-text">
              {data[0]?.attributes.headerButtonText}
              </span>
            </button>

           <SwitcherLanguages />

          </div>
          <button className="header-burger">
            <span className="header-burger__bar"></span>
            <span className="header-burger__bar"></span>
          </button>
        </div>
      </div>
    </div>
    </div>
    <div className="header__container container">
      <div className="header__body">
        <div className="header-content col-10">
          <h1 className="header-title def-header ">{data[0]?.attributes.initial_title}
            <br className="header-divider" /><span className="header-output"></span>
          </h1>
          <div className="header-arrow">
            <img src="./header/arrow.webp" alt="header-logo" />
          </div>
          <div className="header-info">
            <p>{data[0]?.attributes.initial_p}</p>
          </div>
          <button className="header-mob-btn button modal-trigger">
            <span className="button-text">{data[0]?.attributes.headerButtonText}</span>
          </button>
        </div>
      </div>
    </div>
  </header>
  );
}

export default Header;