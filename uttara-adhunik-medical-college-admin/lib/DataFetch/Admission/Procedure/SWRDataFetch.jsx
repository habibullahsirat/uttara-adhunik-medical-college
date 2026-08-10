import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useAboutData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/admission/rules/procedure/about`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useEligibilityData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/admission/rules/procedure/national-student-eligibility`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useSelectionData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/admission/rules/procedure/national-student-selection`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useQuotaData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/admission/rules/procedure/national-student-quota`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useFeeData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/admission/rules/procedure/national-student-fee`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useFindDepartmentRightData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/admission/rules/procedure/national-student-monthly-fee`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useAdmissionData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/admission/rules/procedure/foreign-student-eligibility`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useFeatureData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/admission/rules/procedure/foreign-student-documents`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const usePrincipleMessageData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/admission/rules/procedure/foreign-student-fee`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};
