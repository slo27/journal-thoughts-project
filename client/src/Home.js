import UserMoodContainer from './UserMoodContainer';

function Home({moods, user}) {
    return (
        <div>
            <div className="row align-items-start">
                <div className="col">
                    <UserMoodContainer moods={moods} user={user}/>
                </div>
            </div>
        </div>
    )
}

export default Home;

