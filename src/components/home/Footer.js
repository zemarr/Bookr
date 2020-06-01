import React, { Fragment } from 'react';
import Button from '../buttons/Buttons';



const Footer = () => {
    return (
        <Fragment>
            <div className='footer center-text container-fluid no-mp unlocked section-padding primary-color'>
                <div className='row'>
                    <Leftfooter
                        logoname='Bookr'
                    />
                    <Rightfooter/>
                </div>
            </div>
        </Fragment>
    )
}

const Leftfooter = (props) => {
    return (
        <Fragment>
            <div className='col-lg-6 leftfooter'>
                <FooterLogo
                    logoname={props.logoname}
                    logoclass='footerlogo'
                />
            </div>
        </Fragment>
    )
}

const FooterLogo = (props) => {
    return (
        <Fragment>
            <div className="col-md-4 footerlogo">
                <h5>{props.logoname}</h5>
                <p>2019</p>
            </div>
            <Navs />
            <Social />
        </Fragment>
    )
}

const Navs = () => {
    return (
        <Fragment>
            <section className="col-md-4">
                <ul>
                    <li>
                        <a href='/#'>About Us</a>
                    </li>
                    <li>
                        <a href='/#'>Contact</a>
                    </li>
                    <li>
                        <a href='/#'>Terms & Conditions</a>
                    </li>
                </ul>
            </section>
        </Fragment>
    )
}

const Social = () => {
    return (
        <Fragment>
            <section className="col-md-4">
                <ul>
                    <li>
                        <a href="/#" target="_blank"><i className="fa fa-facebook-f"></i><span>Facebook</span></a>
                    </li>
                    <li>
                        <a href="/#" target="_blank"><i className="fa fa-twitter"></i><span>Twitter</span></a>
                    </li>
                    <li>
                        <a href="/#" target="_blank"><i className="fa fa-instagram"></i><span>Instagram</span></a>
                    </li>
                </ul>
            </section>
        </Fragment>
    )
}

const Rightfooter = () => {
    return (
        <Fragment>
            <div className='col-lg-6 rightfooter'>
                <Subscribe />
                <Contact />
            </div>
        </Fragment>
    )
}

class Subscribe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }

    render() {
        return (
            <div className="col-md-6">
                <form className="col-md-12 contactform" id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">

                    <div className="formgroup">
                        <label htmlFor="exampleInputEmail1">Subscribe to our newsletter</label>
                        <input type="email" className="formcontrol" aria-describedby="emailHelp" placeholder="Email Address" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                    </div>

                    <Button
                        type="submit"
                        className="subscribe"
                        name="OK" 
                        link=""/>
                </form>
            </div>
        );
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }

    handleSubmit(event) {
    }
}

const Contact = () => {
    return (
        <Fragment>
            <div className="col-md-6 contact">
                <p>497 Evergreen Rd. Roseville, CA 95673<br />+44 345 678 903<br />conferenceroom@mail.com</p>
            </div>

        </Fragment>
    )
}


export default Footer;