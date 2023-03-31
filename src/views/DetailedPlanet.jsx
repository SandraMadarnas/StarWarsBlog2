import React from "react";
import { useParams } from "react-router-dom";
import useStore from "../store/Store";
import "../styles/views/detaileds.css"
import Button from "react-bootstrap/esm/Button";
import ProgressBar from "react-bootstrap/esm/ProgressBar";

const DetailedPlanet = () =>{
    
    const { planet } = useParams()
    const imgSrc = `https://starwars-visualguide.com/assets/img/planets/${planet}.jpg `

    const {store} = useStore();
    const {planetsDetailedList} = store;

    const [planetData] = planetsDetailedList ? planetsDetailedList.filter(item => item.result.uid === planet) : null;


    return(
    <>   
        <div className="detailsContainer">
            <img src={imgSrc} alt={`planet ${planetData?.result.properties.name}`} />
            <div className="d-flex flex-column">
                <h1>{planetData?.result.properties.name}</h1>
                <h3>{planetData?.result.description}</h3>
                
                <div className="specificDetContainer">
                    <div >
                        <b> Diameter  </b>
                        <div> {planetData?.result.properties.diameter} </div>
                    </div> 
                    <div >
                        <b> Rotation period  </b>
                        <div> {planetData?.result.properties.rotation_period} </div>
                    </div> 
                    <div >
                        <b> Orbital period  </b>
                        <div> {planetData?.result.properties.orbital_period} </div>
                    </div> 
                    <div >
                        <b> Population  </b>
                        <div> {planetData?.result.properties.population} </div>
                    </div> 
                    <div >
                        <b> Climate  </b>
                        <div> {planetData?.result.properties.climate} </div>
                    </div> 
                    <div >
                        <b> Terrain  </b>
                        <div> {planetData?.result.properties.terrain} </div>
                    </div> 
                    <div >
                        <b> Water on surface  </b>
                        <div> {planetData?.result.properties.surface_water == 1 ? <Button variant="success">✓</Button> : <Button variant="danger">𐄂</Button> } </div>
                    </div> 
                </div>

                <div className="graphicsContainer">
                        <div >

                        <span>Diameter</span>
                            <ProgressBar striped variant="success" now={
                                (planetData?.result.properties.diameter/118000)*100
                            } label={`${planetData?.result.properties.diameter}`} />
                        </div>
                        <div >
                            <span>Population</span>
                            <ProgressBar striped variant="danger" now={
                                    (planetData?.result.properties.population/1000000000)*100
                                } label={`${planetData?.result.properties.population}`} />
                        </div>
                    </div>




             </div>
         </div>
    </>        )

}


export default DetailedPlanet