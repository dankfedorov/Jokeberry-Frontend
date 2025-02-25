import React from "react";
import monitor from "../assets/images/Monitor.png";
function CodingHtml() {
  return (
    <>
      <section id="coding" className="coding">
        <div className="container__coding ">
          <div className="row ">

            <div className="col-md-12 text-center">
              <p className="p-2">
                <img src={monitor} alt="" className="" />
              </p>
            </div>
          </div>

          <h2 className="text-center mb-0">Кодинг & Верстка </h2>
          <p className="text-center mb-4">                           
            дизайн интерфейса сайта / HTML + CSS
          </p>

          <div className="row">
         
            <div className="col-md-12 ">
              <p className="p-2">
                Верстка или кодинг сайта на HTML, CSS и JavaScript — это
                последовательный и креативный процесс, который превращает
                дизайн-макет в интерактивную веб-страницу.
              </p>
              <p className="p-2">
                Cтилизация с помощью CSS. Здесь мы преобразуем обычные текстовые
                и графические элементы в эстетически привлекательные компоненты.
                Мы задаем шрифты, цвета, отступы, размеры, а также используем
                флексбоксы и CSS-сетки для создания адаптивного дизайна, который
                будет корректно отображаться на разных устройствах.
              </p>
     
              <p className="p-2">
                Адаптивность. На завершающем этапе все элементы тестируются на
                различных браузерах и устройствах, чтобы убедиться, что все
                функционирует корректно и соответствует ожиданиям. После
                устранения всех недочетов сайт готов к запуску.
              </p>

              <p className="p-2"></p>
            </div>

    
          </div>

        </div>
      </section>
    </>
  );
}

export default CodingHtml;
