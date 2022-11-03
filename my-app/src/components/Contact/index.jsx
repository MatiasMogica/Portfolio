import emailjs from '@emailjs/browser';
import React from 'react';
import Swal from "sweetalert2";

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        if(e.target === ""){
            Swal.fire({
                title: "Please complete the required fields to send the email",
                showDenyButton: false,
                showCancelButton: false,
                confirmButtonText: "Ok",
                icon: "info",
            })
        }else {

            emailjs.sendForm('service_1z0q1en', 'template_n53210l', e.target, 'LEoT-C-KnI1K1Z2TL')
                .then((result) => {
                    Swal.fire({
                        title: 'The email was sent correctly, it will be answered soon',
                        showDenyButton: false,
                        showCancelButton: false,
                        confirmButtonText: "Ok",
                        icon: "success",
                    })
                    console.log(e.target.name.value)
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
                e.target.reset()
            }
        }

    return(
        <div>
            <div className="containerContact">
                <div className="formContact">
                    <form onSubmit={sendEmail} >
                        <div className="l__form__input-field">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="l__form__input-field">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="field">
                            <textarea className="form-txtArea" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="field">
                            <input type="submit" className="Login_btnLoginModal__1R93O btnContact" value="Send Message"></input>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
