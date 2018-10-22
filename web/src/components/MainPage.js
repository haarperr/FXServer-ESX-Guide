import React, {Component} from 'react'
import Sidebar from './SideMenu/Sidebar'

class MainPage extends Component{
    render () {
        return(
            <div className="container-fluid h-100">
                <div className="row w-100">
                    <div className='col-3 bg-dark h-100 pl-0'>
                        <Sidebar/>
                    </div>
                    <div className="col-6">
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage