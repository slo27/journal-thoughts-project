import UserMood from './UserMood'


function Home() {
    return (
        <div>
            <h1>This is Home.</h1>
            <div className="container">
                <div className="col">
                    <UserMood />
                </div>

            </div>
        </div>
    )
}

export default Home;

