"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Angemeldet als {session.user.name}</p>
        <button
          className="group underline rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          onClick={() => signOut()}
        >
          Abmelden
        </button>
      </div>
    );
  }
  return (
    <button
      className="group underline rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      onClick={() => signIn("github")}
    >
      Mit GitHub anmelden
    </button>
  );
}
