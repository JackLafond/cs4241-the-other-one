import React from 'react';

const App = () => {
    async function table() {
        const response = await fetch("/appdata", {
            method: "GET"
        })
        const text = await response.text()
        const data = JSON.parse(text);

        return (
            <div className="App">
                <table>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Birthday</th>
                        <th>Cake</th>
                        <th>More</th>
                    </tr>
                    {data.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.age}</td>
                                <td>{val.birthday}</td>
                                <td>{val.preferredCake}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        )
    }
}