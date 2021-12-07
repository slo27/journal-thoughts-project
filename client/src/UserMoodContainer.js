import React from 'react';
import { useState, useEffect } from 'react';
import UserMood from './UserMood';

function UserMoodContainer(props) {
    const [userMoods, setUserMoods] = useState([]);

    let id = props.user.id;
    
    console.log("check mood props", props);

    useEffect(() => {
        fetch(`/users/${id}`)
            .then((r) => r.json())
            .then((data) => checkUserMoodData(data)) // {id: 1, user_id: 1, journal_id: 1, description: 'Foggy'}
    }, [id]);

    function checkUserMoodData(data) {
        if (!!data.moods) {
            setUserMoods(data.moods);
        }
    }

    function renderUserMoods() {
        return userMoods.map((userMood) => {
            console.log('checking mood render', userMood);
            return (
                <UserMood 
                    key={userMood.id}
                    journal_id={userMood.journal_id}
                    moodDesc={userMood.description}
                />
            )
        })
    }     

    return (
        <div className="mood-container">
            <div>{renderUserMoods()}</div>
        </div>
    )
}

export default UserMoodContainer; 