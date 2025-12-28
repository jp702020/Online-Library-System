# 📚 Online Library System (React + Vite)

This is a simple **Online Library System** built using **React** and **Vite**.  
The application allows users to browse books by category, view book details, search books, and add new books using **Redux** for state management.

---

## 🚀 Tech Stack Used

- React (Functional Components & Hooks)
- Vite (Project Setup)
- React Router DOM (Routing & Dynamic Routes)
- Redux Toolkit (State Management)
- React Redux
- CSS (for styling)

---

## ✨ Features

### 🏠 Home Page
- Welcome message
- List of book categories (Fiction, Non-Fiction, Sci-Fi, etc.)
- Popular books displayed as cards
- Navigation bar with links to Home, Browse Books, and Add Book

### 📖 Browse Books
- Displays books using dummy data
- Filter books by category using dynamic routing (`/books/:category`)
- Search books by title or author
- “View Details” option for each book

### 📘 Book Details
- Dynamic route to show book details
- Displays title, author, description, and rating
- Back button to return to Browse Books page

### ➕ Add Book
- Form to add a new book
- Redux used to manage the books list
- Form validation for all fields
- After submission, redirects to Browse Books page
- Newly added book appears at the top of the list

### ❌ 404 Page
- Handles undefined routes
- Displays invalid URL
- Link to navigate back to Home page
- Does not include the Navbar component

---


---

## ▶️ How to Run the Project

Follow these steps to run the application locally:

1. Clone the repository:
   ```bash
   git clone <repository-url>

2. Navigate to the project folder:
   ```bash
   cd online-library-system

3. Install dependencies:
   ```bash
   npm install

4. Start the development server:
    ```bash
    npm run dev

5. Open the browser and visit:
    ```bash
    http://localhost:5173