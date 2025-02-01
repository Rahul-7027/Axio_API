import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Movies = () => {
    const [data, setData] = useState([])

    // const {Poster,Title,Type,Year,imdbID}=data

    const fetchData = async () => {
        const API = await axios.get("https://www.omdbapi.com/?i=tt3896198&apikey=319ec942&s=titanic&page=1")
        setData(API.data.Search)
        console.log(API.data.Search)

    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <div className="title">Movies Data</div>
            <div className="grid-container">
                {data.map((elemet, index) => {
                    return (
                        <>
                            <div className="card" key={elemet.imdbID}>
                                <img src={elemet.Poster} alt="Profile Image" />
                                <h3>Title: {elemet.Title}</h3>
                                <p>ID: {elemet.imdbID}</p>
                                <p>Type: {elemet.Type}</p>
                                <p>Year: {elemet.Year}</p>
                            </div>
                        </>
                    )
                })}

            </div>

        </div>
    )
}

export default Movies
