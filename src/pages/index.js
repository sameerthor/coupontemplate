import Head from "next/head";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@/styles/home.css";
import Link from "next/link";
import moment from "moment";
import { NextSeo } from 'next-seo';

export default function Home({ categories, stores, blogs }) {
  // Helper function to validate image URLs
  const validImageSrc = (image) =>
    image && (image.startsWith("/") || image.startsWith("http"));

  return (
    <>
      <NextSeo
        title="Coupon.Template - Best Discount Code, Coupons & Promo Codes 2025"
        description="Find out the working and verified coupon codes only at Coupon.Template.com. All the coupons are tested and verified by the team."
      />
      {/* <!-- HERO SECTION --> */}
      <section id="hero">
        <div className="hero-container">
          <div className="hero-text">
            <h1>Supercharge Your Website with <span>Coupon.Template</span></h1>
            <p>Get exclusive deals on premium <strong> themes</strong>, <strong> fonts</strong>, 
              <strong> plugins</strong>, and <strong>design tools</strong>.</p>
            <button>Explore Deals</button>
          </div>
          <div className="hero-image">
             <Image
                src={'/images/hero.webp'}
                width={500}
                height={300}
                alt="hero-image"
             />
          </div>
        </div>
      </section>

      {/* <!-- ABOUT --> */}
      <section id="about">
        <h2>About Coupon.Template</h2>
        <p>At <strong>Coupon.Template</strong>, we help creators, developers, and businesses
          access premium website tools at unbeatable prices.</p>
        <p>
            At Coupon.Template, we make it easier to discover themes, plugins, fonts, and templates that elevate your projects without overspending. Whether you’re building a personal blog, a corporate website, or a full-fledged eCommerce store, our curated deals bring you the best tools at the best value.
        </p>
        <p>
            We partner with trusted developers and leading marketplaces to ensure you always get authentic, high-quality products. With exclusive discounts and updated offers, Coupon.Template helps you stay ahead in the digital space while keeping your budget in check.
        </p>
      </section>

      {/* <!-- FEATURED TOOLS --> */}
      <section id="featured">
        <h2>Featured Tools & Services</h2>
        <div className="tools-grid">
          <div className="tool-card"><h3>WordPress Plugins</h3><p>Boost site functionality.</p></div>
          <div className="tool-card"><h3>Website Templates</h3><p>Responsive templates for any niche.</p></div>
          <div className="tool-card"><h3>Fonts & Typography</h3><p>Beautiful fonts for design.</p></div>
          <div className="tool-card"><h3>Builder Tools</h3><p>Create stunning sites without coding.</p></div>
        </div>
      </section>

      {/* <!-- THEMES --> */}
      <section id="themes">
        <h2>Popular Themes</h2>
        <div className="theme-grid">
          
          <div className="theme-card">
              <div className="discountBadge">
               20% OFF
             </div>
             <Image
                src={'/images/woocommerce-theme.avif'}
                width={400}
                height={400}
                alt="theme"
             />
            <div className="content"><h3>Business Pro</h3><p>Modern theme for startups & agencies.</p></div>
          </div>
          <div className="theme-card">
            <div className="discountBadge">
               30% OFF
             </div>
              <Image
                src={'/images/jupiterx.avif'}
                width={400}
                height={400}
                alt="theme"
             />
            <div className="content"><h3>Creative Portfolio</h3><p>Showcase work beautifully.</p></div>
          </div>
          <div className="theme-card">
            <div className="discountBadge">
               40% OFF
             </div>
              <Image
                src={'/images/impreza.avif'}
                width={400}
                height={400}
                alt="theme"
             />
            <div className="content"><h3>eCommerce Hub</h3><p>Stylish theme for online stores.</p></div>
          </div>
        </div>
      </section>

       {/* <!-- Plugin --> */}
      <section>
        <h2>Top Plugins</h2>
        <div className="theme-grid">
          <div className="theme-card">
             <div className="discountBadge">
               20% OFF
             </div>
             <Image
                src={'/images/filter.avif'}
                width={400}
                height={400}
                alt="theme"
             />
            <div className="content"><h3>Filter Everything  WordPress  WooCommerce Produ</h3><p>Modern theme for startups & agencies.</p></div>
          </div>
          <div className="theme-card">
              <div className="discountBadge">
               25% OFF
             </div>
              <Image
                src={'/images/file-bird.avif'}
                width={400}
                height={400}
                alt="theme"
             />
            <div className="content"><h3>FileBird - WordPress Media Library Folders</h3><p>Showcase work beautifully.</p></div>
          </div>
          <div className="theme-card">
              <div className="discountBadge">
               30% OFF
             </div>
              <Image
                src={'/images/toolboxai.avif'}
                width={400}
                height={400}
                alt="theme"
             />
            <div className="content"><h3>ToolboxAI – AI Tools Directory SaaS</h3><p>Stylish theme for online stores.</p></div>
          </div>
        </div>
      </section>

      {/* <!-- CATEGORIES --> */}
      <section id="categories">
        <h2>Browse by Category</h2>
        <div className="category-list">
          <div className="category-item">Themes</div>
          <div className="category-item">Fonts</div>
          <div className="category-item">Plugins</div>
          <div className="category-item">Templates</div>
          <div className="category-item">Builder Tools</div>
        </div>
      </section>

      {/* <!-- NEWSLETTER --> */}
      <section id="newsletter">
        <h2>Stay Updated</h2>
        <p>Get the latest deals and tools directly in your inbox.</p>
        <form>
          <input type="email" placeholder="Enter your email" required/>
          <button type="submit">Subscribe</button>
        </form>
      </section>
    </>
  );
}

export async function getStaticProps() {
  try {
    const [categoriesRes, storesRes, blogsRes] = await Promise.all([
      fetch(`https://backend.Coupon.Template.com/categories?ordering=title`),
      fetch(`https://backend.Coupon.Template.com/stores?ordering=title`),
      fetch(`https://backend.Coupon.Template.com/posts?ordering=-updated_at`),
    ]);

    const [categories, stores, blogs] = await Promise.all([
      categoriesRes.json(),
      storesRes.json(),
      blogsRes.json(),
    ]);

    return {
      props: { categories, stores, blogs },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { props: { categories: [], stores: [], blogs: [] }, revalidate: 10 };
  }
}
