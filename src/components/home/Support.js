import React, { Fragment } from 'react';
import sup from './home.module.css';
import { Heading } from './Conferencerooms';
import Button from '../buttons/Buttons';

const Support = () => {
    return (
        <Fragment>

            <div style={{backgroundColor: '#ececec', paddingTop: '2rem'}}>
                <Heading
                    name='Meeting Room Support'
                />
                <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '0 13rem 10rem', backgroundColor: '#ececec' }}>
                    <Card
                        name='Cercei Lannister'
                        role='Cleaning Director'
                        className='cersei'
                        message='"I am in charge of the situation and orderliness of the meeting rooms to ensure a clean meeting environment".'
                    />
                    <Card
                        name='Jon snow'
                        role='Supervisor'
                        className='jon'
                        message='"I am in charge of supervision of the affairs of the meeting rooms in the company. Contact me for setting up rooms for your convenient use".'
                    />
                    <Card
                        name='Arya Stark'
                        role='Assistant Supervisor'
                        className='arya'
                        message='"I render assistance in setting up any rooms for meetings".'
                    />
                </div>
            </div>

        </Fragment>
    )
}

const Card = (props) => {
    return (
        <Fragment>
            <div className={sup.card}>
                <ProfileImage
                    name={props.name}
                    role={props.role}
                    className={props.className}
                />
                <div style={{ width: '100%' }}>
                    <Info
                        message={props.message}
                    />
                    <Button
                        name='Contact'
                        className='contact'
                        link=""
                    />
                </div>
            </div>
        </Fragment>
    )
}

const ProfileImage = (props) => {
    return (
        <Fragment>
            <div className={sup[props.className]}>
                <div className={sup.overlay}>
                    <section style={{ width: '100%', position: 'absolute', top: '70%', textAlign: 'center', color: 'white' }}>
                        <h4>{props.name}</h4>
                        <p>{props.role}</p>
                    </section>
                </div>

            </div>
        </Fragment>
    )
}

const Info = (props) => {
    return (
        <Fragment>
            <div className={sup.jobdescription}>
                <p><i>{props.message}</i></p>
            </div>
        </Fragment>
    )
}

export default Support;