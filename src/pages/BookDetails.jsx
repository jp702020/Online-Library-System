import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function BookDetails() {
  const { id } = useParams();
  const book = useSelector(state =>
    state.books.list.find(b => b.id === Number(id))
  );

  if (!book) return <p>Book not found</p>;

  return (
    <div className="page">
      <h2>{book.title}</h2>
      <p><b>Author:</b> {book.author}</p>
      <p>{book.description}</p>
      <p><b>Rating:</b> {book.rating}</p>

      <Link to="/books">⬅ Back to Browse</Link>
    </div>
  );
}
