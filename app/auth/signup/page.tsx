import { SignUpForm } from "components/auth/SignUpForm";
import { Metadata } from "next";
import JsonLd from "components/SEO/JsonLd";

export const metadata: Metadata = {
  title: "Sign Up | Clami",
  description: "Create your Clami account and start using AI-powered flashcards for focused, fast learning.",
  keywords: ["signup", "register", "create account", "flashcard app", "learning tool"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Sign Up | Clami",
    description: "Create your Clami account and start using AI-powered flashcards for focused, fast learning.",
    url: "https://clami.app/auth/signup",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dyu7ogoqc/image/upload/v1754105180/Screenshot_2025-08-01_232455_n6m6gj.png",
        width: 1200,
        height: 630,
        alt: "Clami Sign Up",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign Up | Clami",
    description: "Create your Clami account and start using AI-powered flashcards for focused, fast learning.",
    images: ["https://res.cloudinary.com/dyu7ogoqc/image/upload/v1754105180/Screenshot_2025-08-01_232455_n6m6gj.png"],
  },
};

export default function Page() {
  const signupPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sign Up | Clami",
    "description": "Create your Clami account and start using AI-powered flashcards for focused, fast learning.",
    "url": "https://clami.app/auth/signup",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Clami",
      "url": "https://clami.app"
    }
  };

  return (
    <div className="min-h-svh bg-gradient-to-b from-background to-muted flex flex-col items-center justify-center p-4 md:p-8">
      <JsonLd data={signupPageSchema} />
      <div className="w-full max-w-sm mx-auto">
        <SignUpForm />
      </div>
    </div>
  );
}
