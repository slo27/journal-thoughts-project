import React from 'react';
import { useState, useEffect } from 'react';

function CreateMood() {
    const [description, setDescription] = useState("")

    function createMood() {
        fetch("/moods/create")
    }

    return (
        <div>
            <h1>Create mood</h1>
        </div>
    )
}

export default CreateMood;