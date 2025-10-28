#form

  import React, { useState } from "react";

export default function SimpleForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [html, setHtml] = useState(false);
  const [css, setCss] = useState(false);
  const [js, setJs] = useState(false);
  const [country, setCountry] = useState("");
  const [feedback, setFeedback] = useState("");
  const [msg, setMsg] = useState("");

  const submit = () => {
    if (!name || !email || !gender || !country || !feedback)
      setMsg("⚠ Please fill all fields");
    else if (!email.includes("@") || !email.includes("."))
      setMsg("❌ Invalid email");
    else setMsg("✅ Form submitted!");
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h3>Simple Form Validation</h3>

      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      /><br /><br />

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      /><br /><br />

      Gender:{" "}
      <input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} /> Male
      <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} /> Female
      <br /><br />

      Skills:{" "}
      <input type="checkbox" checked={html} onChange={() => setHtml(!html)} /> HTML
      <input type="checkbox" checked={css} onChange={() => setCss(!css)} /> CSS
      <input type="checkbox" checked={js} onChange={() => setJs(!js)} /> JS
      <br /><br />

      Country:{" "}
      <select onChange={(e) => setCountry(e.target.value)}>
        <option value="">Select Country</option>
        <option>India</option>
        <option>USA</option>
        <option>UK</option>
      </select><br /><br />

      <textarea
        placeholder="Your feedback..."
        rows="3"
        onChange={(e) => setFeedback(e.target.value)}
      /><br /><br />

      <button onClick={submit}>Submit</button>
      <p style={{ color: msg.includes("✅") ? "green" : "red" }}>{msg}</p>
    </div>
  );
}

Crud

import React, { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState({ title: "", author: "" });
  const [edit, setEdit] = useState(-1);

  const saveBook = () => {
    const list = [...books];
    edit >= 0 ? (list[edit] = book) : list.push(book);
    setBooks(list);
    setBook({ title: "", author: "" });
    setEdit(-1);
  };

  const editBook = (i) => {
    setBook(books[i]);
    setEdit(i);
  };

  const deleteBook = (i) => setBooks(books.filter((_, x) => x !== i));

  return (
    <div>
      <h3>Library Management</h3>

      <input
        placeholder="Book title"
        value={book.title}
        onChange={(e) => setBook({ ...book, title: e.target.value })}
      />
      <input
        placeholder="Book author"
        value={book.author}
        onChange={(e) => setBook({ ...book, author: e.target.value })}
      />

      <button onClick={saveBook}>{edit >= 0 ? "Update" : "Add"}</button>

      <div>
        {books.length ? (
          books.map((b, i) => (
            <div key={i}>
              {i + 1}. {b.title} - {b.author}
              <button onClick={() => editBook(i)}>Edit</button>
              <button onClick={() => deleteBook(i)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
  );
}

export default App;

