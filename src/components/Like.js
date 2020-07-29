import React, { useState } from 'react';


const Like  = () => {

    let [nbIfLikes, setNbIfLikes] = useState (0);
    return (    
        <div>
            { nbIfLikes}
            <hr/>
            <button onClick={()=> setNbIfLikes(nbIfLikes + 1) }> Like

            </button>
        </div>
     );
}
 
export default Like;