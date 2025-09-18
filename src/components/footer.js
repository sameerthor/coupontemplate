import Link from "next/link";
import Image from "next/image";


export default function Footer() {


    return (
        <>
            <>
                <footer id="footer">
                    <div className="footer-container">
                        {/* <!-- Left Section --> */}
                        <div className="footer-brand">
                        <Image
                            src={'/images/coupon-template-footer-logo.webp'}
                                width="160"
                                height="55"
                                alt="logo"
                                className="footer-logo"
                        />
                        <p>Discover exclusive deals on premium <strong>themes</strong>, <strong>fonts</strong>, 
                            <strong>plugins</strong>, and <strong>design tools</strong> to help you build stunning websites.</p>
                        {/* <div className="footer-social">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-x-twitter"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#"><i className="fab fa-wordpress"></i></a>
                        </div> */}
                        <p className="copyright">© 2025 Coupon.Template. All rights reserved.</p>
                        </div>

                        {/* <!-- Right Section (Links) --> */}
                        <div className="footer-links">
                        <div>
                            <h4>Themes</h4>
                            <a href="#">WordPress Themes</a>
                            <a href="#">Shopify Themes</a>
                            <a href="#">eCommerce Templates</a>
                            <a href="#">Portfolio Templates</a>
                        </div>
                        <div>
                            <h4>Plugins</h4>
                            <a href="#">SEO Plugins</a>
                            <a href="#">Security Plugins</a>
                            <a href="#">Performance Tools</a>
                            <a href="#">WooCommerce Add-ons</a>
                        </div>
                        <div>
                            <h4>Support</h4>
                            <a href="#">Documentation</a>
                            <a href="#">FAQs</a>
                            <a href="#">Blog</a>
                            <a href="#">Contact</a>
                        </div>
                        <div>
                            <h4>Company</h4>
                            <a href="#">About Us</a>
                            <a href="#">Terms & Conditions</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Cookie Policy</a>
                        </div>
                        </div>
                    </div>
                </footer>
            </>

        </>
    )

}
