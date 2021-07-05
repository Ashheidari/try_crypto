import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/TryHeader.js";
import Pricing from "components/pricing/TryCryptoPlans.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/TryCryptoFooter";
import FAQ from "components/faqs/SingleCol.js";

const PricingPage = ({roundedHeaderButton = true}) => {
  return (
    <AnimationRevealPage>
      <Header roundedHeaderButton = {roundedHeaderButton} />
      <Pricing />
      <Testimonial
        heading="Our Paying Customers"
      />
      <FAQ />
      <Footer/>
    </AnimationRevealPage>
  );
};

export default PricingPage;