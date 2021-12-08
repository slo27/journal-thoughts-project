function UserJournal(props) {
    return(
        <div>
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

// {/* <Moment date={dateToFormat} /> */}
