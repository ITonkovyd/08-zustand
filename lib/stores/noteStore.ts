import { create } from "zustand";
import { persist } from 'zustand/middleware';
import { BaseNoteParams } from "@/types/note";

const initialDraft: BaseNoteParams = {
  title: '',
  content: '',
  tag: 'Todo',
};


type NoteDraftStore = {
  draft: BaseNoteParams;
  setDraft: (draft: BaseNoteParams) => void;
  clearDraft: () => void;
}

export const useNoteDraftStore = create<NoteDraftStore>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (draft) => set({ draft }),
      clearDraft: () => set({ draft: initialDraft })
    }),
    {
      name: 'note-draft-storage',
    }
  )
);

