import UserMoodContainer from './UserMoodContainer';
import UserJournalContainer from './UserJournalContainer';

function Home({moods, journals, user}) {
    return (
        <div>
            <div className="row align-items-start">
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

export default Home;

