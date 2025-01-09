import React from "react";
import { useState } from "react";

function TestBtn() {
  const [value, valueChange] = useState(0);
  if(value > 18){
    alert("Больше 18")
  }
  return (
    <div>
       <button className="tg-link" onClick={() => valueChange(value - 1)}>
        min
      </button>
      {value}
      <button className="tg-link" onClick={() => valueChange(value + 1)}>
        max
      </button>
    </div>
  );
}

export default TestBtn;
