import React from 'react'

function NodeInfo() {
  return (
    <div>
    <section id="reactinfo" className="reactinfo">
      <div className=" container__reactinfo">
        <h2 className="text-center mb-0">Создание серверной части Node.js</h2>
        <p className="text-center mb-4">backend часть  </p>

        <div className="row ">
          <div className="col-md-12">
          <p className="p-2"><b>Почему я выбрал Node.js ?</b></p>
          <p className="p-2">Высокая производительность: Благодаря быстрой обработке запросов, Node.js эффективно справляется с большим количеством одновременных подключений.</p>
          <p className="p-2">Большое сообщество, множество библиотек  npm (Node Package Manager) и инструментов.JavaScript используется как на клиенте, так и на сервере.</p>
            <p className="p-2">
            Node.js — это мощный инструмент для современных веб-приложений, сочетающий скорость, гибкость и простоту разработки.
            </p>
          </div>

          <div className="col-md-12">
            <p className="p-2"><b>Масштабируемость</b></p>
            <p className="p-2">Идеально подходит для создания реального времени приложений, таких как чаты, стриминговые сервисы и API.</p>
            <p className="p-2">
            Работает на различных операционных системах, включая Windows, macOS и Linux.
            </p>
          </div>

        </div>
      </div>
    </section>
  </div>
  )
}

export default NodeInfo

