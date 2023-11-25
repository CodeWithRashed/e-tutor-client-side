import CourseCardExtra from "../Components/Card/CourseCardExtra";
import PageTitle from "../Components/PageTitle/PageTitle";

const AllClass = () => {
  return (
    <div>
      <PageTitle>All Classes</PageTitle>
      <div className="max-w-[1280px] mx-auto px-5 lg:px-10">
        <CourseCardExtra></CourseCardExtra>
        <CourseCardExtra></CourseCardExtra>
      </div>
    </div>
  );
};

export default AllClass;
