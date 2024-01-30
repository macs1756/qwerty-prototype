import { IlabelsProps } from "../../type";

function Navbar({ data }:  IlabelsProps) {
  return (
    <div className="navbar">
      <div className="navbar__container container">
        <ul className="navbar-list">
          <li className="navbar-list__item" data-id="1">
            <a href="#section-1" className="navbar-list__link">{data[0]?.attributes?.navbar_link_1}</a>
          </li>
          <li className="navbar-list__item" data-id="2">
            <a href="#section-2" className="navbar-list__link">{data[0]?.attributes?.navbar_link_2}</a>
          </li>
          <li className="navbar-list__item" data-id="3">
            <a href="#section-3" className="navbar-list__link">{data[0]?.attributes?.navbar_link_3}
            </a>
          </li>
          <li className="navbar-list__item" data-id="4">
            <a href="#section-4" className="navbar-list__link">{data[0]?.attributes?.navbar_link_4}</a>
          </li>
        </ul>
        <div className="navbar-options">
          <button className="header-lang">
            <div className="header-lang__selected">
              ru
            </div>
            <div className="header-lang__hidden">
              <ul className="header-lang__list">
                <li className="header-lang__item">
                  <a href="index.html">
                    ka
                  </a>
                </li>
                <li className="header-lang__item">
                  <a href="index.html">
                    eng
                  </a>
                </li>
              </ul>
            </div>
          </button>
          <button className="navbar-button header-mob-btn button modal-trigger">
            <span className="button-text">Заказать проект
            </span>
          </button>
        </div>
      </div>
    </div>);
}

export default Navbar;