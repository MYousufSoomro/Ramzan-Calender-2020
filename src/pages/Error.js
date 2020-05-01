import React from 'react'
import "../style-404.css";

const Notfound = () =>
    <div id="notfound">
        <div className="notfound">
            <div className="notfound-404">
                <h1>404</h1>
            </div>
            <h2>Oops, The Page you are looking for can't be found!</h2>

            <a href="/"><span className="arrow"></span>Return To Homepage</a>
        </div>
    </div>
export default Notfound