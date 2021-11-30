import { useState, useEffect } from "react";

function UserProfile({ setUser }) {

    useEffect(() => {
        fetch("/me")
    }, []);

    return (
        <div className="user-profile">
            <p>this is user component</p>
        </div>
    )
}

export default UserProfile;