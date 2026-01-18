import { useQuery } from '@tanstack/react-query';

const fetchDebtees = async () => {
  const res = await fetch('/api/debtees');
  if (!res.ok) throw new Error('Failed to fetch debtees');
  return res.json();
};

export const useDebtees = () => {
  return useQuery({
    queryKey: ['debtees'],
    queryFn: fetchDebtees,
  });
};