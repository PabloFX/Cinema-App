import React from 'react'

const Cinema = (props) => {
    let info
    
    
    getJSON("https://api.themoviedb.org/3/movie/now_playing?api_key=73459706ef1474208ddc7b1990a073ed&language=en-US&page=1",
            function (json) {
                console.log(json)
                info = json.results[0].id
            })
    

    return <div>{info}</div>
}

export default Cinema

var getJSON = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(xhr.response);
        } else {
            
            return false
        }
    };
    xhr.send();
}
