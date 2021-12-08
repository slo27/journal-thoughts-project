import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateJournal({ user }) {
    const navigate = useNavigate();
    const [content, setContent] = useState("");
    const [mood, setMood] = useState("");
    
    function createNewJournal() {
        fetch("/journals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "user_id": user.id,
                "content": content,
                "mood": mood
            }),
        })
        .then(r => r.json())
        .then(data => {
            console.log(data);
            console.log(user);
        }) 
        navigate('/usermood')
    }


    return (
        <div className="create-journal-wrappers">
            <h1>Journal Entry</h1>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-7">
                        <form className="new-journal-form" onSubmit={(e) => createNewJournal(e, {content: content})}>
                            <label htmlFor="today-mood">Current Mood</label>
                            <textarea
                                onChange={(e) => setMood(e.target.value)}
                                type="text"
                                className="form-control"
                                value={mood}
                                placeholder="description"
                                rows={5}
                            />
                            <label htmlFor="today-journal">Daily Journal</label>
                            <textarea
                                onChange={(e) => setContent(e.target.value)}
                                type="text"
                                className="form-control"
                                value={content}
                                placeholder="content"
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