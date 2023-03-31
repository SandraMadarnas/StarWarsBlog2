import React from "react";
import Button from 'react-bootstrap/Button';
import UseAnimations from "react-useanimations";
import arrowRight from "react-useanimations/lib/arrowRightCircle";
import arrowLeft from "react-useanimations/lib/arrowLeftCircle";


const ControlsContainer = ({list, handleChange}) => {

    


    return(
        <div>
            { list 
            ? <>
            <Button variant="dark" onClick={() => handleChange(list.previous)}><UseAnimations animation={arrowLeft} size={50} /></Button >
            <Button variant="dark" onClick={() => handleChange(list.next)}><UseAnimations animation={arrowRight} size={50} /></Button >
            </>
            :null
            }
        </div>
    )
}

export default ControlsContainer;