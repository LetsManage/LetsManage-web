import React from "react";
import { Link } from "react-router-dom";

const MenuCard = ({ menuData }) => {
    console.log(menuData);

  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, image, description,button } = curElem;

          return (
            <>
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    {/* <span className="card-author subtle"> {category}</span> */}
                    <h2 className="card-title"> {name} </h2>
                    <hr/>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    
                    {/* <div className="card-read">Read</div> */}
                  </div>
                  <img src={image} alt="images" className="card-media" />

                  <span className="card-tag  subtle">Read More</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
