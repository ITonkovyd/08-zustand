export type noteTag = "Todo" | "Work" | "Personal" | "Meeting" | "Shopping";

export interface BaseNoteParams {
  title: string;
  content: string;
  tag: noteTag;
}

export interface Note extends BaseNoteParams {
  id: string;
  createdAt: string;
  updatedAt: string;
}
