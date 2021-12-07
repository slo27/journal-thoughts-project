import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateMood({ setUser }) {
    let navigate = useNavigate();

    const [description, setDescription] = useState("");

    function createNewMood() {
        fetch("/moods", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                description: description
            }),
        })
        .then(r => r.json())
        .then(data => {
            setUser(data);
            navigate('/usermood')
        }) 
    }

    return (
        <div className="create-mood-wrappers">
            <h1>Mood Entry</h1>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-7">
                        <form className="new-mood-form" onSubmit={(e) => createNewMood(e, {description: description})}>
                            <label htmlFor="today-mood">Today's Mood</label>
                            <textarea
                                onChange={(e) => setDescription(e.target.value)}
                                type="text"
                                className="form-control"
                                value={description}
                                placeholder="Enter description"
                                rows={5}
                            />
                        </form>
                        <button type="submit" value="create" onClick={(e) => createNewMood()} className="btn btn-outline-dark">Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateMood;