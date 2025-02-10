import React from 'react'

function MongodbInfo() {
  return (
    <div>
       <section id="mongodbinfo" className="mongodbinfo">
      <div className=" container__mongodbinfo">
        <h2 className="text-center mb-0">Взаимодействие с базой данных MongoDB</h2>
        <p className="text-center mb-4">backend часть  </p>

        <div className="row ">
          <div className="col-md-12">
          <p className="p-2"><b>Почему я выбрал Node.js ?</b></p>
          <p className="p-2">MongoDB — это документоориентированная NoSQL-база данных, предназначенная для хранения и обработки больших объемов данных в формате JSON-подобных документов (BSON). Она отличается гибкостью и масштабируемостью, что делает её популярной для современных приложений.</p>
          <p className="p-2">Простота использования: Интуитивный API и поддержка языков программирования, таких как JavaScript, Python, Java и других.</p>
            <p className="p-2 ">
            <a href='https://www.mongodb.com/' className='green' target='_blank'>MongoDB</a> идеально подходит для современных приложений, таких как аналитические платформы, мобильные приложения, системы реального времени и проекты с быстро меняющимися требованиями к данным.
            </p>
          </div>

          

        </div>
      </div>
    </section>
    </div>
  )
}

export default MongodbInfo
