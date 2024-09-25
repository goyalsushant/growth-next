"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Layout from "../Layout/Layout";

export default function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        name,
        password,
      });
      localStorage.setItem("access_token", response.data.access_token);
      router.push("/users");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-4xl font-bold mb-4 text-blue-600">Login</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            className="border px-4 py-2 w-full rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border px-4 py-2 w-full rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
}
