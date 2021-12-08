function UserJournal(props) {
    return(
        <div>
            <div className="card">
                <div className="card-body">
                    <p>{props.journalContent}</p>
                    <p>{props.timeStamps}</p>
                </div>
            </div>
        </div>
    )
}

export default UserJournal;

// {/* <Moment date={dateToFormat} /> */}
