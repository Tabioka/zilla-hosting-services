// Filename: components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <Link href="/">
        <a className="text-xl font-bold">Discord Cloud Hosting</a>
      </Link>
      <Link href="/dashboard">
        <a className="px-4 py-2 bg-blue-600 rounded">Dashboard</a>
      </Link>
    </nav>
  );
}
