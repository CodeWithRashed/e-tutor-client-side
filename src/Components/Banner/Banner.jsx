import { ButtonPrimary } from "../Shared/Buttons";
import heroBg from "../../assets/hero-banner.png"

const Banner = () => {
  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)] px-9">
      <div className="items-container  grid grid-cols-2">
        <div className="text-container flex flex-col justify-center items-start gap-5">
          <h1 className="text-6xl text-color-black font-medium">
            Learn with expert anytime anywhere
          </h1>
          <p className="text-color-gray">
            Our mission is to help people to find the best course <br /> online and
            learn with expert anytime, anywhere.
          </p>
          <ButtonPrimary>Create an account</ButtonPrimary>
        </div>
        <div className="image-container flex justify-center items-center">
          <img src={heroBg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
