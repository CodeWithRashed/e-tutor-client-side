import Marquee from "react-fast-marquee";
import brandGoogle from '../../assets/brand-google.png'
import brandYoutube from '../../assets/brand-youtube.png'
import brandLenovo from '../../assets/brand-lenovo.png'
import brandVerizon from '../../assets/brand-verizon.png'
import brandNetflix from '../../assets/brand-netflix.png'
import brandMicrosoft from '../../assets/brand-microsoft.png'
import brandSlack from '../../assets/brand-slack.png'
import brandLexmark from '../../assets/brand-lexmark.png'
const Partners = () => {
  return (
    <div >
      <p className="w-full mb-4 my-8 text-center text-base font-semibold uppercase text-gray-400">
        Our Partners
      </p>

      <h1></h1>
      <Marquee  pauseOnHover={true}>
        <div className="flex">
          <img src={brandGoogle} alt="brandGoogle" />
          <img src={brandYoutube} alt="brandYoutube" />
          <img src={brandLenovo} alt="brandLenovo" />
          <img src={brandVerizon} alt="brandVerizon" />
          <img src={brandNetflix} alt="brandNetflix" />
          <img src={brandMicrosoft} alt="brandMicrosoft" />
          <img src={brandSlack} alt="brandSlack" />
          <img src={brandLexmark} alt="brandLexmark" />
        </div>
      </Marquee>
    </div>
  );
};

export default Partners;
