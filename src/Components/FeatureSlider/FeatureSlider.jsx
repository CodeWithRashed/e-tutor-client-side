import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CourseCard from "../Card/CourseCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import LoadingScreen from "../Shared/LoadingScreen";
import { useCourseData } from "../../Hooks/useCourseData";

const FeatureSlider = () => {
  const { allCourseData, isLoading } = useCourseData(1, 8);
  console.log("FeatureSlider", allCourseData)
  return (
    <div>
        <SectionTitle title="Popular Courses" subtitle="Courses you may like!"></SectionTitle>
        {
          isLoading ? <LoadingScreen></LoadingScreen> : 
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="w-full h-[80vh]"
        style={{
          "--swiper-pagination-color": "#FF6636",
          "--swiper-pagination-bullet-inactive-color": "#FFDDD1",
          "--swiper-pagination-bullet-inactive-opacity": "5px",
          "--swiper-pagination-bullet-size": "12px",
          "--swiper-pagination-bullet-horizontal-gap": "10px"
          
      }}
      >
       {
        allCourseData && <div>
          <div>
{
  allCourseData.map((courseData, index) => (
    <div key={index}>
<SwiperSlide  className="w-full">
        <CourseCard courseData={courseData}></CourseCard>
       </SwiperSlide>
    </div>
  ))
}

          </div>
        </div> 
       }
       
      
      </Swiper>
        }
    </div>
  );
};

export default FeatureSlider;
