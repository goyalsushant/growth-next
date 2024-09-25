"use client";

// src/app/users/page.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import { User } from "./userTypes";
import Layout from "../Layout/Layout";

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem('access_token');
      const { data } = await axios.get("http://localhost:3000/users", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Users</h1>
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.id} className="border p-4 rounded bg-white shadow">
              <h2 className="text-xl font-semibold">{user.username}</h2>
              <p>Email: {user.email}</p>
              <p>Age: {user.age}</p>
              <a
                href={`/users/${user.id}/edit`}
                className="text-blue-500 hover:underline"
              >
                Edit
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/users/create"
          className="mt-4 inline-block bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600 transition"
        >
          Create New User
        </a>
      </div>
    </Layout>
  );
}
