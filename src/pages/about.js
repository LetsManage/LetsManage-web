import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import AboutContainer from "../containers/about";
import BrandContainer from "../containers/global/brand/index";
import FunFactContainer from "../containers/global/funfact";
import IconBoxContainer from "../containers/global/icon-box";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import TestimonialReverse from "../containers/global/testimonial-reverse";
import ServiceListContainer from "../containers/service/service-list";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const AboutPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Lets manage India" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="About us"
                        excerpt="We provide all the services under one roof for your business. Simplifying this process and delivering you a complete solution for your need in just one call. From Registering your business,"
                        image="./images/banner/1.png"
                    />
                    <IconBoxContainer classOption="section-pt" />
                    <BrandContainer />
                    <AboutContainer />
                    <ServiceListContainer />
                    <TestimonialReverse />
                    <FunFactContainer classOption="mt-0 mt-lg-0" />
                    <NewsletterArea />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default AboutPage;
