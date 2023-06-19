import { useState } from 'react'
import './index.scss'
import axios from 'axios';
const Background = () => {
    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {
        axios.get(`http://localhost:8080/movie-by-name?movieName=${searchText}`)
            .then((response) => {
                console.log(response.data);
            })
            .catch();
    }

    return (
        <div className='background'>
            <div className="backdrop-img">
                <img src="https://static2.vieon.vn/vieplay-image/thumbnail_v4/2022/10/21/4nn61f6u_1920x1080-chiecbatluavavaycongchua.png" alt="" />

                <div className="overlay"></div>
            </div>

            <div className="search">
                <h1>hehe</h1>
                <h2>meo meo gau gau</h2>

                <div className="search__button">
                    <div className="search__button__wrapper">
                        <input type="text" value={searchText} onChange={(e) => {
                            setSearchText(e.target.value);
                        }} />
                        <button onClick={handleSearch}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Background