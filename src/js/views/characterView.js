import React, { useContext, useState, useEffect } from "react"
import { useParams } from "react-router"
import { Context } from "../store/appContext"

export const CharacterView = () => {
    const { store, actions } = useContext(Context)
    const params = useParams()
    const [character, setCharacter] = useState(null)
    // useEffect(() => {
    //     let person = store.people.find((item, index) => item.uid == params.theid)
    //     fetch(person.url)
    //         .then(resp => resp.json())
    //         .then(data => setCharacter(data.result))
    //         .catch(error => console.log(error))

    // }, []);

    let person = store.people.find((item, index) => item.uid == params.theid)

    return (

        <div >


            <div className="row" >
                <div className="col">
                    <img src="https://home.iiserb.ac.in/~ankurg/img/gallery/800x600.png" />
                </div>

                <div className="col">

                    <h2>
                        {person?.properties.name}

                    </h2>

                    <p>

                        {person?.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare tellus ante, et rhoncus lectus rutrum malesuada. Vivamus malesuada urna a viverra congue. Etiam fringilla sapien at erat varius accumsan. Quisque tempor felis metus, vel sagittis elit bibendum ut. In bibendum porta ipsum, facilisis molestie ligula elementum in. Curabitur vel ornare libero, sed molestie arcu. Nullam dignissim dictum congue.

                    </p>

                </div>


            </div>

            <div className="row mt-5 justify-content-center" >
                <div className="col-3">
                    <h4>
                        Date of birth

                    </h4>

                    <p>
                        {person.properties.birth_year}

                    </p>
                </div>

                <div className="col-3">
                    <h4>
                        Gender

                    </h4>

                    <p>
                        {person.properties.gender}

                    </p>
                </div>

                <div className="col-3">
                    <h4>
                        Height

                    </h4>

                    <p>
                        {person.properties.height}

                    </p>
                </div>

            </div>


        </div>



    )

}