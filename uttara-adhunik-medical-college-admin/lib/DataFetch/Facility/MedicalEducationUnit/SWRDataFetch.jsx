import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useAboutMedicalData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/facility/meu/about`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useFacilityData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/facility/meu/facility`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useAcademicDatabaseData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/facility/meu/database`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useMEUFeatureData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/facility/meu/feature`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};
