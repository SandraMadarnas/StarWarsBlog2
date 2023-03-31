import React from "react";
import { useParams } from "react-router-dom";
import useStore from "../store/Store";
import ProgressBar from 'react-bootstrap/ProgressBar';

const DetailedVehicle = () => {
    const { vehicle } = useParams()
    const imgSrc = `https://starwars-visualguide.com/assets/img/vehicles/${vehicle}.jpg `

    const {store} = useStore();
    const {vehiclesDetailedList} = store;

    const [vehicleData] = vehiclesDetailedList ? vehiclesDetailedList.filter(item => item.result.uid === vehicle) : null;

    return(
    <>
        <div className="detailsContainer">
            <img src={imgSrc} alt={`character ${vehicleData?.result.properties.name}`} />
            <div className="d-flex flex-column">
                <h1>{vehicleData?.result.properties.name}</h1>
                <h3>{vehicleData?.result.description}</h3>

                <div className="specificDetContainer">
                    <div >
                        <b> Vehicle class  </b>
                        <div> {vehicleData?.result.properties.vehicle_class} </div>
                    </div> 
                    <div >
                        <b> Manufacturer  </b>
                        <div> {vehicleData?.result.properties.manufacturer} </div>
                    </div> 
                    <div >
                        <b> Cost (credits)  </b>
                        <div> {vehicleData?.result.properties.cost_in_credits} </div>
                    </div> 
                     
                    <div >
                        <b> Crew seats  </b>
                        <div> {vehicleData?.result.properties.crew} </div>
                    </div> 
                    <div >
                        <b> Passenger seats </b>
                        <div> {vehicleData?.result.properties.passengers} </div>
                    </div> 

                    <div >
                        <b> Cargo capacity  </b>
                        <div> {vehicleData?.result.properties.cargo_capacity} </div>
                    </div> 

                </div>

                <div className="graphicsContainer">
                        <div >
                        <span>Length (m) </span>
                            <ProgressBar striped variant="success" now={
                                vehicleData?.result.properties.length/210*100
                            } label={`${vehicleData?.result.properties.length}`} />
                        </div>
                        <div >
                        <span>Max speed (ms)</span>
                        <ProgressBar striped variant="danger" now={
                                vehicleData?.result.properties.max_atmosphering_speed/1250*100
                            } label={`${vehicleData?.result.properties.max_atmosphering_speed}`} />
                        </div> 
                    </div>




            </div>
        </div>

        



</>    )
}

export default DetailedVehicle;