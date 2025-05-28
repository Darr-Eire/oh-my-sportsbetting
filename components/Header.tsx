import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#0a1024] border-b border-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Hamburger */}
        <button
          className="text-white text-2xl hover:text-electricCyan transition"
          aria-label="Menu"
        >
          ☰
        </button>

        {/* Center Title */}
        <h1 className="text-lg sm:text-xl font-bold tracking-wide text-white font-futuristic">
          OhMySportsbetting
        </h1>

        {/* Login */}
        <Link href="/login">
          <button className="text-sm px-4 py-1 bg-electricCyan text-white font-semibold rounded-full hover:brightness-110 transition">
            Login
          </button>
        </Link>
      </div>
    </header>
  );
}
