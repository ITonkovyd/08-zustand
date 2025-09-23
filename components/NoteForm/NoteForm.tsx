"use client";

import { useRouter } from "next/navigation";
import { useNoteMutation } from "@/hooks/useNoteMutation";
import { createNote } from "@/lib/api";
import { BaseNoteParams, noteTag } from "@/types/note";
import css from "./NoteForm.module.css";


const TAGS: noteTag[] = ["Todo", "Work", "Personal", "Meeting", "Shopping"];

const NoteForm = () => {
  const router = useRouter();

  const { mutate } = useNoteMutation<BaseNoteParams>({
    mutationFn: (newNote: BaseNoteParams) => createNote(newNote),
    queryKey: ["notes"],
    successMsg: "Note created successfully",
    errorMsg: "Error creating note",
    successAction: () => router.push("/notes/filter/All"),
  });

  const backToPreviousPage = () => {
    router.back();
  };

  const handleSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const tag = formData.get("tag") as noteTag;

    const values: BaseNoteParams = { title, content, tag };
    mutate(values);
  };

  return (
    <form action={handleSubmit} className={css.form}>
      <div className={css.formGroup}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          className={css.input}
          required
          minLength={3}
          maxLength={50}
        />
      </div>

      <div className={css.formGroup}>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          rows={8}
          className={css.textarea}
          maxLength={500}
        />
      </div>

      <div className={css.formGroup}>
        <label htmlFor="tag">Tag</label>
        <select id="tag" name="tag" className={css.select} required>
          {TAGS.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      <div className={css.actions}>
        <button
          type="button"
          className={css.cancelButton}
          onClick={backToPreviousPage}
        >
          Cancel
        </button>
        <button type="submit" className={css.submitButton}>
          Create note
        </button>
      </div>
    </form>
  );
};

export default NoteForm;