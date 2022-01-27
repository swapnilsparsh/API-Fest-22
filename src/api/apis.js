import { useState } from 'react'


const Api = () => {

    const[check,useCheck]= useState([])

    fetch("https://community-info-api.herokuapp.com/posts")
    .then( (response) => {
        return response.json();
    }).then((data) => {
        // console.log(data);
        let check = data.results;
        console.log(check);
    })

return(
    <div>
        he
    </div>
)
}

export default Api;

