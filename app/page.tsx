import Image from "next/image";
import css from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={css.container}>
        <h1 className={css.title}>Welcome to NoteHub</h1>
        <Image
          src="/notehub-banner.png"
          alt="Existed NoteHub Banner"
          width={1000}
          height={650}
          priority
        />
        <Image
          src="https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"
          alt="Other domain NoteHub Banner"
          width={1000}
          height={650}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAgMBAp6kAAAAAElFTkSuQmCC"
        />
        <p className={css.description}>
          NoteHub is a simple and efficient application designed for managing
          personal notes. It helps keep your thoughts organized and accessible
          in one place, whether you are at home or on the go.
        </p>
        <p className={css.description}>
          The app provides a clean interface for writing, editing, and browsing
          notes. With support for keyword search and structured organization,
          NoteHub offers a streamlined experience for anyone who values clarity
          and productivity.
        </p>
      </div>
    </main>
  );
}
