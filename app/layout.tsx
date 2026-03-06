import type { Metadata } from "next"
import { Inter, Instrument_Serif } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/layout/ThemeProvider"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
})

const SITE_URL = "https://toddboonyayoi.com"

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Suraphoj Boonyayoi",
  alternateName: "Todd Boonyayoi",
  url: SITE_URL,
  image: `${SITE_URL}/images/profile-2.jpg`,
  jobTitle: "MBA Candidate, Product Manager",
  description:
    "MBA candidate at Columbia Business School with 7+ years building fintech and blockchain products in Southeast Asia. Targeting PM and AI Product roles.",
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Columbia Business School" },
    { "@type": "CollegeOrUniversity", name: "Chulalongkorn University" },
  ],
  sameAs: [
    "https://www.linkedin.com/in/suraphojb/",
    "https://github.com/suraphojb",
  ],
  knowsAbout: [
    "Product Management",
    "Artificial Intelligence",
    "Fintech",
    "Blockchain",
    "Product Strategy",
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Todd Boonyayoi — MBA Candidate | Product & AI Strategy",
    template: "%s | Todd Boonyayoi",
  },
  description:
    "MBA candidate at Columbia Business School with 7+ years building fintech and blockchain products in Southeast Asia. Targeting PM and AI Product roles.",
  keywords: [
    "Todd Boonyayoi",
    "Suraphoj Boonyayoi",
    "Todd Boonyayoi portfolio",
    "Suraphoj Boonyayoi portfolio",
    "Columbia Business School MBA",
    "Product Manager",
    "AI Product Manager",
    "Fintech Product Manager",
    "MBA candidate",
    "Product Strategy",
    "LINE BK",
    "KUBCHAIN",
    "Thailand",
  ],
  authors: [{ name: "Todd Boonyayoi", url: SITE_URL }],
  creator: "Todd Boonyayoi",
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Todd Boonyayoi",
    title: "Todd Boonyayoi — MBA Candidate | Product & AI Strategy",
    description:
      "MBA candidate at Columbia Business School with 7+ years building fintech and blockchain products in Southeast Asia. Targeting PM and AI Product roles.",
    images: [
      {
        url: "/images/profile-2.jpg",
        width: 1200,
        height: 630,
        alt: "Todd Boonyayoi — MBA Candidate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Todd Boonyayoi — MBA Candidate | Product & AI Strategy",
    description:
      "MBA candidate at Columbia Business School with 7+ years building fintech and blockchain products in Southeast Asia.",
    images: ["/images/profile-2.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
