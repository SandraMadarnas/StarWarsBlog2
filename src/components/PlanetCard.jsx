import React from "react";
import "../styles/components/card.css"
import useStore from "../store/Store";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

const PlanetCard = ({name ,id }) => {
    
    const imgSrc = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg `
    
    const {store, actions} = useStore();
    const {planetsDetailedList, favoritesList} = store;
    const {handleNewFavorite, handleDelFavorite} = actions;

    const [planetData] = planetsDetailedList ? planetsDetailedList.filter(item => item.result.uid === id) : null;
   
    const favorite = favoritesList.filter((item) => item.name === name).length ? true : false

    return(

    <Card bg="dark" text="light">
        <Card.Img src={imgSrc} />
         <Card.Body>
         <Card.Title>{name}</Card.Title>
             <Card.Text><b>Diameter</b> : {planetData ? planetData.result.properties.diameter : <Spinner animation="border" variant="danger" />}</Card.Text>
             <Card.Text><b>Gravity</b> : {planetData ? planetData.result.properties.gravity : <Spinner animation="border" variant="warning" />}</Card.Text>
             <Card.Text><b>Climate</b> : {planetData ? planetData.result.properties.climate : <Spinner animation="border" variant="primary" />}</Card.Text>
             <div className="d-flex d-row justify-content-between">
                 <Link to={`/planetdetails/${planetData?.result.uid}`} className="btn btn-primary">Learn More...</Link>
                 <Button  variant={favorite ? "danger" : "secondary" }  onClick={() => !favorite ? handleNewFavorite(name,id,"planetdetails") : handleDelFavorite(name) } >&#10084;</Button>
             </div>
         </Card.Body>
    </Card >

    )
}





export default PlanetCard;