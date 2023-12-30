const buttonEl = document.querySelector("button");
const noteAppContainerEl = document.querySelector(".noteAppContainer");
const NoteDiv = document.querySelector(".NoteDiv");

const createNoteEl = (id, content) => {
  const element = document.createElement("textarea");
  element.classList.add("note");
  element.placeholder = "Empty note";
  element.value = content;
  element.addEventListener("dblclick", () => {
    const warning = confirm("Do you want to delete this note");
    if (warning) {
      deleteNote(id, element);
    }
  });

  element.addEventListener("input", () => {
    updateNote(id, element.value);
  });
  return element;
};

const deleteNote = (id, element) => {
  const notes = getNotes().filter((note) => note.id != id);
  saveNote(notes);
  NoteDiv.removeChild(element);
};

const updateNote = (id, content) => {
  const notes = getNotes();
  const target = notes.filter((note) => note.id == id)[0];
  target.content = content;
  saveNote(notes);
};
const addNote = () => {
  const notes = getNotes();
  const noteObj = {
    id: Math.floor(Math.random() * 100000),
    content: "",
  };
  console.log(noteObj);
  const noteEl = createNoteEl(noteObj.id, noteObj.content);
  NoteDiv.insertBefore(noteEl, buttonEl);
  notes.push(noteObj);
  saveNote(notes);
};
const saveNote = (note) => {
  localStorage.setItem("note-ap", JSON.stringify(note));
};
const getNotes = () => {
  return JSON.parse(localStorage.getItem("note-ap") || "[]");
};

getNotes().forEach((note) => {
  const notEl = createNoteEl(note.id, note.content);
  NoteDiv.insertBefore(notEl, buttonEl);
});

buttonEl.addEventListener("click", addNote);
