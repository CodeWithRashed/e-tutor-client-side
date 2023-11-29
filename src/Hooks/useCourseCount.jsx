import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

export const useCourseCount = () => {
  const axiosPublic = useAxiosPublic();
  const {
    isLoading,
    error,
    refetch,
    data: courseCount,
  } = useQuery({
    queryKey: ["databaseCourseCount"],
    queryFn: async () => {
      try {
        const response = await axiosPublic.get(`/api/get/courseCount`);
        const databaseCourseCount = response.data;

        return databaseCourseCount;
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
      }
    },
  });

  return { isLoading, error, refetch, courseCount };
};
