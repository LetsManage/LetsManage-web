import React from "react";

import ContactForm from "../../components/contact-form";
import ContactInfo from "../../components/contact-info";
import ContactData from "../../data/contact.json";


const ContactContainer = () => {
    return (
        <section className="contact-section section-py">
            <div className="container">
                <div className="row mb-n7">
                    <div className="col-xl-6 col-lg-6 mb-7">
                        <div className="contact-title-section">
                            <h3 className="title">Get in touch</h3>
                            <hr />
                            {/* <p>
                            Please fill in the form and our representative will get back to you.
                                <br className="d-none d-xl-block" />
                                Extensive experience in building web & mobile development applications.
                            </p> */}
                        </div>

                        <ContactForm />
                    </div>

                    <div className="col-xl-5 col-lg-6 mb-7 offset-xl-1">

                    <div className="row">
                            <img src= {`${process.env.PUBLIC_URL}/images/contact/1.png`} alt="imageofdata" className="imageshedow" />
                        </div>
                        <div className="row">
                            <div className="contact-address text-center">
                                {ContactData &&
                                    ContactData.map((single, key) => {
                                        return (
                                            <ContactInfo key={key} data={single} />
                                        );
                                    })}
                            </div>
                        </div>   
                       

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactContainer;
