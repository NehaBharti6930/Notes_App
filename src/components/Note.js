// import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <button
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
