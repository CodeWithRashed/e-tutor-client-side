import { useEffect, useState } from "react";
import CourseCardExtra from "../Components/Card/CourseCardExtra";
import PageTitle from "../Components/PageTitle/PageTitle";

import { useCourseData } from "../Hooks/useCourseData";
import LoadingScreen from "../Components/Shared/LoadingScreen";
import Pagination from "../Components/Shared/Pagination";
import { useCourseCount } from "../Hooks/useCourseCount";

const AllClass = () => {
  const [activePage, setActivePage] = useState(1);
  const perPageItems = 3;

  const [courseDataCount, setCourseDataCount] = useState(6);
  const [courseData, setCourseData] = useState();

  // Getting Approved Course Data
  const { allCourseData, isLoading } = useCourseData(activePage, perPageItems);
  // Getting Course Data Count

  const { courseCount } = useCourseCount();
  useEffect(() => {
    const getApprovedCourseData = () => {
      if (allCourseData) {
        setCourseData(allCourseData);

        if (courseCount) {
          const courseCountFiltered = courseCount.filter(
            (item) => item.isApproved == "Approved"
          );
          setCourseDataCount(courseCountFiltered.length);
        }
      }
    };
    getApprovedCourseData();
  }, [allCourseData, courseCount]);

  return (
    <div>
      <PageTitle>All Classes</PageTitle>
      <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
        {courseData ? (
          <div>
            {isLoading ? (
              <LoadingScreen></LoadingScreen>
            ) : (
              <div className="grid grid-cols-3 gap-5 mb-16">
                {courseData.map((singleCourse) => (
                  <div key={singleCourse?._id}>
                    <CourseCardExtra
                      singleCourse={singleCourse}
                    ></CourseCardExtra>
                  </div>
                ))}
              </div>
            )}

            <div className="w-full my-10 flex justify-center">
              <Pagination
                perPageItems={perPageItems}
                courseDataCount={courseDataCount}
                setActivePage={setActivePage}
                activePage={activePage}
              >
                {" "}
              </Pagination>
            </div>
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
