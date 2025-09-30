import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Note } from "@/types/note";

interface UseNoteMutationOptions<T> {
  mutationFn: (variables: T) => Promise<Note>;
  queryKey: string[];
  successMsg?: string;
  errorMsg?: string;
  successAction?: () => void;
}

export function useNoteMutation<T>({
  mutationFn,
  queryKey,
  errorMsg,
  successAction,
}: UseNoteMutationOptions<T>) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
      if (successAction) successAction();
    },
    onError: () => {
      console.error(errorMsg);
    },
  });
}
