export interface SubscriptionService {
  id: string;
  thumbnail: string;
  name: string;
  category: string;
  price: number;
  frequency: string;
  description: string;
  features: string[];
}

export interface Review {
  id: string;
  serviceId: string;
  userName: string;
  userPhoto: string;
  rating: number;
  comment: string;
  date: string;
}

export interface UserProfile {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}
