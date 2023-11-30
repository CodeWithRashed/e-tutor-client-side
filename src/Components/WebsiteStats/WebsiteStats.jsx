import { Link } from "react-router-dom"
import { ButtonPrimary, ButtonSecondary } from "../Shared/Buttons"
import { useContext, useEffect, useState } from "react";
import { GlobalDataContext } from "../../ContextApi/DataContext";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const WebsiteStats = () => {
  //GLOBAL DATA STATES AND HOOKS
const { activeUser } = useContext(GlobalDataContext);
const axiosSecure = useAxiosSecure();

//LOCAL FILE STATES
const [totalTeacher, setTotalTeacher] = useState(0)
const [totalUser, setTotalUser] = useState(0)
const [courseCount, setCourseCount] = useState(0)

useEffect(  ()=>{
  const getTeacherCount = async () => {
    const teacherCountRes  = await axiosSecure.get("/api/get/users?isTeacherRequest=Accepted")
    setTotalTeacher(teacherCountRes.data.length)
  }
  const getUserCount =  async () =>{
  const userCountRes  = await axiosSecure.get("/api/get/usersCount")
    setTotalUser(userCountRes.data.length)
}
  const getCourseCount =  async () =>{
  const courseCountRes  = await axiosSecure.get("/api/get/courseCount")
  setCourseCount(courseCountRes.data.length)
}
  getTeacherCount()
  getUserCount()
  getCourseCount()
},[axiosSecure])

  return (
    <div className="grid lg:grid-cols-2 max-w-[1280px] mx-auto px-5 lg:px-10">
      <div className="space-y-3">
      <h1 className="text-4xl">Embark on a Journey of Professional Growth with Us!</h1>
      <div className="w-88 gap-3 flex">
        <Link to="/login">
        <ButtonPrimary>Join The Family</ButtonPrimary>
        </Link>
        <Link to="/courses">
        <ButtonSecondary>Browse All Courses</ButtonSecondary>
        </Link>
      </div>
      </div>
      <div className="flex gap-5 justify-center items-center" >
        <div >
            <h1 className="text-3xl font-bold text-color-primary">{courseCount}+</h1>
            <h3 className="text-color-gray">Online Courses</h3>
        </div>
        <div>
            <h1 className="text-3xl font-bold text-color-primary">{totalTeacher}</h1>
            <h3 className="text-color-gray">Certified Instructors</h3>
        </div>
        <div>
            <h1 className="text-3xl font-bold text-color-primary">{totalUser - totalTeacher}</h1>
            <h3 className="text-color-gray">Students</h3>
        </div>
      </div>
    </div>
  )
}

export default WebsiteStats
