'use client';
import { useSession } from 'next-auth/react';
import Login from '@/components/Login';
import Link from 'next/link';

export default function Home() {
  const { data: session } = useSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <Link
        className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded p-2 px-6 font-medium shadow hover:from-purple-700 hover:to-blue-600 transition-colors duration-300"
        href="/register"
      >
        Register
      </Link>
      <header className="flex flex-col items-center gap-4 mb-12">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 dark:from-blue-300 dark:to-purple-400 drop-shadow-lg">
          Recipe App!
        </h1>
        <Login />
      </header>
      {session && (
        <Link
          className="group underline rounded-xl border border-gray-200 dark:border-gray-700 px-8 py-4 text-lg font-medium shadow-md bg-white/80 dark:bg-gray-800/80 hover:bg-blue-100 hover:dark:bg-blue-900/40 transition-colors duration-300"
          href="/recipes"
        >
          <span className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            Recipes ansehen
          </span>
        </Link>
      )}
    </main>
  );
}
