import React, { useEffect, useState } from 'react'
import { getServies } from './GetServicesApi'

const Movies = () => {
    const [data, setData] = useState([])

    // const {Poster,Title,Type,Year,imdbID}=data

    const fetchData = async () => {
        const API = await getServies()
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
                {data.map((element) => (
                    <div className="card" key={element.imdbID}>
                        <img src={element.Poster} alt="Profile Image" />
                        <h3>Title: {element.Title}</h3>
                        <p>ID: {element.imdbID}</p>
                        <p>Type: {element.Type}</p>
                        <p>Year: {element.Year}</p>
                    </div>
                )
                )}

            </div>

        </div>
    )
}

export default Movies
