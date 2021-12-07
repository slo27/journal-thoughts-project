import React from 'react';
import { useState, useEffect } from 'react';
import UserJournal from './UserJournal';

function UserJournalContainer({ journals, user }) {
    const [userJournals, setUserJournals] = useState([]);

    useEffect(() => {
        fetch(`/users/${user.id}`)
            .then((r) => r.json())
            .then((data) => checkUserJournalData(data))
    }, [user.id]);

    function checkUserJournalData(data) {
        if (!!data.journals) {
            setUserJournals(data.journals);
        }
    }

    function renderUserJournals() {
        return userJournals.map((userJournal) => {
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