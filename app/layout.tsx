import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"

import "./globals.css"


import { Playfair_Display, Inter, Geist as V0_Font_Geist, Geist_Mono as V0_Font_Geist_Mono, Source_Serif_4 as V0_Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _geist = V0_Font_Geist({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })


// Initialize fonts
const _geist = V0_Font_Geist({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _geistMono = V0_Font_Geist_Mono({ subsets: ['latin'], weight: ["100","200","300","400","500","600","700","800","900"] })
const _sourceSerif_4 = V0_Font_Source_Serif_4({ subsets: ['latin'], weight: ["200","300","400","500","600","700","800","900"] })

const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "AMacademy | Piano Lessons & Music Academy",
  description:
    "AMacademy offers personalized piano lessons and music training. Learn piano from an experienced instructor. Call or WhatsApp +91 8910820366.",
  keywords:
    "piano lessons, piano classes, music academy, learn piano, piano teacher, music classes, piano lessons in India, music school",
  authors: [{ name: "AMacademy" }],
  creator: "AMacademy",
  publisher: "AMacademy",
  icons: {
    icon: "/logo-black.png",
    apple: "/logo-black.png",
  },
  metadataBase: new URL("https://amacademymusic.com"),
  alternates: {
    canonical: "https://amacademymusic.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://amacademymusic.com",
    title: "AMacademy | Piano Lessons & Music Academy",
    description:
      "AMacademy offers personalized piano lessons and music training. Learn piano from an experienced instructor. Call or WhatsApp +91 8910820366.",
    siteName: "AMacademy",
    images: [
      {
        url: "/images/design-mode/96de8409-e443-4f6e-8c8a-f180738e34bd.jpg",
        width: 1200,
        height: 630,
        alt: "AMacademy Piano Teacher - Professional Music Instructor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AMacademy | Piano Lessons & Music Academy",
    description:
      "AMacademy offers personalized piano lessons and music training. Learn piano from an experienced instructor.",
    images: ["/images/design-mode/96de8409-e443-4f6e-8c8a-f180738e34bd.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicSchool",
              name: "AMacademy",
              alternateName: "All About Music",
              url: "https://amacademymusic.com",
              logo: "https://amacademymusic.com/logo-black.png",
              description:
                "AMacademy offers personalized piano lessons and music training for beginners and advanced students.",
              telephone: "+918910820366",
              email: "amacademymusic@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
                addressLocality: "India",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "your-latitude",
                longitude: "your-longitude",
              },
              areaServed: {
                "@type": "Country",
                name: "India",
              },
              priceRange: "$$",
              sameAs: [
                "https://www.instagram.com/amacademymusic",
                "https://www.facebook.com/amacademymusic",
                "https://www.youtube.com/@amacademymusic",
              ],
              courseMode: ["In-person", "Online"],
              teaches: ["Piano", "Music Theory", "Music Performance"],
            }),
          }}
        />

        {/* Uncomment when ready to activate Google Ads
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        */}

        {/* Uncomment when ready to activate Meta Pixel
        <Script id="meta-pixel">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>
        */}
      </head>
      <body className={`${playfairDisplay.variable} ${inter.variable} antialiased bg-white`}>{children}</body>
    </html>
  )
}
