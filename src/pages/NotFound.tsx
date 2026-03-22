import { Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-9xl font-bold text-emerald-600">404</h1>
      <p className="text-2xl font-semibold mt-4 text-zinc-800">Oops! Page Not Found</p>
      <p className="text-zinc-500 mt-2 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="mt-8 flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20"
      >
        <Home className="w-5 h-5" />
        Back to Home
      </Link>
    </div>
  );
}
