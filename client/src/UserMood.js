function UserMood(props) {
    return(
        <div>
            <h1>Mood</h1>
            <div className="card">
                <div className="card-body">
                    <p>{props.moodDesc}</p>
                </div>
            </div>
        </div>
    )
}

export default UserMood;
