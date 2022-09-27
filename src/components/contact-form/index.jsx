import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import Countryautofill from "../dropdown/Countryautofill"

const ContactForm = () => {
    const { register, errors } = useForm({
        mode: "onBlur",
    });
    return (
        <Fragment>
            <form
                id="contactForm"
                className="row"
                action="https://getform.io/f/a362e099-b80c-43a7-81e9-14ca001adc8b"
                method="POST"
            >
                <div className="col-lg-12 col-sm-6 mb-7">
                    <input
                        required=""
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Your Name*"
                        ref={register({ required: "Name is required" })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div className="col-lg-12  col-sm-6 mb-7">
                    <input
                        required
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Your Email*"
                        ref={register({
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "invalid email address",
                            },
                        })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>

                <div className="col-lg-12  col-sm-6 mb-7">
                    <input
                        required
                        type="text"
                        className="form-control"
                        id="number"
                        name="number"
                        placeholder="Mobile Number "
                        ref={register({
                            required: "Mobile Number is required",
                            pattern: {
                                value: "[0-9]",
                                inputmode: "numeric",
                                message: "invalid Number",
                            },
                        })}
                    />
                    {errors.email && <p>{errors.number.message}</p>}
                </div>
                <div className="col-lg-12  col-sm-6 mb-7">
                    <Countryautofill/>
                    {errors.email && <p>{errors.email.message}</p>}
                </div>

                <div className="col-lg-12 mb-9">
                    <textarea
                        className="form-control massage-control"
                        name="message"
                        id="massage"
                        cols="30"
                        rows="4"
                        placeholder="Message"
                        ref={register({
                            required: "Message is required",
                        })}
                    ></textarea>
                    {errors.message && <p>{errors.message.message}</p>}
                </div>
                <div className="col-12">
                    <button
                        id="contactSubmit"
                        type="submit"
                        className="btn btn-dark btn-hover-dark"
                        data-complete-text="Well Done!"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </Fragment>
    );
};

export default ContactForm;
