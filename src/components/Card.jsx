import React from "react"
import directory from "../directory";

import SampleComponent from "./SampleComponent";
// import SupportBubble from "./SupportBubble";

// function createSupportBubble(directory){
//     return <supportBubble 
//         id={directory.id}
//         typeOfSupport={directory.typeOfSupport}
//     />
// }

function Card(props){
    return <div className="card">
        <img className="avatar_img" src ={props.img} alt="avatar" />
        <h3>{props.name}</h3>
        <h4>{props.title} at {props.company}</h4>
        <p className="bioText">{props.bio}</p>
        <a href="{props.linkedin}">LinkedIn</a>
        <p className="bootcampGrad">Bootcamp Grad ✅</p>

        <SampleComponent 
            item = {directory[0].typeOfSupport[1]}
        />
        {/* <SupportBubble /> */}
        {/* {directory.map(createSupportBubble)} */}



        <button><a href = "mailto: izebel@codesquad.org">Book a Call</a></button>
    </div>
}

export default Card;