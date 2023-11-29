import { useEffect, useState } from "react";
import CourseCardExtra from "../Components/Card/CourseCardExtra";
import PageTitle from "../Components/PageTitle/PageTitle";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useCourseData } from "../Hooks/useCourseData";
import LoadingScreen from "../Components/Shared/LoadingScreen";

const AllClass = () => {
  // Getting Course Data
  const axiosSecure = useAxiosSecure();
  axiosSecure.get("/api/get/courses");

  const [courseDataCount, setCourseDataCount] = useState(null);
  const [courseData, setCourseData] = useState();

  // Getting Approved Course Data
  const { allCourseData } = useCourseData(1, 10);

  // Function to filter and set approved course data

  // Use useEffect to run the function after the initial render
  useEffect(() => {
    const getApprovedCourseData = () => {
      if (allCourseData) {
        const courseDataFiltered = allCourseData.filter(
          (item) => item.isApproved === "Approved"
        );
        setCourseData(courseDataFiltered);
        setCourseDataCount(courseDataFiltered.length);
      }
    };
    getApprovedCourseData();
  }, [allCourseData]);
  return (
    <div>
      <PageTitle>All Classes</PageTitle>
      <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
        {courseData ? (
          <div className="grid grid-cols-3 gap-5 mb-16">
            {courseData.map((singleCourse) => (
              <div key={singleCourse?._id}>
                <CourseCardExtra singleCourse={singleCourse}></CourseCardExtra>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center w-screen h-[90vh]">
            <LoadingScreen></LoadingScreen>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllClass;
