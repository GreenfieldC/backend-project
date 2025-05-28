"use client";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DarkModeAndAuthButtons() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };
  return (
    <>
      {session && session.user ? (
        <>
          <span className="flex items-center px-2 text-gray-900 dark:text-gray-100">
            Signed in as {session.user.name}
          </span>
          <button
            className="group underline rounded-lg border border-transparent px-5 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </>
      ) : null}
      <button
        onClick={toggleDarkMode}
        className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 shadow"
      >
        Change Darkmode
      </button>
    </>
  );
}
