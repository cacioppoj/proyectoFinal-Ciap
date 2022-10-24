import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/card.jsx";
import Favorites2 from "../component/favoritos2.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <h1>Hoteles</h1>
      <div className="d-flex flex-row flex-nowrap overflow-auto card">
        {store.hoteles.map((hotel, index) => {
          return (
            <div key={hotel.group}>
              <Card detail={hotel} type="hoteles" id={index} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
