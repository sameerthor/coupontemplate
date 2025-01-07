import "@/styles/site-policy.css";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from 'next-seo';

export default function about({ stores }) {
    return (
        <>
            <NextSeo
                title="Supercosts | Privacy Policy"
                 description="Category Coupon Code 2025. All the coupons are tested and verified by our team."
            />
            {/* ========privacy policy========= */}
            <section className="sitePolicy"> 
                <div className="container">                   
                    <div className="row">
                        <h1 className="text-center">Supercosts Privacy Policy                        </h1>
                        <p>
                        Supercosts values your privacy. This privacy policy describes how we collect, use, and protect your personal information when you access our website and use our services. By accessing Supercosts, you agree to the terms outlined in this policy.


                        </p>
                        <h2>
                        1. Information We Collect

                        </h2>
                        <p>
                         We collect two types of information: 

                        </p>
                       
            
                        <ul>
                            <li><strong>Personal Information:</strong> Personal information refers to your name, email address, or any other personal details you share with us. This includes any details that you provide when you sign up for our newsletter, create an account or contact us.

                            </li>
                            <li> <strong>Non-Personal Information: </strong> Non-Personal Information: We also gather data automatically while you interact with our website. This includes IP address, the type of your browser, your device information, and location. We may also collect information about the way you are using the site and services offered by us including pages visited, features used, and the duration of your visits.
                            </li> 
                        </ul>
                        <h2>
                            
                        How We Use Your Information

                        </h2>
                        <p>
                            The information we collect helps us to: 
                        </p>
                        <ul>
                            <li>Provide you with relevant coupons, deals and promotions.</li>
                            <li>Personalize your experience on our website.</li>
                            <li>Improve the functionality and content of Supercosts. </li>
                            <li>Prevent fraudulent activities and protect the security of our users. </li>
                            <li>Send you promotional emails, newsletters and other communications (if you opt-in). </li>
                        </ul>
                        <h2>
                            
                        Sharing of Information

                        </h2>
                        <p>
                        We do not sell or trade your personal information to any third party. However, we may share data with trusted third party service providers who assist us in operating our website or conducting our business as long as these parties agree to keep your information confidential. We may also share your data in response to legal requirements or to protect our rights, property or safety. 
                        </p>
                        <h2>
                            
                        Data Security

                        </h2>
                        <p>
                        We take reasonable measures to protect your information from unauthorized access, use or disclosure such as:

                        </p>
                        <ul>
                            <li><strong> Verified</strong> 
                            Encryption: Using encryption technologies to protect sensitive information.
                            </li>
                            <li><strong> Access Controls:</strong> 
                             Restricting access controls to limit access to your personal information. 

                            </li>
                            <li><strong> Regular Monitoring:</strong> 
                             Regularly monitoring our systems for security vulnerabilities. 
                            </li>
                           
                        </ul>
                        <p>
                        While we strive to protect your data, no transmission over the internet is 100% secure and we cannot guarantee absolute security.

                        </p>
                        <h2>
                            
                            Children's Privacy

                        </h2>
                        <p>
                            The site and services are not meant for minors. We do not knowingly collect personal information from children under the age of 13. If we become aware that a child under 13 years old has provided us with personal data, we will take steps to delete such information from our database. 
                        </p> 
                        <h2>
                            
                        Your Rights and Choices

                        </h2> 
                        <p>
                        You have the right to: 

                        </p>   
                        <ul>
                            <li> Access and update the personal information we hold about you </li>
                            <li> Request correction or deletion of your personal data
                            </li>
                            <li>Opt out of marketing communications at any time by following the unsubscribe link in our emails. 
                            </li>
                        </ul>
                        <p>
                        To exercise any of these rights, please contact us via the details provided below. 

                        </p>  
                        <h2>
                            
                        Changes to this Privacy Policy

        
                        </h2>
                        <p>
                             We may update this Privacy Policy from time to time. When any changes are made to our policy, we will notify you by posting the revised policy on this page and we encourage you to review it regularly. Under specific instances, we also send an email notification to your e-mail inbox. We encourage you to review this page often to update yourselves on changes made. 
                        </p>
                        <p>
                        If you disagree with any updates, please let us know to discontinue your use of our services and contact us to remove your personal information you have shared with us. 

                        </p>
                        <h2>
                            
                        Contact Us

    
            
                            </h2>
                        <p>
                            If you have any questions or concerns about our Privacy  or how your data is handled, contact us at <a href="/contact">https://supercosts.com/contact</a>
                        </p>
                        <p>
                            By using Supercosts, you agree to this Privacy Policy. 
                        </p>
                    </div>
                </div>  
            </section>  
        </>
    );
}
