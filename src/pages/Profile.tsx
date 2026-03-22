import { Camera, Mail, Save, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, updateUserProfile } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [email, setEmail] = useState(user?.email || "");

  useEffect(() => {
    document.title = "My Profile | SubBox";
    if (user) {
      setName(user.displayName || "");
      setPhotoURL(user.photoURL || "");
      setEmail(user.email || "");
    }
  }, [user]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateUserProfile(name, photoURL);
      toast.success("Profile updated successfully!");
    } catch (error: any) {
      toast.error(error.message || "Update failed");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-24 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-zinc-900 tracking-tight">My Profile</h1>
        <p className="text-zinc-500">Manage your account information and preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-xl shadow-emerald-600/5 text-center space-y-6">
            <div className="relative inline-block group">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg bg-emerald-100 flex items-center justify-center text-emerald-700 text-4xl font-bold mx-auto">
                {photoURL ? (
                  <img src={photoURL} alt={name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                ) : (
                  name ? name[0] : <User className="w-12 h-12" />
                )}
              </div>
              <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <Camera className="w-6 h-6 text-white" />
              </div>
            </div>
            
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-zinc-900">{name || "Your Name"}</h2>
              <p className="text-sm text-zinc-500 flex items-center justify-center gap-1.5">
                <Mail className="w-3.5 h-3.5" />
                {email || "your@email.com"}
              </p>
            </div>
          </div>
        </div>

        {/* Edit Form */}
        <div className="lg:col-span-2">
          <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-xl shadow-emerald-600/5 space-y-8">
            <h3 className="text-xl font-bold text-zinc-900">Edit Information</h3>
            
            <form onSubmit={handleUpdate} className="space-y-6">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-zinc-700 ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-zinc-700 ml-1">Photo URL</label>
                <div className="relative">
                  <Camera className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                  <input
                    type="url"
                    required
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                    placeholder="https://example.com/photo.jpg"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-zinc-700 ml-1 opacity-50">Email Address (Read-only)</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                  <input
                    type="email"
                    disabled
                    value={email}
                    className="w-full bg-zinc-100 border border-zinc-200 rounded-xl py-3 pl-12 pr-4 text-zinc-500 cursor-not-allowed"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20"
              >
                <Save className="w-4 h-4" />
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
