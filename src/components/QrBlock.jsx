import React from "react";
import qr from "../assets/images/qr.png";

function QrBlock() {
  return (
    <div>
      {/* QR BLOCK */}
      <section id="qrblock" className="qrblock qr__bg">
        <div className="container">
          <div className="row p-2">
            <div className="col-md-6 text-center mb-4">
              <img src={qr} alt="deploy link" />
            </div>

            <div className="col-md-6 ">
              <h2 className="qrblock__block mb-4">QR Переход </h2>
              <p className=" mb-4 qrblock__block__description">
                Использование QR-кодов позволяет упростить доступ к информации,
                заменяя длинные URL-адреса удобным изображением.{" "}
              </p>
            
              <p className=" mb-4 qrblock__block__description">
                Это отличный способ увеличить трафик на сайте, особенно на
                мероприятиях, в маркетинговых материалах или на упаковке
                продуктов.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center p-1 ">
          <a href="/Video" className="btn-reset">
            <button className="btn-reset btn">
              <i class="bi bi-play-fill p-1"></i>Live Preview
            </button>
          </a>
        </div>

      </section>
    </div>
  );
}

export default QrBlock;
