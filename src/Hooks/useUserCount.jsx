import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

export const useUserCount = () => {
  const axiosPublic = useAxiosPublic();
  const {
    isLoading,
    error,
    refetch,
    data: userCount,
  } = useQuery({
    queryKey: ["databaseUserCount"],
    queryFn: async () => {
      try {
        const response = await axiosPublic.get(`/api/get/usersCount`);
        const databaseUserCount = response.data;

        return databaseUserCount.length;
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
      }
    },
  });

  return { isLoading, error, refetch, userCount };
};
