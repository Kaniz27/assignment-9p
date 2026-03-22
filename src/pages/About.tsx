import { Award, Globe, Heart, ShieldCheck, Sparkles, Target, Users } from "lucide-react";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About Us | SubBox";
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-24">
      {/* Hero Section */}
      <section className="text-center space-y-8" data-aos="fade-up">
        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-bold border border-emerald-200">
          <Sparkles className="w-4 h-4" />
          Our Story
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 tracking-tight leading-tight">
          We're on a mission to <br />
          <span className="text-emerald-600">redefine discovery.</span>
        </h1>
        <p className="text-xl text-zinc-500 max-w-3xl mx-auto leading-relaxed">
          Founded in 2024, SubBox was born out of a simple idea: that everyone deserves a little surprise and joy in their mailbox every month.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12" data-aos="fade-up">
        <div className="bg-emerald-600 rounded-3xl p-12 text-white space-y-6 shadow-2xl shadow-emerald-600/20" data-aos="fade-right">
          <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p className="text-emerald-100 text-lg leading-relaxed">
            To connect people with products they love through a seamless, personalized subscription experience that sparks curiosity and brings excitement to everyday life.
          </p>
        </div>
        <div className="bg-zinc-900 rounded-3xl p-12 text-white space-y-6 shadow-2xl shadow-zinc-900/20" data-aos="fade-left">
          <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center">
            <Globe className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold">Our Vision</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            To become the world's most trusted platform for discovery, empowering small brands and delighting customers through thoughtful curation and innovation.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-zinc-200" data-aos="fade-up">
        <div className="text-center space-y-2" data-aos="zoom-in" data-aos-delay="100">
          <p className="text-4xl font-bold text-emerald-600">50K+</p>
          <p className="text-zinc-500 font-medium uppercase tracking-wider text-xs">Active Subscribers</p>
        </div>
        <div className="text-center space-y-2" data-aos="zoom-in" data-aos-delay="200">
          <p className="text-4xl font-bold text-emerald-600">200+</p>
          <p className="text-zinc-500 font-medium uppercase tracking-wider text-xs">Partner Brands</p>
        </div>
        <div className="text-center space-y-2" data-aos="zoom-in" data-aos-delay="300">
          <p className="text-4xl font-bold text-emerald-600">1M+</p>
          <p className="text-zinc-500 font-medium uppercase tracking-wider text-xs">Boxes Delivered</p>
        </div>
        <div className="text-center space-y-2" data-aos="zoom-in" data-aos-delay="400">
          <p className="text-4xl font-bold text-emerald-600">4.9/5</p>
          <p className="text-zinc-500 font-medium uppercase tracking-wider text-xs">Customer Rating</p>
        </div>
      </section>

      {/* Values Section */}
      <section className="space-y-16" data-aos="fade-up">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-zinc-900 tracking-tight">Our Core Values</h2>
          <p className="text-zinc-500">The principles that guide everything we do.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
            <div className="bg-emerald-100 w-14 h-14 rounded-2xl flex items-center justify-center text-emerald-600">
              <Heart className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900">Customer Obsession</h3>
            <p className="text-zinc-500 leading-relaxed">
              We start with the customer and work backwards. Your joy is our primary metric of success.
            </p>
          </div>
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="200">
            <div className="bg-emerald-100 w-14 h-14 rounded-2xl flex items-center justify-center text-emerald-600">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900">Integrity & Trust</h3>
            <p className="text-zinc-500 leading-relaxed">
              We are transparent about our products, pricing, and policies. We build relationships that last.
            </p>
          </div>
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="300">
            <div className="bg-emerald-100 w-14 h-14 rounded-2xl flex items-center justify-center text-emerald-600">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900">Quality Curation</h3>
            <p className="text-zinc-500 leading-relaxed">
              We don't just send products; we send experiences. Every item is vetted for quality and relevance.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-zinc-50 rounded-[3rem] p-16 space-y-16 border border-zinc-200" data-aos="fade-up">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-zinc-900 tracking-tight">Meet the Team</h2>
          <p className="text-zinc-500">The passionate people behind your favorite boxes.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Alex Rivera", role: "Founder & CEO", img: "https://picsum.photos/seed/alex/400/400" },
            { name: "Jessica Wong", role: "Head of Curation", img: "https://picsum.photos/seed/jessica/400/400" },
            { name: "David Miller", role: "Operations Director", img: "https://picsum.photos/seed/david/400/400" },
            { name: "Sarah Smith", role: "Customer Experience", img: "https://picsum.photos/seed/sarah/400/400" }
          ].map((member, idx) => (
            <div key={idx} className="group text-center space-y-4" data-aos="zoom-in" data-aos-delay={idx * 100}>
              <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-white shadow-lg group-hover:shadow-emerald-600/10 transition-all">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 text-lg">{member.name}</h4>
                <p className="text-sm text-zinc-500 font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
