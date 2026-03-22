import { ArrowRight, CheckCircle2, Gift, Heart, ShieldCheck, Sparkles, Star, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCard from "../components/ServiceCard";
import servicesData from "../data/services.json";
import { SubscriptionService } from "../types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const [services, setServices] = useState<SubscriptionService[]>([]);

  useEffect(() => {
    setServices(servicesData);
    document.title = "Home | SubBox - Your Premium Subscription Hub";
  }, []);

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Slider Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="h-full w-full"
        >
          <SwiperSlide>
            <div className="relative h-full w-full">
              <img
                src="https://picsum.photos/seed/hero1/1920/1080"
                alt="Hero 1"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center p-4">
                <div className="max-w-3xl space-y-6">
                  <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                    Curated Joy, <span className="text-emerald-400">Delivered</span>
                  </h1>
                  <p className="text-xl text-zinc-200 max-w-2xl mx-auto">
                    Discover premium subscription boxes tailored to your unique interests. From beauty to tech, we've got you covered.
                  </p>
                  <Link
                    to="/register"
                    className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20"
                  >
                    Get Started Now
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full w-full">
              <img
                src="https://picsum.photos/seed/hero2/1920/1080"
                alt="Hero 2"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center p-4">
                <div className="max-w-3xl space-y-6">
                  <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                    Explore New <span className="text-emerald-400">Passions</span>
                  </h1>
                  <p className="text-xl text-zinc-200 max-w-2xl mx-auto">
                    Every month is a new adventure. Try something new and exciting with our diverse range of subscription services.
                  </p>
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 bg-white text-zinc-900 px-8 py-4 rounded-2xl font-bold hover:bg-zinc-100 transition-all shadow-xl shadow-white/10"
                  >
                    Browse Services
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative h-full w-full">
              <img
                src="https://picsum.photos/seed/hero3/1920/1080"
                alt="Hero 3"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center p-4">
                <div className="max-w-3xl space-y-6">
                  <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                    The Perfect <span className="text-emerald-400">Gift</span>
                  </h1>
                  <p className="text-xl text-zinc-200 max-w-2xl mx-auto">
                    Surprise your loved ones with a gift that keeps on giving. Choose from our wide selection of giftable boxes.
                  </p>
                  <Link
                    to="/register"
                    className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20"
                  >
                    Join the Community
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Subscription Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-bold border border-emerald-200">
            <Sparkles className="w-4 h-4" />
            Featured Services
          </div>
          <h2 className="text-4xl font-bold text-zinc-900 tracking-tight">Our Premium Subscription Boxes</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            Hand-picked selections of the finest products, delivered straight to your door every month.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} data-aos="zoom-in">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </section>

      {/* Extra Section 1: Why Choose Us */}
      <section className="bg-zinc-50 py-24 border-y border-zinc-200" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8" data-aos="fade-right">
              <h2 className="text-4xl font-bold text-zinc-900 tracking-tight leading-tight">
                Why Thousands Trust <span className="text-emerald-600">SubBox</span> Every Month
              </h2>
              <p className="text-zinc-600 text-lg">
                We take the guesswork out of discovering new products. Our team of experts curates each box with care, ensuring you only receive the best.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="100">
                  <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900">Secure Payments</h4>
                    <p className="text-sm text-zinc-500">Your transactions are always safe and encrypted.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="200">
                  <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900">Community Driven</h4>
                    <p className="text-sm text-zinc-500">Join over 50,000+ happy subscribers worldwide.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600">
                    <Gift className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900">Exclusive Perks</h4>
                    <p className="text-sm text-zinc-500">Access to member-only discounts and early releases.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="400">
                  <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900">Personalized</h4>
                    <p className="text-sm text-zinc-500">Boxes tailored to your specific tastes and needs.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative" data-aos="fade-left">
              <div className="absolute -inset-4 bg-emerald-600/10 rounded-3xl blur-2xl"></div>
              <img
                src="https://picsum.photos/seed/whyus/800/800"
                alt="Why Choose Us"
                className="relative rounded-3xl shadow-2xl border border-white"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Extra Section 2: Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-zinc-900 tracking-tight">What Our Subscribers Say</h2>
          <p className="text-zinc-500">Don't just take our word for it. Here's what our community thinks.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "Beauty Enthusiast",
              content: "The Glow Beauty Box is the highlight of my month! I've discovered so many amazing brands I never would have found otherwise.",
              rating: 5
            },
            {
              name: "Michael Chen",
              role: "Tech Professional",
              content: "As a gadget lover, the Gadget Geek Box is perfect. The items are high-quality and actually useful in my daily life.",
              rating: 5
            },
            {
              name: "Emily Davis",
              role: "Avid Reader",
              content: "Bibliophile's Retreat is a dream come true. The book selections are always spot on, and the extra treats are so thoughtful.",
              rating: 5
            }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:border-emerald-200 transition-colors" data-aos="zoom-in" data-aos-delay={idx * 100}>
              <div className="flex gap-1 text-amber-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-zinc-600 italic mb-6">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                  {testimonial.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900">{testimonial.name}</h4>
                  <p className="text-xs text-zinc-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="bg-emerald-600 rounded-3xl p-12 text-center text-white space-y-8 shadow-2xl shadow-emerald-600/30">
          <h2 className="text-4xl font-bold tracking-tight">Ready to start your journey?</h2>
          <p className="text-emerald-100 max-w-xl mx-auto text-lg">
            Join thousands of happy subscribers and get your first box delivered today. Use code <span className="font-bold text-white">WELCOME20</span> for 20% off!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border border-white/20 rounded-xl px-6 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 flex-grow"
            />
            <button className="bg-white text-emerald-600 px-8 py-3 rounded-xl font-bold hover:bg-zinc-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
