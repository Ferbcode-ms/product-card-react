import { useState } from "react";
import React from "react";
import "./App.css";

function App() {
  const [currentMedia, setCurrentMedia] = useState(0);
  const productMedia = [
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/486ea109-eb52-4560-9092-b3ca20e2b6c4/air-jordan-1-low-shoes-459b4T.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b95033d3-2b18-4e8e-b386-56e4209b3352/air-jordan-1-low-shoes-6Q1tFM.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/525eacce-5bfe-48b5-b6de-4ce71c6ba657/air-jordan-1-low-shoes-6Q1tFM.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/dc0f39dc-ed2c-4145-bd93-b216e40bb53d/air-jordan-1-low-shoes-6Q1tFM.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a1fe08cd-1fc4-441e-8a3f-76aebe6fe52b/air-jordan-1-low-shoes-6Q1tFM.png",
  ];

  const handleMediaChange = (index) => {
    setCurrentMedia(index);
  };

  return (
    <div className="product">
      <div className="images">
        <div className="preview">
          <img src={productMedia[currentMedia]} />
        </div>

        <div className="hover-images">
          {productMedia.map((image, index) => (
            <img
              key={index}
              src={image}
              onMouseEnter={() => handleMediaChange(index)}
              onMouseLeave={() => handleMediaChange(0)}
            />
          ))}
        </div>
      </div>

      <div className="detail">
        <span>Bestseller</span>
        <h4 className="product-name">Air Jordan 1 Low</h4>
        <p className="category">Men's shoes</p>
        <p className="category">5 color</p>
        <p className="price">$119</p>
      </div>
    </div>
  );
}

export default App;
