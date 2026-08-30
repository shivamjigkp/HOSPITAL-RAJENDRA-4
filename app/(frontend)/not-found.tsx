import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Rajendra Hospital",
};

export default function NotFound() {
  return (
    <section className="py-32 bg-white text-center">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-8xl mb-6">🏥</div>
        <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or may have been moved.
          Use the links below to navigate back.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            href="/departments"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors"
          >
            View Departments
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
