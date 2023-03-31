import React from "react";
import "../styles/components/card.css"
import useStore from "../store/Store";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';



const VehicleCard = ({name, id, url}) => {
    
    const imgSrc = `https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg `

    const {store, actions} = useStore();
    const {vehiclesDetailedList,favoritesList } = store;
    const {handleNewFavorite, handleDelFavorite} = actions;

    const [vehicleData] = vehiclesDetailedList ? vehiclesDetailedList.filter(item => item.result.uid === id) : null;

    const favorite = favoritesList.filter((item) => item.name === name).length ? true : false


    return(
    <Card bg="dark" text="light" >
        <Card.Img src={imgSrc} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text><b>Vehicle Class:</b> : {vehicleData ? vehicleData.result.properties.vehicle_class : <Spinner animation="border" variant="danger" />}</Card.Text>
            <Card.Text><b>Price (credits)</b> : {vehicleData ? vehicleData.result.properties.cost_in_credits : <Spinner animation="border" variant="warning" />}</Card.Text>
            <Card.Text><b>Passengers</b> : {vehicleData ? vehicleData.result.properties.passengers : <Spinner animation="border" variant="primary" />}</Card.Text>
            <div className="d-flex d-row justify-content-between">
                <Link to={`/vehicledetails/${id}`} className="btn btn-primary">Learn More...</Link>
                <Button variant={favorite ? "danger":"secondary" }  onClick={() => !favorite ? handleNewFavorite(name,id,"vehicledetails") : handleDelFavorite(name) } >&#10084;</Button>
            </div>
        </Card.Body>
    </Card>
    )
}


export default VehicleCard;


