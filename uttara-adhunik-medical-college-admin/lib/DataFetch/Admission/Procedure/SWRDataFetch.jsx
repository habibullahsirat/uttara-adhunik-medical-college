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
    `${API_URL}/api/admission/rules/procedure/eligibility-national-student`,
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
    `${API_URL}/api/admission/rules/procedure/student-quota`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useFeeData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/admission/rules/procedure/fee-structure-national`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useMonthlyFeeData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/admission/rules/procedure/monthly-fee`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useForeignStudentEligibilityData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/admission/rules/procedure/eligibility-foreign-student`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useForeignDocumentData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/admission/rules/procedure/documents`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};

export const useForeignStudentFeeData = () => {
  const { data, error, mutate } = useSWR(
    `${API_URL}/api/admission/rules/procedure/fee-structure-foreign`,
    fetcher,
  );
  return { data, error, isLoading: !data && !error, mutate };
};
