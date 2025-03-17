import React, { createContext, ReactNode, useContext, useReducer } from "react";
import { Note } from "../types/Notes";



type Action =
  | {
      type: "delete" | "complete";
      payload: number;
    }
  | {
      type: "add";
      payload: Note;
    };

const NotesContext = createContext({} as Note[]);
const NotesDispatchContext = createContext({} as React.Dispatch<Action>);

function notesReducer(notes: Note[], action: Action) {
  switch (action.type) {
    case "add": {
      return [...notes, action.payload];
    }
    case "delete": {
      return notes.filter((s) => s.id !== action.payload);
    }
    case "complete": {
      return notes.map((note) =>
        note.id === action.payload
          ? { ...note, completed: !note.completed }
          : note
      );
    }
    default:
      throw new Error("unknown action" + action);
  }
}

export function NotesProvider({ children }: { children: ReactNode }) {
  const [notes, dispatch] = useReducer(notesReducer, []);

  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        {children}
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}

export function useNotes() {
  return useContext(NotesContext);
}

export function useNotesDispatch() {
  return useContext(NotesDispatchContext);
}
