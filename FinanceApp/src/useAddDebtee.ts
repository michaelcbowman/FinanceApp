import { useMutation, useQueryClient } from '@tanstack/react-query';

const addDebteeAPI = async (newDebtee) => {
  const response = await fetch('/api/debtees', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newDebtee),
  });
  if (!response.ok) {
    throw new Error('Failed to add debtee');
  }
  return response.json();
};

export const useAddDebtee = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: addDebteeAPI,
    onSuccess: () => {
      // Invalidate the 'debtees' query key to force a refetch, 
      // which automatically updates your table component
      queryClient.invalidateQueries({ queryKey: ['debtees'] });
    },
  });

  return { mutate, isPending, isError, error };
};