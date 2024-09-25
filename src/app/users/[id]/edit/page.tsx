"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import Layout from "@/app/Layout/Layout";

export default function EditUserPage() {
  const [user, setUser] = useState<any>({});
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState<number | string>("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("access_token");
      const { data } = await axios.get(`http://localhost:3000/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(data);
      setUsername(data.name);
      setEmail(data.email);
      setAge(data.age);
    };
    fetchUser();
  }, [id]);

  const handleUpdateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const updatedUser = { name, email, age, password };
      await axios.put(`http://localhost:3000/users/${id}`, updatedUser);
      router.push("/users");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Edit User</h1>
        <form onSubmit={handleUpdateUser} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="border px-4 py-2 w-full rounded"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border px-4 py-2 w-full rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Age"
            className="border px-4 py-2 w-full rounded"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="New Password (optional)"
            className="border px-4 py-2 w-full rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600 transition"
          >
            Update User
          </button>
        </form>
        <button
          onClick={() => router.push("/users")}
          className="mt-4 bg-gray-500 text-white rounded px-4 py-2 hover:bg-gray-600 transition"
        >
          Back to User List
        </button>
      </div>
    </Layout>
  );
}
