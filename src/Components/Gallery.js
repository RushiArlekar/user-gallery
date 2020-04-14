import React from 'react'

function Gallery(props) {

    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(json => {
        console.log(json)
    })

    return (
        <div>
            hello
        </div>
    )
}

export default Gallery