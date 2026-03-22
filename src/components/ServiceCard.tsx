import { ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { SubscriptionService } from "../types";

interface ServiceCardProps {
  service: SubscriptionService;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group bg-white border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-emerald-600/5 transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={service.thumbnail}
          alt={service.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-emerald-100 flex items-center gap-1.5 shadow-sm">
            <Tag className="w-3 h-3" />
            {service.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-emerald-600 transition-colors">
          {service.name}
        </h3>
        
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-2xl font-bold text-emerald-600">${service.price}</span>
          <span className="text-zinc-500 text-sm">/ {service.frequency.toLowerCase()}</span>
        </div>
        
        <p className="text-zinc-600 text-sm line-clamp-2 mb-6 flex-grow">
          {service.description}
        </p>
        
        <Link
          to={`/service/${service.id}`}
          className="w-full flex items-center justify-center gap-2 bg-zinc-900 text-white py-3 rounded-xl font-medium hover:bg-emerald-600 transition-all group/btn shadow-md shadow-zinc-900/10"
        >
          View More
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
