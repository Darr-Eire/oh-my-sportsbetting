// components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#0d0d2b] border-b border-[#1f1f3a] shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-yellow-400">
          OhMySports
        </Link>
        <nav className="space-x-4 text-sm">
          <Link href="/sports/football" className="text-cyan-300 hover:underline">
            Football
          </Link>
          <Link href="/sports/basketball" className="text-cyan-300 hover:underline">
            Basketball
          </Link>
          <Link href="/sports/ufc" className="text-cyan-300 hover:underline">
            UFC
          </Link>
          <Link href="/lottery" className="text-cyan-300 hover:underline">
            Lottery
          </Link>
        </nav>
      </div>
    </header>
  );
}
