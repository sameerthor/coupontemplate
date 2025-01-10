import "@/styles/site-policy.css";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from 'next-seo';

export default function about({ stores }) {
    return (
        <>
            <NextSeo
                title="Supercosts | Cookie Policy"
                 description="Category Coupon Code 2025. All the coupons are tested and verified by our team."
            />
            {/* ========Cookie policy========= */}
            <section className="sitePolicy"> 
                <div className="container">                   
                    <div className="row">
                        <h1 className="text-center">Supercosts Cookie Policy</h1>
                        <p>
                        We value your privacy at Supercosts and ensure transparency regarding how we use cookies and similar technologies on our website. This Cookie Policy outlines what cookies are and how we use them on our website (<a href="/">Supercosts.com</a>).
                        </p>
                        <h2>
                        What are Cookies? 
                        </h2>
                     
                       
                        <p>
                        Cookies are small text files saved on your device - computer, smartphone or tablet when you visit a website. They assist websites to remember information about your visit such as your preferences, browsing history and language settings. 

                        </p>
                        <h2>
                          How We Use Cookies

                        </h2>
                        <p>
                        Cookies on Supercosts are used to: 
                        </p>
            
                        <ul>
                            <li>Improve site performance and functionality
                            </li>
                            <li>Remember your preferences and improve your user experience</li>
                            <li>Analyze traffic patterns and user behavior for site improvement
                            </li>
                            <li>Personalize offers as per your browsing behavior</li>
                        </ul>
                        <h2>
                        Third-Party Cookies
                        </h2>
                        <p>
                        We may use third party service providers to place cookies on your device. The third party may use Cookies to track your browsing activity across different websites and provide targeted advertising. These cookies are governed by the third party policies, and we recommend our visitors to review their privacy policies for more information. 

                        </p>
                        <h2>
                        Managing Cookies
                        </h2>
                        <p>
                        You have control over how cookies are used on Supercosts. Most browsers automatically accept cookies but you can modify your browser settings to block or delete cookies. You can usually find cookie settings in the “Preferences” or “Settings” menu of your browser. You can choose to:
                        </p>
                        <ul>
                            <li>Block all cookies entirely. </li>
                            <li>Accept all cookies and choose which cookies to allow.</li>
                            <li>Block only third party cookies.</li>
                        </ul>
                        <p>
                        Please note that disabling cookies may affect the functionality and your experience on the website. 

                        </p>
                        <h2>
                        Changes to this Cookie Policy
                        </h2>
                        <p>
                        Supercosts may update this Cookie Policy from time to time. We recommend you to review this policy periodically to stay informed about how we use cookies. We will notify any changes by posting the revised policy on the site.

                        </p>
                        <h2>
                            Contact Us
                        </h2>
                        <p>
                            If you have questions about this Cookie policy, contact us at <a href="/contact">https://supercosts.com/contact</a>
                        </p>
                        
                    </div>
                </div>  
            </section>  
        </>
    );
}
