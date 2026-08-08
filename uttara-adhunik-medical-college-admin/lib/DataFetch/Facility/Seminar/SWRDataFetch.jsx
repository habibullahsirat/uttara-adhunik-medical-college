import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useTrainingData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/facility/training/about`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useFacilityData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/facility/training/facility`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};
