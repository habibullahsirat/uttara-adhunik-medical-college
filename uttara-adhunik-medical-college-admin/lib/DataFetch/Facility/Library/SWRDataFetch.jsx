import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useLibraryData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/facility/library/about`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useLibraryFeatureData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/facility/library/feature`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};
