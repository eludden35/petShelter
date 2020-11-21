import React from 'react';

const Form = (props) => {
    return (
        <div>
            <div className="row">
                <div className = "col-sm-2"></div>
                <div className = "col-sm-8">
                    <form onSubmit={props.onSubmitHandler}>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="name" className="form-control" onChange={props.onChangeHandler} value={props.form.name}/>
                            {
                                props.error.name ?
                                    <span className="text-danger">{props.error.name.message}</span>
                                    : ""
                            }
                        </div>
                        <div className="form-group">
                            <label>Type</label>
                            <input type="text" name="type" className="form-control" onChange={props.onChangeHandler} value={props.form.type}/>
                            {
                                props.error.type ?
                                    <span className="text-danger">{props.error.type.message}</span>
                                    : ""
                            }
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input type="text" name="description" className="form-control" onChange={props.onChangeHandler} value={props.form.description}/>
                            {
                                props.error.description ?
                                    <span className="text-danger">{props.error.description.message}</span>
                                    : ""
                            }
                        </div>
                        <div className="form-group">
                            <label>Skill 1</label>
                            <input type="text" name="skillOne" className="form-control" onChange={props.onChangeHandler} value={props.form.skillOne}/>
                            {
                                props.error.skillOne ?
                                    <span className="text-danger">{props.error.skillOne.message}</span>
                                    : ""
                            }
                        </div>
                        <div className="form-group">
                            <label>Skill 2</label>
                            <input type="text" name="skillTwo" className="form-control" onChange={props.onChangeHandler} value={props.form.skillTwo}/>
                            {
                                props.error.skillTwo ?
                                    <span className="text-danger">{props.error.skillTwo.message}</span>
                                    : ""
                            }
                        </div>
                        <div className="form-group">
                            <label>Skill 3</label>
                            <input type="text" name="skillThree" className="form-control" onChange={props.onChangeHandler} value={props.form.skillThree}/>
                            {
                                props.error.skillThree ?
                                    <span className="text-danger">{props.error.skillThree.message}</span>
                                    : ""
                            }
                        </div>
                        <input type="submit" value="submit" className="btn btn-lg btn-danger"/>
                    </form>
                </div>
                <div className = "col-sm-2"></div>
            </div>
        </div>
    )
}

export default Form;