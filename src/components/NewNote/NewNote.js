import "./NewNote.css";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { notesActions } from "../store/index";
import { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

const NewNote = () => {
  const onClickNewNote = useSelector((state) => state.onClickNewNote);
  const selectedNote = useSelector((state) => state.selectedNote);
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(notesActions.onClickNewNote());
  };

  const [title, setTitle] = useState("");
  const onTitleChange = (event) => {
    setError(false);
    setTitle(event.target.value);
  };
  const onSubmitTitle = () => {
    let flag = false;
    notes.forEach((notes) => {
      if (notes.title === title) {
        flag = true;
      }
    });
    if (flag === true) {
      setError(true);
    } else {
      dispatch(notesActions.addNotesTitle(title));
      dispatch(notesActions.selectedNote({ title: title, body: "" }));
      setTitle("");
    }
  };

  const [error, setError] = useState(false);

  return (
    <div className="options">
      <div className="new-note__input">
        {onClickNewNote || (
          <button value="new note" onClick={onClickHandler}>
            New Note
          </button>
        )}
        {onClickNewNote && (
          <>
            <button value="new note" onClick={onClickHandler}>
              Cancel
            </button>
            <div className="title-input">
              <input
                placeholder="Enter Note Title"
                value={title}
                onChange={onTitleChange}
              />
              {error && <div className="error">Note Title Taken</div>}
            </div>
            <div className="submit-btn">
              <button value="new note" onClick={onSubmitTitle}>
                Submit
              </button>
            </div>
          </>
        )}
      </div>
      {notes.map((el) => {
        const selectedNoteHandler = () => {
          dispatch(
            notesActions.selectedNote({ title: el.title, body: el.body })
          );
        };

        const toFirstUpper = (string) => {
          const newStr = string
            ?.trim()
            .toLowerCase()
            .split(" ")
            .map((word) => word.replace(word.at(0), word.at(0).toUpperCase()))
            .join(" ");
          return newStr;
        };

        const onDeleteHandler = () => {
          dispatch(notesActions.deleteNote(el.title));
        };

        let flag = false;
        if (selectedNote.title === el.title) {
          flag = true;
        }

        const elBodyArr = el.body.replaceAll(/<\/?[^>]+(>|$)/g, "").split(" ");
        const [a, b, c] = elBodyArr;

        const style = flag ? "title-list " + "selected-class" : "title-list";

        return (
          <div onClick={selectedNoteHandler} className={style}>
            <div>
              <div className="title">{toFirstUpper(el.title)}</div>
              <div className="body">
                {el.body.length
                  ? `${a ? a : ""} ${b ? b : ""} ${c ? c : ""}...`
                  : ""}
              </div>
            </div>
            <div>
              <DeleteIcon
                className="delete"
                onClick={onDeleteHandler}
              ></DeleteIcon>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewNote;
