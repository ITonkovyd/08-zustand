import axios from "axios";
import type { Note, BaseNoteParams } from "@/types/note.ts";

const BASE_URL = "https://notehub-public.goit.study/api";
const TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

interface fetchNotesResponse {
  totalPages: number;
  notes: Note[];
}

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
});

export const fetchNotes = async (
  page: number,
  query: string | null = null,
  tag: string | null = null
): Promise<fetchNotesResponse> => {
  const res = await instance.get<fetchNotesResponse>("/notes", {
    params: {
      page,
      perPage: 12,
      ...(query && { search: query }),
      ...(tag && { tag }),
    },
  });
  return res.data;
};

export const fetchNoteById = async (noteId: string): Promise<Note> => {
  const res = await instance.get<Note>(`/notes/${noteId}`);
  return res.data;
};

export const createNote = async (newNote: BaseNoteParams): Promise<Note> => {
  const res = await instance.post<Note>("/notes", newNote);
  return res.data;
};

export const deleteNote = async (noteId: string): Promise<Note> => {
  const res = await instance.delete<Note>(`/notes/${noteId}`);
  return res.data;
};
