import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const OnePet = (props) => {
    const [onePet, setOnePet] = useState({});
    const [didLike, setDidLike] = useState(false);
    const [likes, setLikes] = useState({
        liked: 0
    });


        useEffect(() => {
            axios.get(`http://localhost:8000/api/pets/${props._id}`)
                .then(res => setOnePet(res.data.pet))
        }, [])

        useEffect(() => {
            axios.get(`http://localhost:8000/api/pets/${props._id}`)
                .then(res => setLikes(res.data.pet))
        }, [])

        const adoptPet = _id => {
            axios.delete(`http://localhost:8000/api/pets/delete/${_id}`)
                .then(res => {
                    console.log("It was nice having yuh!")
                    navigate("/")
                })
                .catch(err => console.log(err))
        }

        const addLike = (e) => {
            e.preventDefault();
            if(!didLike){
                likes.liked += 1
                setLikes({
                    ...likes,
                    [e.target.name]: likes.liked += 1
                })
                // setLikes({[likes.liked]: likes.liked += 1})
            
                axios.put(`http://localhost:8000/api/pets/${props._id}/edit/likes`, likes)
                    .then(res => console.log("Thank for the like"))
                    .catch(err => console.log("Didnt like me"))
                
                setDidLike(true);
            }else{
                return
            }
        }
    return(
        <div>
            <div className="jumbotron p-1" >
            <h2>Details about: {onePet.name}</h2>
            </div>
            <div className = "row text-left">
                <div className="col-md-4"></div>
                <div className="col-md-3 border border-dark rounded ">
                <h3>Species: {onePet.type}</h3>
                <h3>Role: {onePet.description}</h3>
                <h3>Skills:</h3>
                <ul style={{listStyleType: "none" }}>
                    <li>
                        <ul style={{listStyleType: "none" }}>
                            <li><h3>{onePet.skillOne}</h3></li>
                            <li><h3>{onePet.skillTwo}</h3></li>
                            <li><h3>{onePet.skillThree}</h3></li>
                        </ul>
                    </li>
                </ul>
                <button onClick={() => adoptPet(onePet._id)} className="btn btn-danger">Adopt {onePet.name}</button>
                    {onePet.liked >= 0 ? <>
                    <button className="btn btn-info ml-1" onClick={addLike} >Like Button</button>
                    <p className="mt-1">Likes: {likes.liked}</p> </> : "" }
                </div>
                <div className="col-md-4" ><Link className="btn btn-primary" to="/">Go Home</Link></div>
            </div>
        </div>
    )
}

export default OnePet;