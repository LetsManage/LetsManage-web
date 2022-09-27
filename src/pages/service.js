import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import BrandContainer from "../containers/global/brand/index";
import FunFactContainer from "../containers/global/funfact";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";
import Resturant from "../components/Servicelist/Resturant";


const ServicePage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Lets Manage India" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Our Services"
                        excerpt="We at Lets Manage India Private Limited (CIN NO – U74999PN2021PTC205037) are here to help your business to achieve your goals. We support you to grow your business in the market very well. We are whether you need marketing, promotions, digital marketing, social media handler, designer,website, application, accounting services, business registration or any other services. We are here to help you everywhere in your business needs."
                        image="./images/service/2.png"
                    />
                    <BrandContainer />
                    <Resturant/>
                    <FunFactContainer classOption="mt-5 mt-lg-5 mt-xl-10" />
                    <NewsletterArea />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default ServicePage;
