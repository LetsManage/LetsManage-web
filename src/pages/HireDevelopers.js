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
import Resturant from "../components/HireDeveloper/Resturant1";


const HireDevelopers = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Lets Manage India" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Hire Dedicated Developer"
                        excerpt="Hire top Indian dedicated developers with good communication skills for Hourly or Monthly Basis. Quytech provides expert developers to all the startups, enterprises and SMEs."
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

export default HireDevelopers;
