import CreateJournal from './CreateJournal';
import CreateMood from './CreateMood';

function Home({ user, moods, journals }) {
    return (
        <div className="create-mood-journal">
            <div className="write-entries-container">
                <div className="col-7">
                    <CreateMood user={user} moods={moods} />
                </div>
                <div className="col-7">
                    <CreateJournal user={user} journals={journals} />
                </div>
            </div>
        </div>
    )
}

export default Home;

