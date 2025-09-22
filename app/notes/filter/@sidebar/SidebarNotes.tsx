"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { noteTag } from "@/types/note";
import css from "./SidebarNotes.module.css";

type ValidTags = noteTag | "All";

const TAGS: ValidTags[] = [
  "All",
  "Todo",
  "Work",
  "Personal",
  "Meeting",
  "Shopping",
];

const SidebarNotes = () => {
  const pathname = usePathname();
  const currentTag = pathname.split("/").pop();

  return (
    <ul className={css.menuList}>
      {TAGS.map((tag) => (
        <li
          className={`${css.menuItem} ${currentTag === tag ? css.active : ""}`}
          key={tag}
        >
          <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SidebarNotes;