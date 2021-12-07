import UserMoodContainer from './UserMoodContainer';
import UserJournalContainer from './UserJournalContainer';

function Entries({moods, journals, user}) {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col">
                    <UserMoodContainer moods={moods} user={user}/>
                </div>
                <div className="col">
                    <UserJournalContainer journals={journals} user={user} />
                </div>
            </div>
        </div>
    )
}

export default Entries;