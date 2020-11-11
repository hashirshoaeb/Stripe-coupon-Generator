import React from "react";
import Tile from "./Tile";

const List = ({coupons, handleDelete}) =>{
    return(
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="col">
            {coupons.map((value, index)=>{
              return (
              <Tile key={index} data={value} handleDelete={(e)=> handleDelete(e, value.id)}></Tile>
              );
            })}
          </div>
        </div>
     </div>
    );
}

export default List;