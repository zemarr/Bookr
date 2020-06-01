import React, { Component } from 'react';
import feat from './home.module.css';
import { Heading } from './Conferencerooms';
import { FaSatelliteDish, FaBan     , FaClock, FaBuilding } from 'react-icons/fa';

class Features extends Component {
    state = {
        features: [
            {
                icon: <FaSatelliteDish />,
                title: 'Equipped for productivity',
                description: 'Whiteboards, mobile chargers, WiFi, HDTVs and more. Each space includes everything you need to do your best work.'
            },
            {
                icon: <FaClock />,
                title: 'Hands-on help',
                description: 'Your dedicated account manager and support are ready to assist you with any issues on request. Our customer care team is available 24/7.'
            },
            {
                icon: <FaBan />,
                title: 'Distraction-free space',
                description: 'Bookr gives you and your team a private space to focus and innovate , without the distractions of shared coworking spaces and overcrowded offices'
            },
            {
                icon: <FaBuilding />,
                title: 'Flexible-floor plans',
                description: 'Change up the space to suit any meeting, presentation or workspace needs. Meeting room support team will take care of setting things up'
            }
        ]
    }
    featureStyle = {
        
    }
    render() {
        return (
            <>
                <section className='container'>
                    <Heading name='Features' />
                    <div className={feat.featurescontainer}>
                        {this.state.features.map((items, index) => {
                            return <div key={index} className={feat.features}>
                                <span>{items.icon}</span>
                                <h4>{items.title}</h4>
                                <p>{items.description}</p>
                            </div>
                        })}
                    </div>
                </section>
            </>
        )
    }
}

export default Features;