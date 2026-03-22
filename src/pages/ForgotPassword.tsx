import { ArrowLeft, Mail, Send } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

export default function ForgotPassword() {
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");
  const { resetPassword } = useAuth();

  useEffect(() => {
    document.title = "Forgot Password | SubBox";
  }, []);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      toast.success("Password reset link sent to your email!");
      // Redirect to Gmail as per requirements
      window.location.href = "https://mail.google.com";
    } catch (error: any) {
      toast.error(error.message || "Failed to send reset link");
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-24">
      <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-xl shadow-emerald-600/5 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">Reset Password</h1>
          <p className="text-zinc-500">Enter your email to receive a reset link.</p>
        </div>

        <form onSubmit={handleReset} className="space-y-6">
          <div className="space-y-1.5">
            <label className="text-sm font-semibold text-zinc-700 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20"
          >
            <Send className="w-4 h-4" />
            Send Reset Link
          </button>
        </form>

        <Link
          to="/login"
          className="flex items-center justify-center gap-2 text-zinc-500 hover:text-emerald-600 transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Login
        </Link>
      </div>
    </div>
  );
}
