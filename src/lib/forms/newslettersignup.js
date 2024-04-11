"use client";
import React, { useState } from 'react';

export default function SubscribePage() {
    const [email, setEmail] = useState(''); // Step 2: Initialize state variable for email

    // Step 3: Create onChange handler
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div id="mc_embed_shell">
            <div id="mc_embed_signup">
                <form action="https://progressionstudios.us1.list-manage.com/subscribe/post?u=1a06aa3bca8613232881e8a6e&amp;id=2f5a556941&amp;f_id=0068f9e5f0"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                    noValidate>
                    <div id="mc_embed_signup_scroll">
                        <div className="mc-field-group">
                            <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" placeHolder="Enter your email address"
                                required value={email} onChange={handleEmailChange} />
                        </div>
                        <div id="mce-responses" className="clear foot">
                            <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                            <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
                        </div>
                        <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                            <input type="text" name="b_1a06aa3bca8613232881e8a6e_2f5a556941" tabIndex="-1" value="" />
                        </div>
                        <div className="optionalParent">
                            <div className="clear foot">
                                <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Go" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
