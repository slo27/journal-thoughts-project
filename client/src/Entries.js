import UserJournalContainer from './UserJournalContainer';

function Entries({ journals, user }) {
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-7">
                    <UserJournalContainer journals={journals} user={user} />
                </div>
            </div>
        </div>
    )
}

export default Entries;