import { useEffect } from "react";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy | SubBox";
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-zinc-900 tracking-tight">Privacy Policy</h1>
        <p className="text-zinc-500">Last updated: March 22, 2026</p>
      </div>

      <div className="prose prose-zinc max-w-none text-zinc-600 space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-900">1. Information We Collect</h2>
          <p>
            We collect personal information that you provide to us when you create an account, subscribe to our services, or contact our support team. This information includes your name, email address, shipping address, and payment details.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-900">2. How We Use Your Information</h2>
          <p>
            We use your information to provide and improve our services, process your subscriptions, and communicate with you about your account and our latest offerings. We do not sell your personal information to third parties.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-900">3. Data Security</h2>
          <p>
            We take the security of your data seriously and implement industry-standard measures to protect it from unauthorized access, loss, or misuse.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-900">4. Third-Party Services</h2>
          <p>
            We may use third-party services to process payments and analyze our website traffic. These services have their own privacy policies and we encourage you to read them.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-zinc-900">5. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal information at any time. You can do this through your account settings or by contacting our support team.
          </p>
        </section>
      </div>
    </div>
  );
}
