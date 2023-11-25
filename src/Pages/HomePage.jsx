import { Helmet } from "react-helmet";
import Banner from "../Components/Banner/Banner";
import Partners from "../Components/Partners/Partners";
import FeatureSlider from "../Components/FeatureSlider/FeatureSlider";
import WebsiteStats from "../Components/WebsiteStats/WebsiteStats";
import BecomeInstructor from "../Components/BecomeInstructor/BecomeInstructor";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>E-Tutor | Home</title>
      </Helmet>
      <div>
        <header className="bg-gradient-to-t from-section-bg via-transparent to-transparent">
          <section className="max-w-[1280px] mx-auto px-5 lg:px-10">
            <Banner></Banner>
          </section>
        </header>
        <section className="max-w-[1280px] mx-auto px-5 lg:px-10">
          <Partners></Partners>
        </section>
        <div className="max-w-[1280px] mx-auto px-5 lg:px-10 ">
          <FeatureSlider></FeatureSlider>
        </div>
        <section className="bg-section-bg">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-10 ">
            <BecomeInstructor></BecomeInstructor>
          </div>
        </section>
        <section className="py-16">
          <WebsiteStats></WebsiteStats>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
