import { IlabelsProps } from "../../type";

function Subfooter({ data }:  IlabelsProps) {
  return (
    <section className="mission section section-3" data-id="3" id="section-3">
    <div className="mission__container container">
      <div className="mission__body col-10">
        <h2 className="mission__head">
          <span>ПОЧЕМУ ВАМ НУЖЕН ВЕБ-САЙТ?
          </span>
        </h2>
        <div className="mission__row figures">
          <div className="figures__item">
            <div className="figures__shape figures__shape--square">

            </div>
            <div className="figures__shape-content">
              УЛУЧШЕНИЕ ВОВЛЕЧЕНИЯ И ПОДДЕРЖКИ КЛИЕНТОВ
            </div>
          </div>
          <div className="figures__item">
            <div className="figures__shape figures__shape--circle">

            </div>
            <div className="figures__shape-content">
              РАСШИРЕНИЕ АССОРТИМЕНТА ТОВАРОВ И УСЛУГ
            </div>
          </div>
          <div className="figures__item">
            <div className="figures__shape figures__shape--triangle">

            </div>
            <div className="figures__shape-content">
              Создайте профессиональное присутствие в интернете
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Subfooter;