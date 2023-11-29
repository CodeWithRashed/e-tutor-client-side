import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


export const useCourseData = (activePage, pageSize) => {
const axiosPublic = useAxiosPublic()
  const {
    isLoading,
    error,
    refetch,
    data: allCourseData,
  } = useQuery({
    queryKey: ["databaseCourseData", activePage, pageSize],
    queryFn: async () => {
      try {
        const response = await axiosPublic.get(
          `/api/get/courses?page=${activePage}&pageSize=${pageSize}`
        );
        const databaseCourseData = response.data;

        return databaseCourseData;
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
      }
    },
  });

  return { isLoading, error, refetch, allCourseData };
};
