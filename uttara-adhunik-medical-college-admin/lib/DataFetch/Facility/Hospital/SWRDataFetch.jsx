import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useHeroData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/facility/hospital/hero`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useAboutHospitalData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/facility/hospital/about-hospital`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useFacilitiesData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/facility/hospital/facilities`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useMedicalServiceData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/facility/hospital/medical-service`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useClinicalServiceData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/facility/hospital/clinical-service`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useSurgicalServiceData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/facility/hospital/surgical-service`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useEmergencyServiceData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/facility/hospital/emergency-service`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useDiagnosticServiceData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/facility/hospital/diagnostic-service`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useAdditionalServiceData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/facility/hospital/additional-service`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};
