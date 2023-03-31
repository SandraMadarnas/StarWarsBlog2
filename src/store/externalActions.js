export const getFetch = (url) => {
    return fetch(url)
    .then( res => res.json() )
}


export const getMultipleFetch = async (urlList) => {
   
    return await Promise.all( urlList.map(element => {
        return fetch(element.url)
        .then( res => res.json() )        
    }))

}

// MEDIA EXPORTS

export const favSound = new Audio("../media/LSON.mp3"); 
export const unfavSound = new Audio("../media/DVNo.mp3");
export const changePageSound = new Audio("../media/Atrap.mp3")



// MEDIA CONFIG
favSound.volume = 0.2;
unfavSound.volume = 0.2;
changePageSound.volume = 0.2;