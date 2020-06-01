import React, { Fragment } from 'react';
import hero from './home.module.css';
import Button from '../buttons/Buttons'

const Hero = () => {
    return (
        <Fragment>
            <div className={hero.background}>
                <div className={hero.overlay}>
                    <Heading
                        heading='Bookr'
                        subheading='Fastest way to book a conference /meeting room at a very convenient time'
                    />
                </div>
            </div>
        </Fragment>
    )
}

const Heading = (props) => {
    return (
        <Fragment>
            <div className='container tp-30'>
                <div className='row'>
                    <section className='col-md-12 col-lg-7'>
                        <div className='heading'>
                            <h3>{props.heading}</h3>
                            <p>{props.subheading}</p>
                        </div>
                        <Button
                            name='Book room'
                            className='bookroom'
                            link='/dashboard/meetingrooms'
                        />
                    </section>
                </div>
            </div>

        </Fragment>
    )
}

export default Hero