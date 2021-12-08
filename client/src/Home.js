import CreateJournal from './CreateJournal';

function Home({ user, journals }) {
    return (
        <div className="create-mood-journal d-flex justify-content-center">
                <div className="col-7">
                    <CreateJournal user={user} journals={journals} />
                </div>
        </div>
    )
}

export default Home;

