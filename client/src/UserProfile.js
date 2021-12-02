import { useState, useEffect } from "react";

function UserProfile(props) {
    return (
        <div>
            <div className="user-container">
                <p className="user-mood">
                    <p>{props.username}</p>
                    {/* <p>{props.}</p> */}
                </p>
            </div>
            <div>
                <p className="user-journal">
                    
                </p>
            </div>    
        </div>
    )
}

export default UserProfile;