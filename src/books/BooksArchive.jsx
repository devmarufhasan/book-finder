/* eslint-disable no-unused-vars */
import { useState } from "react";
import AllBooks from "./AllBooks";
import ArchiveHeader from "./ArchiveHeader";

const BooksArchive = () => {
  let allBooksList = [
    {
      id: 1,
      name: "Javascript",
      author: "Roy",
      price: 50,
      star: 4,
      date: 2010,
      isFavorite: false,
    },
    {
      id: 2,
      name: "React",
      author: "Jon",
      price: 90,
      star: 5,
      date: 2024,
      isFavorite: false,
    },
    {
      id: 3,
      name: "Redux",
      author: "Kal",
      price: 99,
      star: 5,
      date: 1960,
      isFavorite: false,
    },
    {
      id: 4,
      name: "Js mastary",
      author: "Nwal",
      price: 43,
      star: 4,
      date: 1890,
      isFavorite: false,
    },
    {
      id: 5,
      name: "Advaced Javascript",
      author: "Mr.X",
      price: 88,
      star: 5,
      date: 2003,
      isFavorite: false,
    },
    {
      id: 6,
      name: "Hello Javascript",
      author: "Holland",
      price: 56,
      star: 5,
      date: 2010,
      isFavorite: false,
    },
  ];

  const [searchString, setSearchString] = useState("");
  const [short, setShort] = useState("");
  const [books, setBooks] = useState(allBooksList);
  const filteredBooks = books
    .filter((book) =>
      book.name.toLowerCase().includes(searchString.toLowerCase())
    )
    .sort((a, b) => {
      if (short === "name_asc") {
        return a.name.localeCompare(b.name);
      } else if (short === "name_desc") {
        return b.name.localeCompare(a.name);
      } else if (short === "year_asc") {
        return a.date - b.date;
      } else if (short === "year_desc") {
        return b.date - a.date;
      } else {
        return 0;
      }
    });

  return (
    <main className="my-10 lg:my-14">
      <ArchiveHeader
        searchString={searchString}
        setSearchString={setSearchString}
        setShort={setShort}
        short={short}
      />
      <AllBooks books={filteredBooks} setBooks={setBooks} allBooks={books} />
    </main>
  );
};

export default BooksArchive;
