import faker from "faker";
import React, { useEffect, useState } from "react";
import Story from "./Story";

function Stories() {

    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {
        const Suggestions = [...Array(20)].map((_,i)=>({
            ...faker.helpers.contextualCard(),
            id: i,
        }))

        setSuggestions(Suggestions);
    }, [])

    return (
        <div>
            {suggestions.map((profile) => (
                <Story key={profile.id} img={profile.avatar} username={profile.username}/>
            ))}
        </div>
    )
}

export default Stories
