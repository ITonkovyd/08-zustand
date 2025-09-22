import { HydrationBoundary, dehydrate, QueryClient } from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function FilterPage({ params }: Props) {
  const queryClient = new QueryClient();
  const { slug } = await params;
  const selectedTag = slug?.at(0) === "All" ? null : slug?.at(0);

  await queryClient.prefetchQuery({
    queryKey: ["note", selectedTag],
    queryFn: () => fetchNotes(1, null, selectedTag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={selectedTag} />
    </HydrationBoundary>
  );
}