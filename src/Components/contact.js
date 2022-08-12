import React from "react";

const Contact = ({data}) => {
    const {firstName, lastName, phone, gender} = data;

    return (
        <div className="contact">
           <div className="name">{`${firstName} ${lastName}`}</div>
           <span className="phone">{phone}</span>
           <span className="gender">{gender}</span>
        </div>
    )
}

export default Contact;