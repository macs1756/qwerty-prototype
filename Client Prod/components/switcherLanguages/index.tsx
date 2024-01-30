import { useRouter } from "next/router";

function switcherLanguages() {

  const { pathname } = useRouter()

  const renderLinks = () => {

    if (pathname === '/ru') {
      return (
        <>
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
        </>
      );
    }

    if (pathname === '/ka') {
      return (
        <>
          <li className="header-lang__item">
            <a href="/en">
              en
            </a>
          </li>
          <li className="header-lang__item">
            <a href="/ru">
              ru
            </a>
          </li>
        </>
      );
    }

    if (pathname === '/en') {
      return (
        <>
          <li className="header-lang__item">
            <a href="/ka">
              ka
            </a>
          </li>
          <li className="header-lang__item">
            <a href="/ru">
              ru
            </a>
          </li>
        </>
      );
    }

    return null;
  };
  

  return (
    <button className="header-lang">
      <div className="header-lang__selected">
        {pathname.replace(/\//g, '')}
      </div>
      <div className="header-lang__hidden">
        <ul className="header-lang__list">
          {renderLinks()}
        </ul>
      </div>
    </button>
  );
}

export default switcherLanguages;