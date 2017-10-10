import React from 'react'
import ReactDOM from 'react-dom'
import '../css/foundation.min.css'
import '../css/app.css'

class Kir extends React.Component{
    render(){
        return(
            <h1>Kir bokhor</h1>
        )
    }
}

$(document).foundation();

ReactDOM.render(
    <Kir/>,
    document.getElementById('kir')
);
