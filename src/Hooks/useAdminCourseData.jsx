import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


export const useAdminCourseData = (activePage, pageSize) => {
const axiosPublic = useAxiosPublic()
  const {
    isLoading,
    error,
    refetch,
    data: adminCourseData,
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

  return { isLoading, error, refetch, adminCourseData };
};
