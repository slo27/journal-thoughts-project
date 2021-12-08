import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateJournal({ user }) {
    const navigate = useNavigate();
    const [content, setContent] = useState("");

    function createNewJournal() {
        fetch("/journals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "user_id": user.id,
                "content": content
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
            <div className="container">
                <div className="d-flex justify-content-center">
                    <div className="col-7">
                    <h1>Journal Entry</h1>
                        <form className="new-journal-form" onSubmit={(e) => createNewJournal(e, {content: content})}>
                            <textarea
                                onChange={(e) => setContent(e.target.value)}
                                type="text"
                                className="form-control"
                                autoComplete="off"
                                value={content}
                                rows={15}
                                />
                        </form>
                        <br/>
                        <div className="text-center">
                            <button id="journal-btn" type="submit" onClick={(e) => createNewJournal()} className="btn btn-dark">Create</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateJournal;

// <div class="container">
//   <div class="row">
//     <div class="col text-center">
//       <button class="btn btn-default">Centered button</button>
//     </div>
//   </div>
// </div>


// const formatDate = (date) => {
    //     let jsDate = new Date(date)
    //     return (
    //         `${jsDate.getDay()}/${jsDate.getFullYear()}`
    //     )
    // }