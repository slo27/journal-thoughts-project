import UserJournalContainer from './UserJournalContainer';

function Entries({ journals, user }) {
    return (
        <div className="container">
            <div class="row justify-content-center">
                <div className="col-7">
                    <UserJournalContainer journals={journals} user={user} />
                </div>
            </div>
        </div>
    )
}

export default Entries;