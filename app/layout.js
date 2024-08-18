// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Todo List App',
  description: 'A simple Todo List app built with Next.js 14.2.5',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
