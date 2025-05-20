import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-black text-white px-4 py-3 mb-6">
      <div className="max-w-5xl mx-auto flex space-x-6">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/register" className="hover:underline">Register</Link>
        <Link href="/bracket" className="hover:underline">Bracket</Link>
        <Link href="/live" className="hover:underline">Now Playing</Link>
        <Link href="/rules" className="hover:underline">Rules</Link>
      </div>
    </nav>
  );
}