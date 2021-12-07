import React from 'react';
import UserJournal from './UserJournal';

function UserJournalContainer({ journals, user }) {
    // const [userJournals, setUserJournals] = useState([]);

    // console.log('checking user data', user)
    // useEffect(() => {
    //     fetch(`/users/${user.id}`)
    //         .then((r) => r.json())
    //         .then((data) => checkUserJournalData(data))
    // }, []);

    // function checkUserJournalData(data) {
    //     if (!!data.journals) {
    //         setUserJournals(data.journals);
    //     }
    // }

    function renderUserJournals() {
        console.log(user);
        return user.journals.map((userJournal) => {
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