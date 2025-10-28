#form

  import React, { useState } from "react";

function App() {
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [gender,setgender]=useState("");
    const [country,setcountry]=useState("");
    const [html,sethtml] = useState(false);
    const [css,setcss] = useState(false); 
    const [js,setjs] = useState(false);
    const [msg,setmsg] = useState("");

    const submit = () => {
         if (!name || !email || !country ){
            setmsg("please fill all the required fields");
         }
         else if(!email.includes("@") || !email.includes(".")){
            setmsg("please enter valid email");
         }
         setmsg("Form submitted");
    }

    return(
        <div>
            <h3>Simple form</h3>
            <input 
            placeholder = "Name" 
            onChange={e=>setname(e.target.value)}
            />

            <input placeholder = "email" onChange={e=>setemail(e.target.value)}/>
            <div>
                Gender:{""}
                <input type="radio" name="gender" value="Male" onChange={e=>{}}
            </div>
        </div>
    )

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

