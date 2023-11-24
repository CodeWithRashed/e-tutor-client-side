import { Helmet } from "react-helmet"
import Banner from "../Components/Banner/Banner"

const HomePage = () => {
   
  return (
    <div >
       <Helmet>
        <title>E-Tutor | Home</title>
      </Helmet>
    <div>
      <Banner></Banner>
    </div>
    </div>
  )
}

export default HomePage
