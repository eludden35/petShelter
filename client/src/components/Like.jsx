import React, {useState} from "react"; 

const Like = (props) => {
    const [like, setLike] = useState(0);

    const toggle = () => { 
        let localLiked = liked; 
        localLiked = !localLiked; 
        setState({ liked: localLiked }); 
    };

        return ( 
        <div className="container"> 
            <center> 
                    
                <p>Click on the Like Button</p> 
        
                <div className="container" style={{ border: "1px solid black", width: "15%" }} onClick={() => toggle()}> 
                    {liked === false ? ( 
                    <FontAwesomeIcon icon={faHeart} /> 
                    ) : ( 
                    <FontAwesomeIcon icon={faHeartBroken} /> 
                    )} 
                </div> 
            </center> 
        </div> 
        ); 
}


export default Like;