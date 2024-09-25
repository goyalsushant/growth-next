// src/app/page.tsx
import Layout from './Layout/Layout';

export default function HomePage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to User Management</h1>
        <p className="text-lg text-gray-700 mb-8">
          Login or register to manage users easily.
        </p>
      </div>
    </Layout>
  );
}
