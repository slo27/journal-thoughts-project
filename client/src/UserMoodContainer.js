import React from 'react';
import { useState, useEffect } from 'react';
import UserMood from './UserMood';

function UserMoodContainer(props) {
    const [userMoods, setUserMoods] = useState([]);

    let id = props.user_id;
    
    console.log("check props", props)

    useEffect(() => {
        fetch(`/moods/${id}`)
        .then((r) => r.json())
        .then((data) => checkUserMoodData(data)) // {id: 1, user_id: 1, journal_id: 1, description: 'Foggy'}
    }, [id]);

    function checkUserMoodData(data) {
        if (!!data.moods) {
            setUserMoods(data.moods);
        }
    }

    

    return(
        <div className="mood-container">
            <h1>Mood</h1>
            {/* {renderUserMoods()} */}
        </div>
    )
}

export default UserMoodContainer;