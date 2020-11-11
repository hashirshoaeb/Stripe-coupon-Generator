import React from "react";
import Tile from "./Tile";

const List = ({coupons}) =>{
    return(
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="col">
            {coupons.map((value, index)=>{
              return (
              <Tile data={value}></Tile>
              );
            })}
          </div>
        </div>
     </div>
    );
}

export default List;