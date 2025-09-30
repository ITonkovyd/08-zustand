import { HydrationBoundary, dehydrate, QueryClient } from "@tanstack/react-query";
import type { Metadata } from "next";
import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const selectedTag = slug?.at(0);

  return {
    title: `Notes - ${selectedTag}`,
    description: `Filtered notes by tag: ${selectedTag}`,
    openGraph: {
      title: `Notes - ${selectedTag}`,
      description: `Filtered notes by tag: ${selectedTag}`,
      url: `https://notehub.com/notes?tag=${selectedTag}`,
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
          width: 1200,
          height: 630,
          alt: "NoteHub",
        },
      ],
    },
  };
}

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