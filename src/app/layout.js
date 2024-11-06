import "./globals.css";

export const metadata = {
  title: "TechHunters | Tech Community & Events Platform",
  description:
    "Join TechHunters - Your premier tech community hosting workshops, hackathons, speaker sessions, and innovative tech events. Connect, learn, and grow with fellow tech enthusiasts.",
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
    "developer events",
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
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-V6KDKLZBSW"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-V6KDKLZBSW');
          `}
        </script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
