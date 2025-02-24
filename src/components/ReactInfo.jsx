import React from "react";

function ReactInfo() {
  return (
    <div>
      <section id="reactinfo" className="reactinfo">
        <div className=" container__reactinfo">
          <h2 className="text-center mb-0">Интеграция проекта с React</h2>
          <p className="text-center mb-4">интегрируется с множеством инструментов и библиотек </p>

          <div className="row ">
            <div className="col-md-12">
            <p className="p-2">
                React — это популярная JavaScript-библиотека с открытым исходным
                кодом, разработанная компанией Facebook. Она используется для
                создания пользовательских интерфейсов (UI), особенно для
                одностраничных приложений (SPA — Single Page Applications).
                React позволяет разработчикам создавать интерактивные, быстрые и
                масштабируемые веб-приложения.{" "}
              </p>
            <p className="p-2"><b>Почему я выбрал React?</b></p>
            <p className="p-2">Так как существует огромное количество готовых решений, библиотек и обучающих материалов.</p>
              
            </div>

            <div className="col-md-12">
              <p className="p-2"><b>Для чего используется React и React Native?</b></p>
              <p className="p-2">С помощью React Native можно создавать кроссплатформенные мобильные приложения.</p>
              <p className="p-2">
                React идеально подходит для создания современных веб-приложений,
                таких как Facebook, <b>ЗапреЩен</b>gram, Netflix, Airbnb и многих других.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReactInfo;
