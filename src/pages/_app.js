import 'bootstrap/dist/css/bootstrap.css';
import "@/styles/globals.css";
import "@/styles/montserrat.css";
import { Montserrat } from 'next/font/google';
import Head from "next/head";
import Script from 'next/script';
import { useEffect, useState } from "react";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config, dom } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Montserrat({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  const [hasConsent, setHasConsent] = useState(null); // null for undecided

  useEffect(() => {
    // Check for Google Analytics consent in localStorage
    window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.min.js");

    const consent = localStorage.getItem('ga_consent');
    if (consent === 'granted') {
      setHasConsent(true);
    } else if (consent === 'denied') {
      setHasConsent(false);
    }
  }, []);

  const handleAccept = () => {
    setHasConsent(true);
    localStorage.setItem('ga_consent', 'granted');
  };

  const handleReject = () => {
    setHasConsent(false);
    localStorage.setItem('ga_consent', 'denied');
  };

  return (
    <main className={inter.className}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <style>{dom.css()}</style>
      </Head>

      <Header />

      {/* Google Analytics - Only load if user consents */}
      {hasConsent && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-S35JBVCMSK"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S35JBVCMSK');
            `}
          </Script>
        </>
      )}

      {/* Consent Banner */}
      {hasConsent === null && (
        <div className="consent-banner">
          <p>We use cookies to enhance your experience. Do you consent to analytics tracking?</p>
          <button onClick={handleAccept} className="btn btn-primary">
            Accept
          </button>
          <button onClick={handleReject} className="btn btn-secondary">
            Reject
          </button>
        </div>
      )}

      <Component {...pageProps} />

      <Footer />
    </main>
  );
}
