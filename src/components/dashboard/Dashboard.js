import React, { Fragment, useState } from 'react';
import './dashboard.css';
import Meetingrooms from './Meetingrooms';
import Mymeetings from './Mymeetings';
import Booking from './Booking';
import { FaStream } from 'react-icons/fa';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const routes = [
    {
        path: '/dashboard/meetingrooms',
        exact: true,
        main: () => <Meetingrooms />
    },
    {
        path: '/dashboard/mymeetings',
        main: () => <Mymeetings />
    },
    {
        path: '/dashboard/createmeeting',
        main: () => <Booking />
    }
]

const Dashboard = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <Fragment>
            <Router>
                <div className='container-fluid'>
                    <button className='showsidebar' onClick={() => setShowSidebar(!showSidebar)}>
                        <FaStream />
                    </button>
                    {showSidebar && <Sidebar />}
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <Switch>
                                    {routes.map((routes, index) => (
                                        <Route key={index} path={routes.path} exact={routes.exact} children={routes.main} />
                                    ))}
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        </Fragment >
    )
}

const Sidebar = () => {
    return (
        <div className='dashsidebar'>
            <div className='row sidebar'>
                <div className='col-md-12'>
                    <ul>
                        <Link to='/dashboard/mymeetings'>
                            <li>Booked Meetings</li>
                        </Link>
                        < Link to='/dashboard/meetingrooms'>
                            <li>Meeting rooms</li>
                        </Link>
                        <Link to='/dashboard/createmeeting'>
                            <li>Create a Meeting</li>
                        </Link>
                    </ul>
                    {routes.map((route, index) => (
                        <Route key={index} path={route.path} exact={route.exact} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;