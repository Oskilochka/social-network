import React from 'react'
import preloader from "../../../assets/img/loader2.gif";

const Preloader = (props) => {
    return (
        <div>
            <img width='150px' src={preloader}/>
        </div>
    );
}

export default Preloader;