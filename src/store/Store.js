import React, {createContext, useContext, useState,useEffect} from 'react';
import CloseButton from 'react-bootstrap/CloseButton';
import { getFetch, getMultipleFetch , favSound, unfavSound, changePageSound} from './externalActions';



//Creamos el contexto
const Store = createContext();
//ZONA TEMPORAL (ESTAS FUNCIONES ME LAS LLEVARE A OTRO ARCHIVO)




export const StoreProvider = ({children}) => {
    const [characters, setCharacters] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [charListUrl, setCharListUrl] = useState("https://www.swapi.tech/api/people");
    const [vehicleListUrl, setVehicleListUrl] = useState("https://www.swapi.tech/api/vehicles");
    const [planetListUrl, setPlanetListUrl] = useState("https://www.swapi.tech/api/planets");
    const [charDetailedList, setCharDetailedList] = useState([]);
    const [vehiclesDetailedList, setVehiclesDetailedList] = useState([]);
    const [planetsDetailedList, setPlanetsDetailedList] = useState([]);
    const [favoritesList, setFavoritesList] = useState([]);


    useEffect( ()=>{
        let tempFavList = localStorage.getItem("favoritesList")
        if(tempFavList == null) return
        setFavoritesList(JSON.parse(tempFavList))
    },[])

    useEffect(()=>{
        localStorage.setItem("favoritesList",JSON.stringify(favoritesList))
    },[favoritesList])

      useEffect(()=>{
        let tempCharacterList = localStorage.getItem("characters")
        if (characters.length === 0 && tempCharacterList != null) {
            setCharacters(JSON.parse(tempCharacterList))
            setCharDetailedList(JSON.parse(localStorage.getItem("charDetailedList")))
            return
        }

        getFetch(charListUrl)
        .then( res => {
            localStorage.setItem("characters",JSON.stringify(res))
            setCharacters(res)
            return getMultipleFetch(res.results)})
        .then( data =>  {
            localStorage.setItem("charDetailedList",JSON.stringify(data))
            return setCharDetailedList(data) })
        .catch( err => console.log(err) )    
    },[charListUrl]);


    useEffect(()=>{
        let tempVehicleList = localStorage.getItem("vehicles")
        if (vehicles.length === 0 && tempVehicleList != null) {
            setVehicles(JSON.parse(tempVehicleList))
            setVehiclesDetailedList(JSON.parse(localStorage.getItem("vehiclesDetailedList")))
            return
        }
        getFetch(vehicleListUrl)
        .then( res => {
            localStorage.setItem("vehicles",JSON.stringify(res))
            setVehicles(res)
            return getMultipleFetch(res.results)} )
        .then( data => {
            localStorage.setItem("vehiclesDetailedList",JSON.stringify(data))
            setVehiclesDetailedList(data)})
        .catch( err => console.log(err) )

    },[vehicleListUrl]);


    useEffect(()=>{
        let tempPlanetlist = localStorage.getItem("planets")
        if (planets.length === 0 && tempPlanetlist != null) {
            setPlanets(JSON.parse(tempPlanetlist))
            setPlanetsDetailedList(JSON.parse(localStorage.getItem("planetsDetailedList")))
            return
        }
        getFetch(planetListUrl)
        .then( res => {
            localStorage.setItem("planets",JSON.stringify(res))
            setPlanets(res)
            return getMultipleFetch(res.results)} )
            .then( data => {
                localStorage.setItem("planetsDetailedList",JSON.stringify(data))
                setPlanetsDetailedList(data)})
        .catch( err => console.log(err) )

    },[planetListUrl]);

    const handleCharUrl = (url) => {
        changePageSound.play();
        setCharListUrl(url)
    };

    const handlePlanetUrl = (url) => {
        changePageSound.play();
        setPlanetListUrl(url)
    };

    const handleVehicleUrl = (url) => {
        changePageSound.play();
        setVehicleListUrl(url)
    };

    const handleNewFavorite = ( name, itemID, itemType ) => {
        favSound.play();
        setFavoritesList(prev => {
            const url = `/${itemType}/${itemID}`
            const newItem = {name, url};
            let newList = [...prev, newItem]
            return newList
        })
    }

    const handleDelFavorite = (name) => {
        unfavSound.play();
        setFavoritesList(prev => {
            return prev.filter( item => item.name !== name)
        })
    }

    let store = {characters ,vehicles ,planets ,charDetailedList, vehiclesDetailedList, planetsDetailedList ,favoritesList }
    let actions = {handleCharUrl, handlePlanetUrl, handleVehicleUrl, handleNewFavorite, handleDelFavorite}

    return(
        <Store.Provider value={{store , actions}}>
            {children}
        </Store.Provider>
    )};


function useStore() {
    return useContext(Store);
}


export default useStore;


