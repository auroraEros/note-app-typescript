# Note App

A simple note-taking application built with React and TypeScript. This project was primarily created to practice TypeScript while implementing common features such as adding, sorting, completing, and deleting notes.

## Features
- 📝 **Add Notes** – Users can create new notes.
- 🔄 **Sort Notes** – Sort by newest, oldest, or completed status.
- ✅ **Mark as Completed** – Mark notes as completed.
- ❌ **Delete Notes** – Remove notes from the list.

## Technologies Used
- **React** (with hooks)
- **TypeScript**
- **CSS (for basic styling)**

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/note-app.git
   cd note-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

## Folder Structure
```
📂 src
 ┣ 📂 components  # Reusable React components
 ┣ 📂 context       
 ┣ 📂 types       # TypeScript types/interfaces
 ┣ 📜 App.tsx     # Main application component
 ┣ 📜 main.tsx   # Entry point
 ┗ 📜 index.css  # Global styles
```

## How It Works
1. Users can add a new note using the input field.
2. Notes appear in the list and can be marked as completed.
3. Sorting options allow users to organize notes.
4. Notes can be deleted if no longer needed.

## Future Improvements
- 🏷 **Tags & Categories** – Group notes by tags.
- 🔍 **Search Functionality** – Find notes easily.
- ☁️ **LocalStorage Support** – Persist notes between sessions.

## Contributing
Feel free to fork the repo and submit pull requests!

## License
This project is licensed under the MIT License.
