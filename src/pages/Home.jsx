import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import { booksData } from "../features/books/dummyData";

const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "History"];

export default function Home() {
  return (
    <div className="page">
      <h1>📚 Welcome to Online Library</h1>

      <h2>Categories</h2>
      <ul>
        {categories.map(cat => (
          <li key={cat}>
            <Link to={`/books/${cat}`}>{cat}</Link>
          </li>
        ))}
      </ul>

      <h2>Popular Books</h2>
      <div className="grid">
        {booksData.slice(0, 3).map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
// export default function Home() {
//   return (
//     <div >
//       <h1>Welcome to Online Library</h1>
//       {}
//     </div>
//   );
// }
