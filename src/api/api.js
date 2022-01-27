import React,{useState,useEffect}  from "react";

const Test=()=>{


    const [commuData, setCommuData] = useState([]);

    useEffect(()=>{
        fetch('https://scythe-typhoon-angora.glitch.me/overview',{
            mode: 'no-cors'
        })
        .then((data)=>data.json())
        .then((data)=>setCommuData(data))
    },[])


console.log(commuData);




    return(
        <div className="test">
            <h1>hello</h1>

        </div>
    )
}

export default Test