import React from 'react';
import UserJournal from './UserJournal';

function UserJournalContainer({ user }) {
    function renderUserJournals() {
        console.log(user);
        return user?.journals.reverse().map((userJournal) => { // optional-chaining // reverse data entry
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