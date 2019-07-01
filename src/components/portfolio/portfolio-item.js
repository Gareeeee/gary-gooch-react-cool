import React from 'react';
import {Link} from 'react-router-dom';


export default function(props) {
    const{ id, description, thumb_image_url, logo} = props.item;
    return(
        <div>
           <div>{description}</div>
            <img src={thumb_image_url}/>
            <img src={logo}/>
            <Link to={`/portfolio/${id}`}>Link</Link>
        </div>

        
    );
}