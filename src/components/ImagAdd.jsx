import React, { useRef, useEffect, useState } from "react";
import BtnTest from "../components/BtnTest";

const ContainerCanvas = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = size.width;
    canvas.height = size.height;
  }, [size]);

  return (
    <section id="hero1" class="text-white text-center hero ">
      <div class="container hero__container ">
        <div class="row d-flex  justify-content-between">
          <div class="col-md-9">
            <div
              ref={containerRef}
              style={{
                width: "100%",
                height: "100vh",
                border: "1px solid gray",
              }}
            >
              <canvas ref={canvasRef} style={{ display: "block" }} />
            </div>
          </div>

          <div class="col-md-3">
            <h2 className=" container_h2">SCAN ME NOW</h2>
            <BtnTest />
          </div>
        </div>
      </div>
    </section>
  );
};


export default ContainerCanvas;
