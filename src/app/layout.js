import "./globals.css";

export const metadata = {
  title: "TechHunters | Tech Community & Events Platform",
  description: "Join TechHunters - Your premier tech community hosting workshops, hackathons, speaker sessions, and innovative tech events. Connect, learn, and grow with fellow tech enthusiasts.",
  keywords: [
    "tech community",
    "hackathons",
    "tech workshops",
    "speaker sessions",
    "tech events",
    "TechHunters",
    "technology meetups",
    "coding community",
    "tech learning",
    "developer events"
  ],
  twitter: {
    card: "summary_large_image",
    title: "TechHunters - Tech Community & Events",
    description: "Join us for workshops, hackathons & tech speaker sessions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
