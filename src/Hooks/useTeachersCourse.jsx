import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


export const useTeachersCourse = (activeUserId) => {
const axiosPublic = useAxiosPublic()
  const {
    isLoading,
    error,
    refetch,
    data: teachersCourseData,
  } = useQuery({
    queryKey: ["teacherCourseData", activeUserId],
    queryFn: async () => {
      try {
        const response = await axiosPublic.get(
          `/api/get/teachersCourse?teacher=${activeUserId}`
        );
        const databaseCourseData = response.data;

        return databaseCourseData;
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
      }
    },
  });

  return { isLoading, error, refetch, teachersCourseData };
};
