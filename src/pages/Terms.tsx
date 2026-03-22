import { useEffect } from "react";

export default function Terms() {
  useEffect(() => {
    document.title = "Terms & Conditions | SubBox";
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-zinc-900 tracking-tight">Terms & Conditions</h1>
        <p className="text-zinc-500">Last updated: March 22, 2026</p>
      </div>

      <div className="prose prose-zinc max-w-none text-zinc-600 space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-900">1. Introduction</h2>
          <p>
            Welcome to SubBox. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using our platform.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-900">2. Subscription Services</h2>
          <p>
            SubBox provides a platform for users to subscribe to various curated boxes. By subscribing, you agree to the recurring billing cycle associated with your chosen service. You can cancel your subscription at any time through your profile settings.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-900">3. User Accounts</h2>
          <p>
            To access certain features of our platform, you must create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-900">4. Payments and Refunds</h2>
          <p>
            All payments are processed securely through our third-party payment providers. Refunds are handled on a case-by-case basis in accordance with our refund policy. Please contact our support team for any billing inquiries.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-900">5. Limitation of Liability</h2>
          <p>
            SubBox shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services.
          </p>
        </section>
      </div>
    </div>
  );
}
