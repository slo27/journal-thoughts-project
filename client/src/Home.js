import UserMoodContainer from './UserMoodContainer';

function Home() {
    return (
        <div>
            <h1>This is Home.</h1>
            <div className="container">
                <div className="col">
                    <UserMoodContainer />
                </div>

            </div>
        </div>
    )
}

export default Home;

