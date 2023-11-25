import { Helmet } from "react-helmet"
import Banner from "../Components/Banner/Banner"
import Partners from "../Components/Partners/Partners"
import FeatureSlider from "../Components/FeatureSlider/FeatureSlider"

const HomePage = () => {
   
  return (
    <div >
       <Helmet>
        <title>E-Tutor | Home</title>
      </Helmet>
    <div>
      <Banner></Banner>
      <Partners></Partners>
      <div className="w-full">
      <FeatureSlider></FeatureSlider>
      </div>
    </div>
    </div>
  )
}

export default HomePage
