import React from 'react';
import { useState, useEffect } from 'react';
import UserJournal from './UserJournal';

function UserJournalContainer(props) {
    const [userJournals, setUserJournals] = useState([]);

    let id = props.user.id;

    console.log("check journal props", props);

    useEffect(() => {
        fetch(`/users/${id}`)
            .then((r) => r.json())
            .then((data) => checkUserJournalData(data))
    }, [id]);

    function checkUserJournalData(data) {
        if (!!data.journals) {
            setUserJournals(data.journals);
        }
    }

    function renderUserJournals() {
        return userJournals.map((userJournal) => {
            console.log('checking journal render', userJournal);
            return (
                <UserJournal 
                    key={userJournal.id}
                    timeStamps={userJournal.timestamps}
                    journalContent={userJournal.content}
                />
            )
        })
    }

    return (
        <div className="journal-container">
            <div>{renderUserJournals()}</div>
        </div>
    )
}

export default UserJournalContainer;