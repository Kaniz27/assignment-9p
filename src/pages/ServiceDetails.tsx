import { ArrowLeft, CheckCircle2, MessageSquare, Send, Star, Tag } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { useAuth } from "../context/AuthContext";
import servicesData from "../data/services.json";
import { Review, SubscriptionService } from "../types";

export default function ServiceDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const [service, setService] = useState<SubscriptionService | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(5);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundService = servicesData.find((s) => s.id === id);
    if (foundService) {
      setService(foundService);
      document.title = `${foundService.name} | SubBox`;
    }
    setLoading(false);
  }, [id]);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewText.trim()) {
      toast.error("Please enter a review.");
      return;
    }

    const newReview: Review = {
      id: Date.now().toString(),
      serviceId: id!,
      userName: user?.displayName || "Anonymous",
      userPhoto: user?.photoURL || "",
      rating,
      comment: reviewText,
      date: new Date().toLocaleDateString(),
    };

    setReviews([newReview, ...reviews]);
    setReviewText("");
    setRating(5);
    toast.success("Review submitted!");
  };

  if (loading) return <Loader />;
  if (!service) return <div className="text-center py-24 text-zinc-500">Service not found.</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-zinc-500 hover:text-emerald-600 transition-colors font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-600/5 group border border-zinc-200">
          <img
            src={service.thumbnail}
            alt={service.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-6 left-6">
            <span className="bg-white/90 backdrop-blur-sm text-emerald-700 text-sm font-bold px-4 py-2 rounded-full border border-emerald-100 flex items-center gap-2 shadow-lg">
              <Tag className="w-4 h-4" />
              {service.category}
            </span>
          </div>
        </div>

        {/* Info Section */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight leading-tight">
              {service.name}
            </h1>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-emerald-600">${service.price}</span>
              <span className="text-zinc-500 text-lg">/ {service.frequency.toLowerCase()}</span>
            </div>
          </div>

          <p className="text-zinc-600 text-lg leading-relaxed">
            {service.description}
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-zinc-900 flex items-center gap-2">
              <Star className="w-5 h-5 text-emerald-600" />
              Key Features
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-zinc-600 bg-zinc-50 p-3 rounded-xl border border-zinc-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <button className="w-full bg-zinc-900 text-white py-4 rounded-2xl font-bold text-lg hover:bg-emerald-600 transition-all shadow-xl shadow-zinc-900/10 active:scale-[0.98]">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-12 border-t border-zinc-200">
        {/* Review Form */}
        <div className="lg:col-span-1 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-zinc-900 tracking-tight">Reviews</h2>
            <p className="text-zinc-500">Share your experience with this box.</p>
          </div>

          <form onSubmit={handleReviewSubmit} className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-xl shadow-emerald-600/5 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-700 ml-1">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setRating(num)}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                      rating >= num ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20" : "bg-zinc-100 text-zinc-400 hover:bg-zinc-200"
                    }`}
                  >
                    <Star className={`w-5 h-5 ${rating >= num ? "fill-current" : ""}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-zinc-700 ml-1">Your Review</label>
              <textarea
                required
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="What did you think of this service?"
                rows={4}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl p-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20"
            >
              <Send className="w-4 h-4" />
              Submit Review
            </button>
          </form>
        </div>

        {/* Review List */}
        <div className="lg:col-span-2 space-y-6">
          {reviews.length === 0 ? (
            <div className="bg-zinc-50 rounded-3xl p-12 text-center space-y-4 border border-zinc-200 border-dashed">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-zinc-400 shadow-sm">
                <MessageSquare className="w-8 h-8" />
              </div>
              <p className="text-zinc-500 font-medium italic">No reviews yet. Be the first to share your thoughts!</p>
            </div>
          ) : (
            reviews.map((review) => (
              <div key={review.id} className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm space-y-4 hover:border-emerald-200 transition-colors">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                      {review.userName[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900">{review.userName}</h4>
                      <p className="text-xs text-zinc-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < review.rating ? "fill-current" : "text-zinc-200"}`} />
                    ))}
                  </div>
                </div>
                <p className="text-zinc-600 leading-relaxed">{review.comment}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
