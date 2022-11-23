import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';


export const ContactForm = () => {
    let navigate = useNavigate();
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");
    const [visible, setVisible] = useState(true);
    const [data, setData] = useState({
        name: "",
        email: "",
    })

    const initialState = {
        name: "",
        email: "",
    };

    const clearState = () => {
        setData({ ...initialState });
    };

    useEffect(() => {
        if (data.name.length < 4) {
            setMessage("Your name must have at least 4 characters");
            setBtnDisabled(true);
        } else {
            setMessage(null);
            setBtnDisabled(false);
        }
    }, [data]);

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Your data:" + data.name + " " + data.email);
        localStorage.setItem("user", JSON.stringify(data));
        clearState();
        setTimeout(() => {
            navigate('/home')
        }, 3000);
        setVisible(false)
    };

    return (
        <>
            <div>
                <h1>Das formulaire</h1>
                <p>Please, fill the next gaps</p>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your name"
                    value={data.name}
                    onChange={handleInputChange}
                    name="name"
                />
                <br />
                <input
                    type="email"
                    placeholder="Your email"
                    value={data.email}
                    onChange={handleInputChange}
                    name="email"
                />
                <br />
                <button type="submit" disabled={btnDisabled}>
                    Send
                </button>
            </form>
            <p>{visible ? message : 'Redirecting to [Home]'}</p>
        </>
    );
};

export default ContactForm;