"use client";

import Link from "next/link";
import { useNoteMutation } from "@/hooks/useNoteMutation";
import { deleteNote } from "@/lib/api";
import type { Note } from "@/types/note";
import css from "./NoteList.module.css";

interface NoteListProps {
  notes: Note[];
}

const NoteList = ({ notes }: NoteListProps) => {
  const deletingMutation = useNoteMutation({
    mutationFn: (id: string) => deleteNote(id),
    queryKey: ["notes"],
    successMsg: "Note deleted successfully",
    errorMsg: "Error deleting note",
  });

  return (
    <ul className={css.list}>
      {notes.map((note) => {
        return (
          <li key={note.id} className={css.listItem}>
            <h2 className={css.title}>{note.title}</h2>
            <p className={css.content}>{note.content}</p>
            <div className={css.footer}>
              <span className={css.tag}>{note.tag}</span>
              <Link href={`/notes/${note.id}`} className={css.button}>
                View details
              </Link>
              <button
                className={css.button}
                onClick={() => deletingMutation.mutate(note.id)}
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default NoteList;
