import React from 'react'
import ReactDOM from 'react-dom'
import '../css/foundation.min.css'
import '../scss/app.css'

class Hello extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello World!</h1>
            </div>
        )
    }
}

$(document).foundation();

ReactDOM.render(
    <Hello/>,
    document.getElementById('Hello')
);
