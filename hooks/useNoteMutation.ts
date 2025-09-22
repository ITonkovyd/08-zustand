import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
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
  successMsg,
  errorMsg,
  successAction,
}: UseNoteMutationOptions<T>) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
      if (successMsg) toast.success(successMsg);
      if (successAction) successAction();
    },
    onError: () => {
      if (errorMsg) toast.error(errorMsg);
    },
  });
}
