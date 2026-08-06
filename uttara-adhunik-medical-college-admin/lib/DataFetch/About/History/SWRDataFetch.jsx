import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useHistoryData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/about/history/history-banner`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useYearData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/about/history/year`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};
