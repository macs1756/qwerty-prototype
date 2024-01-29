import { IheaderProps } from "../../type";


const Header = ({ data }: IheaderProps ) => {

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
                Заказать проект

              </span>
            </button>
            <button className="header-lang">
              <div className="header-lang__selected">
                ru
              </div>
              <div className="header-lang__hidden">
                <ul className="header-lang__list">
                  <li className="header-lang__item">
                    <a href="/en">
                      eng
                    </a>
                  </li>
                  <li className="header-lang__item">
                    <a href="/ka">
                      ka
                    </a>
                  </li>
                </ul>
              </div>
            </button>
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
          <h1 className="header-title def-header ">QWERTY – КОМАНДА, КОТОРАЯ СОЗДАЕТ
            <br className="header-divider" /><span className="header-output"></span>
          </h1>
          <div className="header-arrow">
            <img src="./header/arrow.webp" alt="header-logo" />
          </div>
          <div className="header-info">
            <p>
              Мы предлагаем нестандартный подход к предоставлению веб услуг, брендинга и цифрового маркетинга.

            </p>
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