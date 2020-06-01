import React from 'react';
import btn from './button.module.css';
import { Link } from 'react-router-dom';

const Button = (props) => {
    return (
        <Link to={props.link}>
            <button type={props.type} className={btn[props.className]} onClick={props.click}>
                {props.name}
            </button>
        </Link>

    )
}

export default Button;