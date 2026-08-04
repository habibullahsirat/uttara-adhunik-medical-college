import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useHeroData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/homepage/hero`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useNoticeData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/homepage/notice`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const usePublicationData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/homepage/publication`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useAboutData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/homepage/about`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};
