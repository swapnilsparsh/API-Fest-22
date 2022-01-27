import { useEffect } from 'react'


const Api = () => {
    const url ="https://community-info-api.herokuapp.com/posts";

    useEffect(()=> {
        fetch(url)
        .then(response => response.json()).then(json => {
            console.log("json", json)
        }).catch(err =>{
            console.log("error", err)
        })
},[])

return(
    <div>
        he
    </div>
)
}

export default Api;

