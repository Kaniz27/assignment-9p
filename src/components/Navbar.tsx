import { LogIn, LogOut, Menu, User, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";
import { cn } from "../utils/cn";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "My Profile", path: "/profile", private: true },
  ];

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully!");
      navigate("/");
    } catch (error: any) {
      toast.error(error.message || "Logout failed");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-zinc-900 tracking-tight group">
            Sub<span className="text-emerald-600 group-hover:text-emerald-500 transition-colors">Box</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              (!link.private || user) && (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    cn(
                      "text-sm font-bold transition-all hover:text-emerald-600 relative py-2",
                      isActive ? "text-emerald-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-emerald-600 after:rounded-full" : "text-zinc-500"
                    )
                  }
                >
                  {link.name}
                </NavLink>
              )
            ))}
          </div>

          {/* Auth Section */}
          <div className="hidden md:flex items-center gap-4">
            {loading ? (
              <div className="w-10 h-10 rounded-full bg-zinc-100 animate-pulse"></div>
            ) : user ? (
              <div className="flex items-center gap-4">
                <div className="relative group">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-500/20 group-hover:border-emerald-500 transition-all cursor-pointer">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt={user.displayName} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    ) : (
                      <div className="w-full h-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                        {user.displayName ? user.displayName[0] : <User className="w-5 h-5" />}
                      </div>
                    )}
                  </div>
                  {/* Tooltip */}
                  <div className="absolute top-full right-0 mt-2 bg-zinc-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
                    {user.displayName || "User"}
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-zinc-100 text-zinc-700 px-4 py-2 rounded-xl font-bold hover:bg-zinc-200 transition-all"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20"
              >
                <LogIn className="w-4 h-4" />
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-zinc-500 hover:text-emerald-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-white border-b border-zinc-200 transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        )}
      >
        <div className="px-4 space-y-4">
          {navLinks.map((link) => (
            (!link.private || user) && (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "block px-4 py-2 rounded-xl text-base font-bold transition-all",
                    isActive ? "bg-emerald-50 text-emerald-600" : "text-zinc-500 hover:bg-zinc-50 hover:text-emerald-600"
                  )
                }
              >
                {link.name}
              </NavLink>
            )
          ))}
          <div className="pt-4 border-t border-zinc-100">
            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 bg-zinc-100 text-zinc-700 px-4 py-3 rounded-xl font-bold hover:bg-zinc-200 transition-all"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white px-4 py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20"
              >
                <LogIn className="w-4 h-4" />
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
