import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';


const Main = props => {
    const [pet, setPets] = useState();
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => setPets(res.data.pets))
    }, [])

    return (
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <h2>These pets are looking for a good home</h2>
                <table className="table table-bordered">
                    <tr className="table-dark">
                        <th>Name</th>
                        <th>Type</th>
                        <th>Action</th>
                    </tr>
                    {
                        pet ?
                        pet.map((item, i) => {
                            return <tr>
                                <td>{item.name}</td>
                                <td>{item.type}</td>
                                <td><a href={`http://localhost:3000/pets/${item._id}`} className="btn btn-danger">Details</a> | <a className="btn btn-primary" href={`http://localhost:3000/pets/${item._id}/edit`}>Edit</a></td>
                            </tr>
                        }) : ""
                    }
                </table>
                <Link className="btn btn-lg btn-info" to="/pets/new" >Add a pet to the shelter</Link>
            </div>
            <div className="col-md-2"></div>
        </div>
    )
}

export default Main;