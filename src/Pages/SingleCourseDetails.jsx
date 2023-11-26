import { Breadcrumbs } from "@material-tailwind/react";
import PageTitle from "../Components/PageTitle/PageTitle";
import RattingComponent from "../Components/Shared/Ratting";
import { IoIosArrowDropright } from "react-icons/io";
import { IoArrowRedoCircle, IoTimeOutline } from "react-icons/io5";
import { SiLevelsdotfyi } from "react-icons/si";
import { LiaLanguageSolid } from "react-icons/lia";
import { TbFileCertificate } from "react-icons/tb";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { LabelMain } from "../Components/Shared/Labels";
import { FaDollarSign, FaUserFriends, FaSwatchbook } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { ButtonLoading } from "../Components/Shared/Buttons";

const SingleCourseDetails = () => {
  return (
    <div>
      <div>
        <PageTitle>Course Details</PageTitle>
      </div>
      <div className="max-w-[1280px] mx-auto px-5 lg:px-10 py-5">
        <Breadcrumbs className="p-3">
          <p>Course</p>
          <p>Development</p>
        </Breadcrumbs>

        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-8">
            <div className="head-content space-y-3 mt-3 bg-section-bg p-3">
              <h1 className="text-3xl text-color-black">
                Title: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Modi, vitae!
              </h1>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <div className="flex gap-3">
                    <div className="h-12 w-12 bg-color-primary rounded-full"></div>
                    <div>
                      <h1>Created By:</h1>
                      <p>Rashed</p>
                    </div>
                  </div>
                </div>

                {/* Ratting */}
                <div className="flex gap-2 items-center justify-center">
                  <div className="h-12 text-xl flex justify-center items-center">
                    <RattingComponent className="flex justify-center items-center"></RattingComponent>
                  </div>
                  <div className="h-12 flex justify-center items-center">
                    <span className="text-color-gray -translate-y-[2px]">
                      (Total 30 Ratting)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="body-content">
              <div className="h-[60vh] w-full overflow-hidden">
                <img
                  className="h-[60vh] w-full object-cover"
                  src="https://cdn.pixabay.com/photo/2023/11/16/08/44/school-8391795_1280.jpg"
                  alt=""
                />
              </div>
              <div>
                <Tabs value={1} className="mt-10 ">
                  <div className="r bg-gray-200 p-2 rounded-lg">
                    <TabsHeader className="flex gap-3 justify-between items-center">
                      <Tab key={1} value={1}>
                        Overview
                      </Tab>

                      <Tab key={2} value={2}>
                        Curriculums
                      </Tab>

                      <Tab key={3} value={3}>
                        Instructor
                      </Tab>

                      <Tab key={4} value={4}>
                        Review
                      </Tab>
                    </TabsHeader>
                  </div>

                  <TabsBody>
                    <TabPanel key={1} value={1}>
                      <div>
                        <h1 className="text-2xl text-color-black my-5">
                          Overview
                        </h1>
                        {/*Course Description */}
                        <div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Enim, culpa. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Sint animi eaque
                            delectus reprehenderit libero, vel iste asperiores
                            rerum natus debitis.
                            <br />
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptate asperiores neque excepturi corrupti
                            ducimus perspiciatis repellat sapiente nam
                            accusamus, exercitationem expedita voluptas unde
                            similique explicabo soluta molestias non.
                          </p>
                        </div>

                        {/* Who Can do this course */}
                        <div>
                          <h2 className="text-2xl text-color-black mt-8">
                            Who Can Do This Course:
                          </h2>

                          <ul className="mt-3 space-y-2">
                            <li className="flex gap-2 items-center">
                              <span className="text-color-primary text-2xl -translate-y-[1px]">
                                <IoIosArrowDropright></IoIosArrowDropright>
                              </span>
                              <h3 className="text-color-gray truncate ...">
                                This course is for those who want to launch a
                                Freelance Web Design career.
                              </h3>
                            </li>
                            <li className="flex gap-2 items-center">
                              <span className="text-color-primary text-2xl -translate-y-[1px]">
                                <IoIosArrowDropright></IoIosArrowDropright>
                              </span>
                              <h3 className="text-color-gray truncate ...">
                                Those who are looking to reboot their work life
                                and try a new profession that is fun, rewarding
                                and highly in-demand.
                              </h3>
                            </li>
                            <li className="flex gap-2 items-center">
                              <span className="text-color-primary text-2xl -translate-y-[1px]">
                                <IoIosArrowDropright></IoIosArrowDropright>
                              </span>
                              <h3 className="text-color-gray truncate ...">
                                Explore advanced techniques in data analysis and
                                machine learning with hands-on projects.
                              </h3>
                            </li>

                            <li className="flex gap-2 items-center">
                              <span className="text-color-primary text-2xl -translate-y-[1px]">
                                <IoIosArrowDropright></IoIosArrowDropright>
                              </span>
                              <h3 className="text-color-gray truncate ...">
                                Gain practical knowledge and skills in digital
                                marketing strategies to boost online presence
                                and engagement.
                              </h3>
                            </li>

                            <li className="flex gap-2 items-center">
                              <span className="text-color-primary text-2xl -translate-y-[1px]">
                                <IoIosArrowDropright></IoIosArrowDropright>
                              </span>
                              <h3 className="text-color-gray truncate ...">
                                Learn effective communication and leadership
                                skills for personal and professional growth.
                              </h3>
                            </li>
                          </ul>
                        </div>

                        {/* Course Requirements */}
                        <div>
                          <h1 className="text-2xl text-color-black mt-8">
                            Course Requirements
                          </h1>
                          <div>
                            <ul className="mt-3 space-y-2">
                              <li className="flex gap-2 items-center">
                                <span className="text-color-primary text-2xl -translate-y-[1px]">
                                  <IoArrowRedoCircle></IoArrowRedoCircle>
                                </span>
                                <h3 className="text-color-gray truncate ...">
                                  Access to a computer with internet
                                  connectivity.
                                </h3>
                              </li>

                              <li className="flex gap-2 items-center">
                                <span className="text-color-primary text-2xl -translate-y-[1px]">
                                  <IoArrowRedoCircle></IoArrowRedoCircle>
                                </span>
                                <h3 className="text-color-gray truncate ...">
                                  Basic understanding of HTML and CSS.
                                </h3>
                              </li>

                              <li className="flex gap-2 items-center">
                                <span className="text-color-primary text-2xl -translate-y-[1px]">
                                  <IoArrowRedoCircle></IoArrowRedoCircle>
                                </span>
                                <h3 className="text-color-gray truncate ...">
                                  Familiarity with graphic design software
                                  (e.g., Adobe Photoshop).
                                </h3>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel key={2} value={2}>
                      <h1>Curriculums</h1>
                    </TabPanel>
                    <TabPanel key={3} value={3}>
                      <h1>Instructor</h1>
                    </TabPanel>
                    <TabPanel key={4} value={4}>
                      <h1>Reviews</h1>
                    </TabPanel>
                  </TabsBody>
                </Tabs>
              </div>
            </div>
          </div>

          {/* Cart Container */}
          <div className="col-span-4 bg-section-bg p-3 mt-3">
            <div className="card-container bg-color-white shadow-lg rounded-lg">
              {/* Cart */}
              <div className="cart p-3 rounded-lg">
                {/* Cart Head */}
                <div className="cart-head px-3">
                  <div className="py-5  flex justify-between">
                    <h1 className="text-2xl">
                      $12.00{" "}
                      <span className="text-base text-color-gray line-through">
                        26$
                      </span>
                    </h1>

                    <div>
                      <LabelMain>56% OFF</LabelMain>
                    </div>
                  </div>
                </div>
                <hr />
                {/* Course Data */}
                <div className="mt-3">
                  <ul className="text-color-gray space-y-2">
                    <li className="flex justify-between">
                      <div className="flex gap-2 justify-center items-center">
                        <div className="icon text-2xl">
                          <IoTimeOutline></IoTimeOutline>
                        </div>
                        <div className="details">Course Duration</div>
                      </div>

                      <div className="data">6 Month</div>
                    </li>
                    <li className="flex justify-between">
                      <div className="flex gap-2 justify-center items-center">
                        <div className="icon text-lg">
                          <SiLevelsdotfyi></SiLevelsdotfyi>
                        </div>
                        <div className="details">Course Level</div>
                      </div>

                      <div className="data">Beginner</div>
                    </li>
                    <li className="flex justify-between">
                      <div className="flex gap-2 justify-center items-center">
                        <div className="icon text-2xl">
                          <FaUserFriends />
                        </div>
                        <div className="details">Students Enrolled</div>
                      </div>

                      <div className="data">60</div>
                    </li>
                    <li className="flex justify-between">
                      <div className="flex gap-2 justify-center items-center">
                        <div className="icon text-2xl">
                          <LiaLanguageSolid />
                        </div>
                        <div className="details">Language</div>
                      </div>

                      <div className="data">English</div>
                    </li>
                  </ul>
                </div>

                {/* cart footer */}
                <div className="mt-3">
                  <ButtonLoading isLoading={false}>Buy Now</ButtonLoading>
                </div>
              </div>
              <hr className="my-3" />
              {/* This course includes: */}
              <div className="mt-5 px-3">
                <h1 className="text-color-black text-xl">
                  This course includes:
                </h1>
                <ul className="py-3 space-y-2">
                  <li className="flex gap-2 items-center">
                    <span className="text-color-primary text-2xl -translate-y-[1px]">
                      <IoTimeOutline></IoTimeOutline>
                    </span>
                    <h3 className="text-color-gray truncate ...">
                      Lifetime access
                    </h3>
                  </li>
                  <li className="flex gap-2 items-center">
                    <span className="text-color-primary text-2xl -translate-y-[1px]">
                      <FaDollarSign></FaDollarSign>
                    </span>
                    <h3 className="text-color-gray truncate ...">
                      30-days money-back guarantee
                    </h3>
                  </li>
                  <li className="flex gap-2 items-center">
                    <span className="text-color-primary text-2xl -translate-y-[1px]">
                      <FaSwatchbook></FaSwatchbook>
                    </span>
                    <h3 className="text-color-gray truncate ...">
                      Free exercises file & downloadable resources
                    </h3>
                  </li>
                  <li className="flex gap-2 items-center">
                    <span className="text-color-primary text-2xl -translate-y-[1px]">
                      <TbFileCertificate></TbFileCertificate>
                    </span>
                    <h3 className="text-color-gray truncate ...">
                      Shareable certificate of completion
                    </h3>
                  </li>
                  <li className="flex gap-2 items-center">
                    <span className="text-color-primary text-2xl -translate-y-[1px]">
                      <AiOutlineGlobal></AiOutlineGlobal>
                    </span>
                    <h3 className="text-color-gray truncate ...">
                      100% online course
                    </h3>
                  </li>
                </ul>
              </div>
              <hr className="py-3" />
              {/* Share this Course */}
              <div className="my-5">
                <h1>Share this course:</h1>
                <div>
                    Social Icons
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourseDetails;