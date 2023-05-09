import React, { useEffect, useState } from 'react'
import style from "./DadJokes.module.css"

export default function DadJokes() {

    const [data, setData] = useState([]);

    const generateJoke = () => {
        fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setData(data));
    }

    useEffect(() => {
        console.log(data)
        if (data.length === 0) {
            generateJoke();
        }

    }, []);

    return (
        <div className={style.container}>
            <h3 className={style.title}>Don't Laugh Challenge</h3>
            <p className={style.joke}>{data.joke}</p>
            <button onClick={generateJoke} className={style.button}>Get Another Joke</button>
        </div>
    )
}
