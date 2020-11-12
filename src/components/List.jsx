import React from "react";
import { Accordion } from "react-bootstrap";
import Tile from "./Tile";

const List = ({ coupons, handleDelete }) => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <div className="col">
          <Accordion>
            {coupons.map((value, index) => {
              return (
                <Tile
                  key={index}
                  data={value}
                  handleDelete={(e) => handleDelete(e, value.id)}
                ></Tile>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default List;
