import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Character } from "../component/character";
import { Context } from "../store/appContext";
import { Planets } from "../component/planets";
import { Starships } from "../component/starships";


export const Home = () => {
  const { store, actions } = useContext(Context)
  console.log(store.people)
  return (
    <div>
      <h1>Welcome Padawan! </h1>
      <h3>There is no ignorance, there is knowledge. There is no passion, there is serenity. There is no chaos, there is harmony. There is no death, there is the Force.</h3>
      <p>"THE GREATEST TEACHER FAILURE IS." - Yoda</p>

      <div>
        <h3>
          CHARACTERS
        </h3>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(19rem, 1fr))' }}>

        {store.people?.map((person, index) =>

          <Character key={index} person={person} />

        )}
      </div>


      <div>
        <h3>
          PLANETS
        </h3>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(19rem, 1fr))' }}>

        {store?.planets?.map((planet, index) =>

          <Planets key={index} planet={planet} />

        )}
      </div>

      <div>
        <h3>
          STARSHIPS
        </h3>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(19rem, 1fr))' }}>

        {store?.starships?.map((starship, index) =>

          <Starships key={index} starship={starship} />

        )}
      </div>






    </div>





  )
};