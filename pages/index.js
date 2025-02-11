// Filename: pages/index.js
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Zilla Bot Hosting</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-4xl font-bold">Welcome to Zilla Bot Hosting</h1>
        <Link href="/dashboard">
          <a className="mt-4 px-4 py-2 bg-blue-600 rounded">Go to Dashboard</a>
        </Link>
      </main>
    </div>
  );
}
