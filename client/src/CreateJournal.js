import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateJournal({ setUser }) {
    const navigate = useNavigate();

    const [content, setContent] = useState("");

    function createNewJournal() {
        fetch("/journals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: content
            }),
        })
        .then(r => r.json())
        .then(data => {
            setUser(data);
            navigate('/usermood')
        }) 
    }

    return (
        <div className="create-journal-wrappers">
            <h1>Journal Entry</h1>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-7">
                        <form className="new-journal-form" onSubmit={(e) => createNewJournal(e, {content: content})}>
                            <label htmlFor="today-journal">Today's Journal</label>
                            <textarea
                                onChange={(e) => setContent(e.target.value)}
                                type="text"
                                className="form-control"
                                value={content}
                                placeholder="Enter content"
                                rows={15}
                            />
                        </form>
                        <button type="submit" onClick={(e) => createNewJournal()} className="btn btn-outline-dark">Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateJournal;