import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useSiteData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/site-setting`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};
