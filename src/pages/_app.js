import 'bootstrap/dist/css/bootstrap.css';
import "@/styles/globals.css";
import "@/styles/montserrat.css";
import { Montserrat } from 'next/font/google'
import Head from "next/head";
import Script from 'next/script';
import { useEffect } from "react"
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config, dom } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import Header from "@/components/header";
import Footer from "@/components/footer";
const inter = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  useEffect(() => {
   window.bootstrap= require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <main className={inter.className}>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
            <style>{dom.css()}</style>
            <script src="/custom.js" defer></script>
          </Head>

      <Header />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-S35JBVCMSK"
        strategy="lazyOnload" defer
      />
      <Script id="google-analytics" strategy="lazyOnload" defer>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-S35JBVCMSK');
        `}
      </Script>
      <Component {...pageProps} />
      <Script
        id="custom-js"
        strategy="lazyOnload" // Ensures it loads after the page
        onLoad={() => console.log("Custom JS Loaded")} // Optional: Debugging
      >
        {`
          (function () {
            // Ensure variables are declared only once
            const nav = document.querySelector(".nav");
            const searchIcon = document.querySelector("#searchIcon");
            const navOpenBtn = document.querySelector(".navOpenBtn");
            const navCloseBtn = document.querySelector(".navCloseBtn");

            if (nav && searchIcon && navOpenBtn && navCloseBtn) {
              // Handle search icon click
              searchIcon.addEventListener("click", () => {
                nav.classList.toggle("openSearch");
                nav.classList.remove("openNav");

                // Toggle search icon class
                if (nav.classList.contains("openSearch")) {
                  searchIcon.classList.replace("fa-search", "fa-times");
                  return;
                }
                searchIcon.classList.replace("fa-times", "fa-search");
              });

              // Handle nav open button click
              navOpenBtn.addEventListener("click", () => {
                nav.classList.add("openNav");
                nav.classList.remove("openSearch");
                searchIcon.classList.replace("fa-times", "fa-search");
              });

              // Handle nav close button click
              navCloseBtn.addEventListener("click", () => {
                nav.classList.remove("openNav");
              });
            }

            // ===============Dropdown expand on hover============
            document.addEventListener("DOMContentLoaded", function () {
              // Add hover action for dropdowns
              const dropdownHover = document.querySelectorAll(".dropdown-hover");

              dropdownHover.forEach((dropdown) => {
                dropdown.addEventListener("mouseover", function () {
                  const menu = dropdown.querySelector(".dropdown-menu");
                  const toggle = dropdown.querySelector(".dropdown-toggle");
                  if (menu && toggle) {
                    menu.classList.add("show");
                    toggle.classList.add("show");
                    toggle.setAttribute("aria-expanded", true);
                  }
                });

                dropdown.addEventListener("mouseout", function () {
                  const menu = dropdown.querySelector(".dropdown-menu");
                  const toggle = dropdown.querySelector(".dropdown-toggle");
                  if (menu && toggle) {
                    menu.classList.remove("show");
                    toggle.classList.remove("show");
                    toggle.setAttribute("aria-expanded", false);
                  }
                });
              });
            });
          })();
        `}
      </Script>
      <Footer />
    </main>)
}
