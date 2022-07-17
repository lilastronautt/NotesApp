import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
  onClickNewNote: false,
  selectedNote: { title: "", body: "" },
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNotesTitle(state, action) {
      state.notes.unshift({ title: action.payload, body: "" });
    },
    addNotesBody(state, action) {
      state.selectedNote.body = action.payload;
      state.notes.find((note) => note.title === state.selectedNote.title).body =
        action.payload;
      console.log(
        state.notes.find((note) => note.title === state.selectedNote.title).body
      );
    },
    selectedNote(state, action) {
      console.log(action.payload);
      state.selectedNote = action.payload;
    },
    updateNoteTiltle(state, action) {
      console.log(action.payload);
    },
    deleteNote(state, action) {
      state.notes = state.notes.filter((note) => note.title !== action.payload);
    },
    onClickNewNote(state) {
      state.onClickNewNote = !state.onClickNewNote;
    },
  },
});

const store = configureStore({ reducer: noteSlice.reducer });

export const notesActions = noteSlice.actions;

export default store;
