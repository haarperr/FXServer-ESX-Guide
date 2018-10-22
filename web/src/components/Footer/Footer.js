import React, {Component} from 'react'

class Footer extends Component{
    render() {
        return(
            <div id="footer" className="bg-dark navbar navbar-default">
                <div className="container">
                <p className="navbar-text text-muted pull-left"> This pages where built with
                    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" > ReactJS</a>
                </p>
                </div>
            </div>
        )
    }
}

export default Footer