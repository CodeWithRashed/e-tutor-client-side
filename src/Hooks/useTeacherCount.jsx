import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

export const useTeacherCount = () => {
  const axiosPublic = useAxiosPublic()
  const {
    isLoading,
    error,
    refetch,
    data: teachersCount ,
  } = useQuery({
    queryKey: ["databaseTeacherCountData"],
    queryFn: async () => {
      try {
        const response = await axiosPublic.get(
          `/api/get/users?isTeacherRequest=All`
        );
        const databaseTeacherData = response.data;

        return databaseTeacherData;
      } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
      }
    },
  });

  return { isLoading, error, refetch, teachersCount };
};
