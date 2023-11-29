import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

export const useTeacherData = (activePage, pageSize) => {
  const axiosSecure = useAxiosSecure();
  const {
    isLoading,
    error,
    refetch,
    data: teachersData ,
  } = useQuery({
    queryKey: ["databaseTeacherData", activePage, pageSize],
    queryFn: async () => {
      try {
        const response = await axiosSecure.get(
          `/api/get/users?isTeacherRequest=All&page=${activePage}&pageSize=${pageSize}`
        );
        const databaseTeacherData = response.data;

        return databaseTeacherData;
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
      }
    },
  });

  return { isLoading, error, refetch, teachersData };
};
