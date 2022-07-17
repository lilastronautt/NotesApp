import Editor from "./components/Editor/Editor";
import NewNote from "./components/NewNote/NewNote";

const App = () => {
  return (
    <div className="parent">
      <NewNote></NewNote>
      <Editor></Editor>
    </div>
  );
};

export default App;
