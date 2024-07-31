import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



export const Starships = ({ starship }) => {
  const { store, actions } = useContext(Context)
  const [starshipDetails, setstarshipDetails] = useState(null)
  useEffect(() => {
    fetch(starship.url)
      .then(resp => resp.json())
      .then(data => setstarshipDetails(data.result))
      .catch(error => console.log(error))
  }, [])
  return (


    <div >

      <div class="card" style={{ width: "19rem" }}>
        <img src="https://thorntons-investments.co.uk/wp-content/uploads/2017/08/400x200.png" class="card-img-top" alt="..." >
        </img>
        <div class="card-body">
          <h5 class="card-title">{starship.name}</h5>
          <p class="card-text"> Model:{starshipDetails?.properties.model}
          </p>
          <a href="#" class="btn btn-primary">Learn More!</a>

        </div>


      </div>
    </div>



  )
};