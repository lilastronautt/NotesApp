import "./Editor.css";
import "../../App.css";
import "react-quill/dist/quill.snow.css";
import React from "react";
import ReactQuill, { modules } from "react-quill";
import { useDispatch, useSelector } from "react-redux";
import { notesActions } from "../store/index";
import BorderColorIcon from "@material-ui/icons/BorderColor";

const Editor = () => {
  const dispatch = useDispatch();
  let selectedNote = useSelector((state) => state.selectedNote);
  let body = "";
  const editorChangeHandler = async (value) => {
    const value1 = await value;
    body = value1;
  };

  // const [updatedTitle, setUpdatedTitle] = useState(selectedNote.title);
  // const onChangeTitleHandler = (event) => {
  //   console.log(event.target.value);
  // };

  const addBodyHandler = () => {
    dispatch(notesActions.addNotesBody(body));
  };

  const toFirstUpper = (string) => {
    const newStr = string
      ?.toLowerCase()
      .split(" ")
      .map((word) => word.replace(word?.at(0), word.at(0)?.toUpperCase()))
      .join(" ");
    return newStr;
  };
  modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };
  return (
    <div className="quill">
      <div className="input">
        <div>
          <BorderColorIcon className="border-icon"></BorderColorIcon>
          <input
            className="title-show"
            value={toFirstUpper(selectedNote.title)}
            // onChange={onChangeTitleHandler}
          />
        </div>
        <div className="save-body">
          <button onClick={addBodyHandler}>Save</button>
        </div>
      </div>

      <ReactQuill
        theme="snow"
        value={selectedNote.body}
        onChange={editorChangeHandler}
        modules={modules}
        placeholder="Start Writing, Drag Files"
      ></ReactQuill>
    </div>
  );
};

export default Editor;
