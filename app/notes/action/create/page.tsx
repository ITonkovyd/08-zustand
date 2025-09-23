import NoteForm from '@/components/NoteForm/NoteForm'
import css from './page.module.css'

export const metadata = {
  title: 'Create Note',
  description: 'Create a new note',
  opensGraph: {
    title: 'Create Note',
    description: 'Create a new note',
    images: [
      {
        url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
        width: 1200,
        height: 630,
        alt: "NoteHub",
      },
    ],
  },
}

const CreateNote = async () => {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  )
}

export default CreateNote