import React from 'react';
import { useNavigate } from 'react-router-dom';

function CreateMood(props) {
    const navigate = useNavigate();
    const {
        description,
        setDescription,
        setUser
    } = props;

    function createNewMood(e, newMoodData) {
        e.preventDefault();
        fetch("/moods", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 
                "descriptions": newMoodData.description
            }),
        }).then((r) => {
            if (r.created) {
                r.json().then((userData) => setUser(userData));
            }
        });
        navigate('/');
    }

    return (
        <div className="create-mood-wrappers">
            <h1>Create Mood</h1>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-7">
                            <form className="new-mood-form" onSubmit={(e) => createNewMood(e, {description: description})}>
                                <label htmlFor="current-mood">Current Mood</label>
                                <textarea
                                type="text"
                                className="form-control"
                                value={description}
                                placeholder="Current Mood"
                                onChange={(e) => setDescription(e.target.value)}
                                rows={5}
                                />
                            </form>
                            <button type="submit" value="create" className="btn btn-outline-dark">Create</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default CreateMood;