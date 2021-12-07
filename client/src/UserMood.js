import { useState, useEffect } from 'react';

function UserMood() {
    // const [user, setUser] = useState("");
    const [moods, setMoods] = useState("");

    useEffect(() => {
        getMoods();
    }, []);

    const getMoods = () => {
        fetch("/moods")
            .then(r => r.json())
            .then((data) => setMoods(data))
    }

    return(
        <div>
            <h1>Mood</h1>
            <div className="card">
                <div className="card-body">
                    {moods.map((mood) => (
                        <div>
                            <p>{mood.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default UserMood;
