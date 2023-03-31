import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import useStore from "../store/Store";
import { Link } from "react-router-dom";
import Trash from "react-useanimations/lib/trash2";
import UseAnimations from "react-useanimations";


const FavoritesDropwdown = () => {

  const {store, actions} = useStore();
  const {favoritesList} = store;
  const {handleDelFavorite} = actions;
  


    return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Favorites {favoritesList.length ? favoritesList.length :null }
      </Dropdown.Toggle>

      <Dropdown.Menu variant="dark">
        {favoritesList.length 
        ? favoritesList.map( item => <Dropdown.ItemText key={item.name}><div className="d-flex flex-row justify-content-between"><Link to={item.url}>  {item.name}</Link><UseAnimations animation={Trash}  onClick={()=>handleDelFavorite(item.name)} /></div></Dropdown.ItemText> )
        : <Dropdown.Item >Nothing added yet.</Dropdown.Item> }
      </Dropdown.Menu>
    </Dropdown>
    )
}


export default FavoritesDropwdown;