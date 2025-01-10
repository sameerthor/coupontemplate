import "@/styles/site-policy.css";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from 'next-seo';

export default function about({ stores }) {
    return (
        <>
            <NextSeo
                title="Supercosts | Terms of use"
                 description="Category Coupon Code 2025. All the coupons are tested and verified by our team."
            />
            {/* ======== Terms of use========= */}
            <section className="sitePolicy"> 
                <div className="container">                   
                    <div className="row">
                        <h1 className="text-center">Supercosts - Terms Of Use</h1>
                        <p>
                            Welcome to Supercosts! These Terms of Use explain how you use our website and the services we offer. By accessing our website you agree to comply with the following terms and conditions. Please read this agreement carefully before using our website
                        </p>
                        <h2>
                        Acceptance of Terms 
                        </h2>
                     
                       
                        <p>
                        By visiting and using Supercosts, you accept and agree to be bound by these Terms of Use. If in case you do not agree with any part of these terms, please do not use our website. 


                        </p>
                        <h2>
                        Purpose of the Website


                        </h2>
                        <p>
                        Supercosts brings coupons, deals, and promotional offers from third-party retailers to its users. We do not directly sell any products or services. We aim to help you save money by offering easy access to discounts. 
                        </p>
                        <h2>
                             Use of the Website

                        </h2>
                        <ul>
                            
                            <li>You must be at least 18 years old to use our website.</li>
                            <li>You agree to use Supercosts only for personal, non-commercial purposes.</li>
                            <li>You agree to not use the website in any way that may harm, disrupt or impair its operation or any user’s experience. 
                            </li>
                           
                        </ul>
                        <h2>
                        Coupon Validity and Accuracy


                        </h2>
                       
                        <p>
                        We strive to provide accurate and up-to-date coupons and offers. However, we cannot guarantee that coupons or deals listed on our site are valid or accurate. Coupons and offers are provided by third parties and may be subject to their own terms and conditions. 



                        </p>
                        <h2>
                        User Conduct

                        </h2>
                        <p>
                        You agree not to: 

                        </p>
                        <ul>
                            
                            <li>Post or transmit any harmful, unlawful or offensive content. 
                            </li>
                            <li>Attempt to gain unauthorized access to our systems or interfere with the operation of the website.
                            </li>
                            <li>Use any automated means (such as bots or scrapers) to collect information from the website.
                            </li>
                            <li>Violate other user's right to privacy.
                            </li>
                           
                        </ul>
                        <h2>
                        Third-Party Links
                        </h2>
                        <p>
                        Supercosts contains links to third party websites or services. We are not responsible for the content, privacy policies or practices of these third-party sites. Your interactions with these sites are solely between you and the third-party. 

                        </p>
                        <h2>
                        Intellectual Property Rights
                        </h2>
                        <p>
                        All content on our website including logos, text, images or graphics is the property of Supercosts. You may not use, copy or distribute any content without our prior consent. 

                        </p>
                        <h2>
                        Limitation Of Liability

                        </h2>
                        <p>
                        Supercosts is not responsible for any losses, damage or issues that may arise from the use of our website or from third-party retailers. We provide the site and its content “as is” without any warranties. 
                        </p>
                        <h2>
                        Changes to Terms of Use


                        </h2>
                        <p>
                        We may update or modify these Terms of Use from time to time. Any changes will be posted on this page and your continued use of the site after the changes take effect means your acceptance of the revised terms. We recommend you to review this page regularly for any updates/changes. 

                        </p>
                        <h2>
                        Contact Us


                        </h2>
                        <p>
                        If you have any questions or concerns about these Terms of Use, please contact us at  <a href="/contact">https://supercosts.com/contact</a>
                        </p>
                        <p>
                        Thank you for using Supercosts! :)

                        </p>
                        
                    </div>
                </div>  
            </section>  
        </>
    );
}
