import React from "react";

export default function CharacterCard({name, birthYear, gender}) {
    return (
        <div>
            Name: {name};
            birthYear: {birthYear};
            gender: {gender};
        </div>
    )
}