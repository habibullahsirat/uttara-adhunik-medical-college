import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useSeminarData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/facility/seminar/about`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const usePresentationData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/facility/seminar/presentation`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useCollaborationData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/facility/seminar/collaboration`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useActivityData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/facility/seminar/activity`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};
