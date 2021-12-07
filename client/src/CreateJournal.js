import React from 'react';
import { useNavigate } from 'react-router-dom';

function CreateJournal(props) {
    const navigate = useNavigate();
    const { 
        content,
        setContent,
        setUser
    } = props;

    function createNewJournal(e, newJournalData) {
        e.preventDefault();
        fetch("/journals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "content": newJournalData.content
            }),
        }).then((r) => {
            if (r.created) {
                r.json().then((userData) => setUser(userData));
            }
        });
        e.target.reset();
        navigate('/usermood');
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
                                type="text"
                                className="form-control"
                                value={content}
                                placeholder="Enter content"
                                onChange={(e) => setContent(e.target.value)}
                                rows={15}
                            />
                        </form>
                        <button type="submit" className="btn btn-outline-dark">Create</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateJournal;