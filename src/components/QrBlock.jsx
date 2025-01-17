import React from 'react'
import qr from "../assets/images/qr.png"

function QrBlock() {
  return (
    <div>
        {/* QR BLOCK */}
                <section id="qrblock" className="qrblock qr__bg">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 text-center">
                        <img src={qr} alt="deploy link" />
                        <h3 className="qrblock__block">QR LINK</h3>
                      </div>
        
                      <div className="col-md-6 text-center "></div>
                    </div>
                  </div>
                </section>
    </div>
  )
}

export default QrBlock