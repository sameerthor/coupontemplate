import "@/styles/site-policy.css";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from 'next-seo';

export default function about({ stores }) {
    return (
        <>
            <NextSeo
                title="Supercosts | Affiliate Disclosure"
                 description="Category Coupon Code 2025. All the coupons are tested and verified by our team."
            />
            {/* ======== Terms of use========= */}
            <section className="sitePolicy"> 
                <div className="container">                   
                    <div className="row">
                        <h1 className="text-center">Supercosts - Affiliate Disclosure Policy</h1>
                        <p>
                        Supercosts brings the latest deals and discounts by sharing third-party offers. The links you will find on our website are affiliate links meaning we may earn a commission when you purchase through them. This does not affect the price you pay - our commission is paid by the merchant at no additional cost to you. The money we earn from affiliate partnerships helps us maintain the site and continue finding deals and discounts for your savings.
                        </p>
                        <p>
                        While we appreciate it when you use our affiliate links, there is no obligation to do so. The presence of a deal or coupon on Supercosts does not imply a relationship between us and the merchant. We are just an affiliate marketing site bringing you coupons! What you buy and how it works out is totally up to you and the store you are buying from.
                        </p>
                        <p>
                        We don’t own or sell any of these products. Also we do not receive any free products or perks from companies for including them on our site. While we may receive a commission through affiliate links, our goal is to help you save money and find the best deals.
                        </p>
                        <p>
                        It’s important to note that Supercosts does not own, guarantee, or endorse any products, services, or companies mentioned on our site. We recommend that you do your own research before purchasing.
                        </p>
                        <p>
                        Please be aware that any issues regarding the product quality, delivery, or promotions are the responsibility of the seller. Make sure to review all the terms and conditions for each deal before making any purchase.
                        </p>
                        <h2>
                        Contact Us
                        </h2>
                        <p>
                        If you have any questions regarding this Affiliate Disclosure or how our affiliate partnerships work, please contact us at <a href="/contact">https://supercosts.com/contact</a>
                        </p>
                    </div>
                </div>  
            </section>  
        </>
    );
}
