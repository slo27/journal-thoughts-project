function UserJournal(props) {
    return(
        <div>
            <h1>Journal</h1>
            <div className="card">
                <div className="card-body">
                    <p>{props.timeStamps}</p>
                    <p>{props.journalContent}</p>
                </div>
            </div>
        </div>
    )
}

export default UserJournal;

