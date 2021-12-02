import React from 'react';
import { useState, useEffect } from 'react';


function UserMood(props) {
    const [userMoods, setUserMoods] = useState([]);

    let id = props.user_id

    useEffect(() => {
        fetch(`/users/${id}`)
            .then((r) => r.json())
            .then((data) => checkUserMoodsData(data));
    }, [id]);

    function checkUserMoodsData(data) {
        if (!!data.moods) {
            setUserMoods(data.moods);
        }
    }

    function renderUserMoods() {
        return userMoods.map((userMood) => {
            return (
                <UserMood 
                    key={userMood.id}
                    moodDescription={userMood.description}
                />
            )
        })
    }

    return(
        <div className="mood-container">
            {renderUserMoods()}
        </div>
    )
}

export default UserMood;