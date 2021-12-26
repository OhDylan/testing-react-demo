import React, { useState } from 'react';
import "./SubscribeForm.css";

const SubscribeForm = () => {

    const [isDisabled, setIsDisabled] = useState(true);
    const [email, setEmail] = useState("");

    function handleChange(e){
        setEmail(e.target.value);
        setIsDisabled(e.target.value === "");
    }

    return (
        <div className="container">
            <h1>Subscribe To Our Newsletter</h1>
            <form className="form">
                <label for="email">Email Address</label>
                <input onChange={handleChange} type="email" id="email" name="email" placeholder="Email Address" value={email} />
                <input type="checkbox" name="agreement_checkbox" id="agreement_checkbox" />
                <label for="agreement_checkbox">I agree to disagree whatever the terms and conditions are.</label>
                <button type="submit" className="button" disabled={isDisabled} >SUBSCRIBE</button>
            </form>
        </div>
    );
};

export default SubscribeForm;