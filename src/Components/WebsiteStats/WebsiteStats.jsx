import { ButtonPrimary, ButtonSecondary } from "../Shared/Buttons"

const WebsiteStats = () => {
  return (
    <div className="grid lg:grid-cols-2 max-w-[1280px] mx-auto px-5 lg:px-10">
      <div className="space-y-3">
      <h1 className="text-4xl">Embark on a Journey of Professional Growth with Us!</h1>
      <div className="w-88 gap-3 flex">
        <ButtonPrimary>Join The Family</ButtonPrimary>
        <ButtonSecondary>Browse All Courses</ButtonSecondary>
      </div>
      </div>
      <div className="flex gap-5 justify-center items-center" >
        <div >
            <h1 className="text-3xl font-bold text-color-primary">100+</h1>
            <h3 className="text-color-gray">Online Courses</h3>
        </div>
        <div>
            <h1 className="text-3xl font-bold text-color-primary">1k</h1>
            <h3 className="text-color-gray">Certified Instructors</h3>
        </div>
        <div>
            <h1 className="text-3xl font-bold text-color-primary">5k</h1>
            <h3 className="text-color-gray">Students</h3>
        </div>
      </div>
    </div>
  )
}

export default WebsiteStats
