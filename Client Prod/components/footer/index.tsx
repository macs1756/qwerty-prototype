import { IlabelsProps } from "../../type";

function Footer({ data }:  IlabelsProps) {
  return (
    <footer className="contact section section-4" data-id="4" id="section-4">
    <div className="contact__container container">
      <div className="contact-grid contact-grid--start col-10">
        <h3 className="contact-title def-header">
          {data[0]?.attributes?.footer_title}
        </h3>
        <div className="contact-arrow">
          <img src="./header/arrow.webp" alt="arrow-icon" />
        </div>
        <ul className="contact-links">
          <li className="contact-links__item">
            <a href="tel:+995591051591" className="contact-links__ref">+995 591 051 591</a>
          </li>
          <li className="contact-links__item">
            <a href="mailto:hello@qwerty.agency" className="contact-links__ref">hello@qwerty.agency</a>
          </li>
        </ul>
        <ul className="contact-nav">
          <li className="contact-nav__item">
            <a target="_blank" href="https://t.me/qwerty_agency" className="contact-nav__link">Telegram
            </a>
          </li>
          <li className="contact-nav__item">
            <a target="_blank" href="https://www.behance.net/qwerty_agency" className="contact-nav__link">behance
            </a>
          </li>
          <li className="contact-nav__item">
            <a target="_blank" href="https://www.facebook.com/qwerty.co.llc" className="contact-nav__link">facebook
            </a>
          </li>
          <li className="contact-nav__item">
            <a target="_blank" href="https://www.instagram.com/qwerty.agency/" className="contact-nav__link">instagram
            </a>
          </li>
        </ul>
        <div className="button-container">
          <button className="contact-button button modal-trigger">
            <span className="button-text">
              {data[0]?.attributes?.headerButtonText}
            </span>
          </button>
        </div>
      </div>
      <div className="contact-logo">
        <a href="/" className="contact-logo__icon-container">
          <div className="contact-logo__icon header-logo__icon">
            <img src="./header/header-logo.svg" alt="header-logo" />
          </div>
          <div className="header-logo__hidden contact-logo__hidden">
            <img src="./header/logo-hidden.svg" alt="hidden-info" />
          </div>
        </a>
        <div className="contact-logo__info">
          <div className="contact-logo__info-text">
            © 2023 Qwerty.Agency
          </div>
          <div className="contact-logo__info-text">
            {data[0]?.attributes.footer_terms_of_use}
          </div>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;