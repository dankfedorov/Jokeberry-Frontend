import React from 'react'
import qr from "../assets/images/qr.png"

function QrBlock() {
  return (
    <div>
        {/* QR BLOCK */}
                <section id="qrblock" className="qrblock qr__bg p-2">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 text-center mb-4">
                        <img src={qr} alt="deploy link" />
                        
                      </div>
        
                      <div className="col-md-6 ">
                        <h2 className='qrblock__block mb-4'>QR Переход </h2>
                        <p className=' mb-4'>QR-код — это квадратный штрихкод, который можно сканировать
                           с помощью смартфона или другого устройства для быстрого перехода на веб-сайт.
                            Использование QR-кодов позволяет упростить доступ к информации, заменяя длинные
                             URL-адреса удобным изображением. </p>
                             <p className=' mb-4'>Для перехода пользователю достаточно навести камеру
                              на QR-код или использовать специализированное приложение. Это отличный способ увеличить 
                              трафик на сайте, особенно на мероприятиях, в маркетинговых материалах или на упаковке продуктов.</p>
                             <p className=' mb-4'>Это отличный способ увеличить 
                              трафик на сайте, особенно на мероприятиях, в маркетинговых материалах или на упаковке продуктов.</p>
                      </div>
                    </div>
                  </div>
                </section>
    </div>
  )
}

export default QrBlock