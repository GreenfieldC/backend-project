"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Register() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [userExists, setUserExists] = useState(false);

  useEffect(() => {
    if (status === "authenticated") {
      fetch("/api/user/me").then(async (res) => {
        if (res.status === 404) {
        } else {
          setUserExists(true);
        }
      });
    }
  }, [status, session, router]);

  if (status !== "authenticated") {
    return <p>Bitte zuerst mit GitHub einloggen.</p>;
  }

  if (userExists) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">
          Du bist bereits registriert!
        </h1>
        <p>Du kannst die Seite jetzt normal nutzen.</p>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Registrierung abschließen</h1>
      <form className="flex flex-col gap-4 w-80 bg-white p-6 rounded shadow">
        <input
          className="border p-2 rounded"
          type="text"
          name="name"
          defaultValue={session.user.name || ""}
          placeholder="Name"
        />
        <input
          className="border p-2 rounded"
          type="email"
          name="email"
          defaultValue={session.user.email || ""}
          placeholder="E-Mail"
        />
        <button
          className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700"
          type="submit"
        >
          Registrierung abschließen
        </button>
      </form>
    </main>
  );
}
