import React from 'react';
import { useState, useEffect } from 'react';
import UserMood from './UserMood';

function UserMoodContainer({moods, user}) {
    const [userMoods, setUserMoods] = useState([]);
    
    useEffect(() => {
        fetch(`/users/${user.id}`)
            .then((r) => r.json())
            .then((data) => checkUserMoodData(data)) // {id: 1, user_id: 1, journal_id: 1, description: 'Foggy'}
    }, [user.id]);

    function checkUserMoodData(data) {
        if (!!data.moods) {
            setUserMoods(data.moods);
        }
    }

    function renderUserMoods() {
        return userMoods.map((userMood) => {
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