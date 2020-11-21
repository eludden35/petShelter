import React, { useState } from 'react';
import Form from '../components/Form'
import axios from 'axios';
import { Link, navigate } from '@reach/router';


const NewPet = (props) => {
    const [error, setError] = useState({});
    const [form, setForm] = useState({
        name: "",
        type: "",
        description: "",
        skillOne: "",
        skillTwo: "",
        skillThree: "",
        liked: 0
    })


    const onChangeHandler = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets/new", form)
            .then(res => {
                if(res.data.error){
                    setError(res.data.error.errors)
                }else{
                    console.log("Complete!!");
                    navigate("/")
                }
            })
            .catch(console.log("Didnt work homie!"))
    }


    return (
        <div>
            <h2>Know a pet needing a home?</h2>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 border border-dark rounded"><Form form={form} onSubmitHandler={onSubmitHandler} onChangeHandler = {onChangeHandler} error = {error}/></div>
                <div className="col-md-4"><Link className="btn btn-primary btn-md" to="/">Go Home</Link></div>
            </div>
            
        </div>
    )
}

export default NewPet;