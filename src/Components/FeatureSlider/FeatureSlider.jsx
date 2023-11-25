import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CourseCard from "../Card/CourseCard";
import SectionTitle from "../SectionTitle/SectionTitle";

const FeatureSlider = () => {
  return (
    <div>
        <SectionTitle title="Popular Courses" subtitle="Courses you may like!"></SectionTitle>
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
        className="w-full h-[75vh]"
      >
       
        <SwiperSlide className="w-full">
         <CourseCard></CourseCard>
        </SwiperSlide>
        <SwiperSlide className="w-full">
         <CourseCard></CourseCard>
        </SwiperSlide>
        <SwiperSlide className="w-full">
         <CourseCard></CourseCard>
        </SwiperSlide>
        <SwiperSlide className="w-full">
         <CourseCard></CourseCard>
        </SwiperSlide>
        <SwiperSlide className="w-full">
         <CourseCard></CourseCard>
        </SwiperSlide>
        <SwiperSlide className="w-full">
         <CourseCard></CourseCard>
        </SwiperSlide>

        <SwiperSlide className="w-full">
         <CourseCard></CourseCard>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FeatureSlider;
