import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

export const useUserData = (activePage, pageSize) => {
  const axiosSecure = useAxiosSecure();
  const {
    isLoading,
    error,
    refetch,
    data: userData,
  } = useQuery({
    queryKey: ["databaseUserData", activePage, pageSize],
    queryFn: async () => {
      try {
        const response = await axiosSecure.get(
          `/api/get/users?page=${activePage}&pageSize=${pageSize}`
        );
        const databaseUserData = response.data;

        return databaseUserData;
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
      }
    },
  });

  return { isLoading, error, refetch, userData };
};
