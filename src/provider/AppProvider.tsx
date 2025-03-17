import { ReactNode } from "react";
import { NotesProvider } from "../context/NotesContext";

type Props = { children: ReactNode };

function AppProvider({ children }: Props) {
  return <NotesProvider>{children}</NotesProvider>;
}

export default AppProvider;
