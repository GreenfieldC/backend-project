'use client';
import { SessionProvider } from 'next-auth/react';
import { useEffect } from 'react';
import DarkModeAndAuthButtons from './DarkModeAndAuthButtons';

export default function App({
  session,
  children
}) {
  // Dark Mode Toggle
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const dark =
        localStorage.getItem('theme') === 'dark';
      document.documentElement.classList.toggle(
        'dark',
        dark
      );
    }
  }, []);

  const toggleDarkMode = () => {
    const isDark =
      document.documentElement.classList.toggle(
        'dark'
      );
    localStorage.setItem(
      'theme',
      isDark ? 'dark' : 'light'
    );
  };

  return (
    <SessionProvider session={session}>
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <DarkModeAndAuthButtons />
      </div>
      {children}
    </SessionProvider>
  );
}
