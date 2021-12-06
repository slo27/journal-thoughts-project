function UserMood(props) {
    return(
        <div className="card">
            <div className="card-body">
                <h1>Mood</h1>
                <p>{props.moodDesc}</p>
                <p>{props.journal_id}</p>
            </div>
        </div>
    )
}

export default UserMood;
