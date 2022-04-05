import React from "react";
import Card from "./Card"
import directory from "../directory"

// function createSupportBubble(directory){
//     return <supportBubble 
//         id={directory.id}
//         typeOfSupport={directory.typeOfSupport}
//     />
// }


function createCard(directory){
    return <Card 
        id={directory.id}
        img={directory.img}
        name={directory.name}
        title={directory.title}
        company={directory.company}
        bio={directory.bio}
        linkedin={directory.linkedin}
        typeOfSupport={directory.typeOfSupport}
        bootcampGrad={directory.bootcampGrad}
        
    />
}

function App() {
    return <div>
        <h1>Advocates Program Directory</h1>
        {directory.map(createCard)}
        <p>meow</p>
        
    </div>
}

export default App;