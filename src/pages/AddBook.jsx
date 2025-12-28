import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../features/books/booksSlice";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const [form, setForm] = useState({
    title: "", author: "", category: "", description: "", rating: ""
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    if (Object.values(form).some(v => !v)) {
      alert("All fields required");
      return;
    }

    dispatch(addBook({ ...form, id: Date.now() }));
    navigate("/books");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h1>Add New Book</h1>
      {Object.keys(form).map(key => (
        <input
          key={key}
          placeholder={key}
          onChange={e => setForm({ ...form, [key]: e.target.value })}
        />
      ))}
      <button>Add Book</button>
      </form>
    </div>
    
  );
}
