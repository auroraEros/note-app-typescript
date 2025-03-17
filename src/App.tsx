import { useState } from "react";
import "./App.css";

import AppProvider from "./provider/AppProvider";
import NoteHeader from "./components/NoteHeader";
import AddNewNote from "./components/AddNewNote";
import NoteStatus from "./components/NoteStatus";
import NoteList from "./components/NoteList";
import { SortBy } from "./types/SortBy";

function App() {
  const [sortBy, setSortBy] = useState<SortBy>("latest");
  return (
    <AppProvider>
      <div className="container">
        <NoteHeader
          sortBy={sortBy}
          onSort={(e) => setSortBy(e.target.value as SortBy)}
        />
        <div className="note-app">
          <AddNewNote />
          <div className="note-container">
            <NoteStatus />
            <NoteList sortBy={sortBy} />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
