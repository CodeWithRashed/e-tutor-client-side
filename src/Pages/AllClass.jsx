import { useState } from "react";
import CourseCardExtra from "../Components/Card/CourseCardExtra";
import PageTitle from "../Components/PageTitle/PageTitle";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllClass = () => {
  // Getting Course Data
  const axiosSecure = useAxiosSecure();
  axiosSecure.get("/api/get/courses");
  const [courseData, setCourseData] = useState(null);
  const [courseDataCount, setCourseDataCount] = useState(null);
  const { isLoading, error, refetch } = useQuery({
    queryKey: ["courseData"],
    queryFn: async () => {
      try {
        const responseUserCount = await axiosSecure.get(`/api/get/courses`);
        const response = await axiosSecure.get(
          `/api/get/courses`
          // `/api/get/users?page=${activePage}&pageSize=2`
        );
        const courseDataRes = response.data;
        const courseDataCountRes = responseUserCount.data;
        setCourseData(courseDataRes);
        setCourseDataCount(courseDataCountRes.length);
        return courseDataRes;
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw error; // Rethrow the error to be caught by React Query
      }
    },
  });


  return (
    <div>
      <PageTitle>All Classes</PageTitle>
      <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
        {courseData && (
          <div  className="grid grid-cols-3 gap-5 mb-16" >
            {
              courseData.map(singleCourse => (
                <div key={singleCourse?._id}>

                  <CourseCardExtra singleCourse={singleCourse} ></CourseCardExtra>
                </div>
              ))
            }
           
          </div>
        )}
      </div>
    </div>
  );
};

export default AllClass;
