import React, { useMemo, useState } from "react";
import type { User } from "./types";
import UserCard from "./components/UserCard";

const USERS: User[] = [
  { name: "Alice", email: "alice@mail.com", age: 25 },
  { name: "Bob", email: "bob@mail.com", age: 30 },
  { name: "Charlie", email: "charlie@mail.com", age: 22 },
  { name: "Dina", email: "dina@mail.com", age: 28 },
  { name: "Erlan", email: "erlan@mail.com", age: 26 },
];

export default function SearchApp() {
  const [users] = useState<User[]>(USERS);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredUsers = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return users;
    return users.filter((u) => u.name.toLowerCase().includes(term));
  }, [searchTerm, users]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSearchTerm("");
  };

  return (
    <div style={{ padding: 24, maxWidth: 720, margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Lab 05.2 — User Search (TypeScript)</h1>

      <div style={{ display: "flex", gap: 10, margin: "18px 0" }}>
        <input
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search by name..."
          style={{
            flex: 1,
            padding: 10,
            borderRadius: 10,
            border: "1px solid #555",
          }}
        />
        <button onClick={handleClear} style={{ padding: "10px 14px" }}>
          Clear
        </button>
      </div>

      {filteredUsers.length === 0 ? (
        <p>No results found</p>
      ) : (
        filteredUsers.map((u) => <UserCard key={u.email} user={u} />)
      )}
    </div>
  );
}