import CreateJournal from './CreateJournal';

function Home({ user, journals }) {
    return (
        <div className="create-mood-journal">
            <div className="write-entries-container">
                <div className="col-7">
                    <CreateJournal user={user} journals={journals} />
                </div>
            </div>
        </div>
    )
}

export default Home;

