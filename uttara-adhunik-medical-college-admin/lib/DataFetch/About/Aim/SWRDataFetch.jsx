import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useBannerData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/about/aim/banner`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useObjectiveData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/about/aim/objective`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};
