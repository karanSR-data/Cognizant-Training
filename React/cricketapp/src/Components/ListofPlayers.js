import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 82 },
        { name: "Shubman Gill", score: 65 },
        { name: "KL Rahul", score: 72 },
        { name: "Hardik Pandya", score: 55 },
        { name: "Ravindra Jadeja", score: 76 },
        { name: "R Ashwin", score: 61 },
        { name: "Mohammed Shami", score: 48 },
        { name: "Jasprit Bumrah", score: 79 },
        { name: "Kuldeep Yadav", score: 67 },
        { name: "Mohammed Siraj", score: 73 }
    ];

    const below70 = players.filter(player => player.score < 70);

    return (
        <div>
            <h2>List of Players</h2>

            {players.map((player, index) => (
                <p key={index}>
                    {player.name} - {player.score}
                </p>
            ))}

            <hr />

            <h2>Players with Score Below 70</h2>

            {below70.map((player, index) => (
                <p key={index}>
                    {player.name} - {player.score}
                </p>
            ))}
        </div>
    );
}

export default ListofPlayers;