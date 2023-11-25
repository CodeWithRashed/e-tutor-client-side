import { Helmet } from "react-helmet"
import Banner from "../Components/Banner/Banner"
import Partners from "../Components/Partners/Partners"

const HomePage = () => {
   
  return (
    <div >
       <Helmet>
        <title>E-Tutor | Home</title>
      </Helmet>
    <div>
      <Banner></Banner>
      <Partners></Partners>
    </div>
    </div>
  )
}

export default HomePage
