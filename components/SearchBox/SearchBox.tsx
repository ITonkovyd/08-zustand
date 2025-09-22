"use client";

import { useEffect, useState } from "react";
import css from "./SearchBox.module.css";

interface SearchBoxProps {
  onChange: (query: string) => void;
}

const SearchBox = ({ onChange }: SearchBoxProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    onChange(searchQuery);
  }, [onChange, searchQuery]);

  return (
    <input
      className={css.input}
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search notes"
    />
  );
};

export default SearchBox;
