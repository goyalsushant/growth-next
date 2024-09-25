"use client"

// src/app/register/page.tsx
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { User } from '../../services/userService';
import Layout from '../Layout/Layout';

export default function RegisterPage() {
  const [name, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState(0);
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const newUser: User = { name, email, age, password };
      await axios.post('http://localhost:3000/auth/register', newUser);
      router.push('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-4xl font-bold mb-4 text-blue-600">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="border px-4 py-2 w-full rounded"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="border px-4 py-2 w-full rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Age"
            className="border px-4 py-2 w-full rounded"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
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
            className="w-full bg-green-500 text-white rounded py-2 hover:bg-green-600 transition"
          >
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
}
