"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Layout from "@/app/Layout/Layout";

export default function CreateUserPage() {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState<number | string>("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newUser = { name, email, age, password };
      await axios.post("http://localhost:3000/users", newUser);
      router.push("/users");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Create User</h1>
        <form onSubmit={handleCreateUser} className="space-y-4">
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
            placeholder="Password"
            className="border px-4 py-2 w-full rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white rounded py-2 hover:bg-green-600 transition"
          >
            Create User
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
