import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import BookCard from "../components/BookCard";

export default function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector(state => state.books.list);
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter(book =>
    (!category || book.category === category) &&
    (book.title.toLowerCase().includes(search.toLowerCase()) ||
     book.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="page">
      <h1>Browse Books</h1>

      <input
        placeholder="Search by title or author"
        onChange={e => setSearch(e.target.value)}
      />

      <div className="grid">
        {filteredBooks.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
