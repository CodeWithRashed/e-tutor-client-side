import { useContext, useEffect, useState } from "react";
import TeacherClassCard from "../../Components/Card/TeacherClassCard";
import { useTeachersCourse } from "../../Hooks/useTeachersCourse";
import { GlobalDataContext } from "../../ContextApi/DataContext";


const ManageMyClass = () => {
  const { activeUserId, activeUser } = useContext(GlobalDataContext);
  const { teachersCourseData } = useTeachersCourse(activeUserId);
  const [filteredCourseData, setFilteredCourseData] = useState(null);

  useEffect(() => {
    if (teachersCourseData) {
      const filteredCourses = teachersCourseData.filter(
        (course) => course.teacher.email === activeUser?.email
      );
      console.log("filter", filteredCourses);
      setFilteredCourseData(filteredCourses);
    }
  }, [teachersCourseData, activeUser]);

  return (
    <div>
      {!filteredCourseData ? (
        <div>Loading</div>
      ) : (
        <div className="grid grid-cols-3 gap-5 p-5">
          {filteredCourseData.map((singleCourseData) => (
            <div key={singleCourseData._id}>
              <TeacherClassCard
                singleCourseData={singleCourseData}
              ></TeacherClassCard>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageMyClass;
