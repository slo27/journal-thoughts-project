function UserJournal(props) {
    return(
        <div className="journal-wrapper">
            <div className="hover-box-wrapper">
                <div className="card-body">
                    <p className="journal-text">{props.journalContent}</p>
                </div>
            </div>
        </div>
    )
}

export default UserJournal;

// {/* <Moment date={dateToFormat} /> */}
