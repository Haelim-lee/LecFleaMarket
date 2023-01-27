import React, { createRef, useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

function ThumbnailViewer(){
    const [Feed, setFeed] = useState([{}]);
    const getFeed = () => {
        fetch('/GetFeedPhoto', { credentials: 'include' })
        .then(res => res.json())
        .then((msg) => { setFeed(msg) })
      //.then(msg=>alert(JSON.stringify(msg)))
        .catch(err => alert(err + '오류'));
    } 
useEffect(() => {
    getFeed();
}, []);

return (
    <span>
        <div className='ThumbnailViewer'>
            <div>
                <div>
                    {<label> HOME </label>}
                </div>
                <div>
                    {<label> MyPage </label>}
                </div>
            </div>
        </div>
    </span>
)
}

export default ThumbnailViewer;