import React, { useEffect, useState } from 'react';
import Form from '../components/Form'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const UpdatePet = props => {
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
    

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => setForm(res.data.pet))
    }, [])

    const onChangeHandler = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${props._id}/edit`, form)
            .then(res => {
                if(res.data.error){
                    setError(res.data.error.errors)
                }else{
                    navigate("/")
                }
            })
    }

    return(
        <div>
            <h1>Edit {form.name}</h1>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 border border-dark rounded">
                    <Form form={form} onSubmitHandler={onSubmitHandler} onChangeHandler = {onChangeHandler} error = {error}/>
                </div>
                <div className="col-md-4"><Link className="btn btn-primary btn-md" to="/">Go Home</Link></div>
            </div>
        </div>
    )
}

export default UpdatePet;