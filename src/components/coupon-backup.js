import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
    faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Coupon({ store, coupon_data, tot_count, numb }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [copytext, setCopyText] = useState("Copy code");
    const isUnverified = (coupon_data.coupon_type === "code" ? false : (numb > tot_count - 3));



    setTimeout(async () => {
        if (process.browser) {
            let c_id = localStorage.getItem("copied_code");
            if (c_id == coupon_data.id) {

                await setModalOpen(true);
                setTimeout(() => {
                    // Determine the modal to open based on coupon type
                    let modalElement = coupon_data.coupon_type === "code"
                        ? document.getElementById('getCode' + c_id)
                        : document.getElementById('getDeal' + c_id);

                    if (modalElement) {
                        console.log("in")
                        const modal = new bootstrap.Modal(modalElement);
                        modal.show(); // Show the modal
                    }

                }, 500)


                localStorage.removeItem("copied_code");
            }
        }
    }, 500);



    return (
        <>
            <div key={coupon_data.id} className="coupon-item">
                <div className="isverified">
                    <span className="storeName">{store.title} Coupon</span>
                    <span className="verifiedIcon">
                        <Image
                            src={isUnverified ? "/images/unverified.svg" : "/images/verified.svg"}
                            alt={isUnverified ? "unverified-icon" : "verified-icon"}
                            width={14}
                            height={14}
                        />
                        <small> {isUnverified ? 'Unverified' : 'Verified'}</small>
                    </span>
                </div>
                <div className="couponInfo">
                    <div className="latest-coupon">
                        <div className="coupon-title">{coupon_data.discount_value || "Best Deal"}</div>
                        {/* <p className="couponDesc">{coupon_data.content}</p> */}
                        <p className="couponDesc" dangerouslySetInnerHTML={{ __html: coupon_data.content }} />
                    </div>
                    <div className="coupon-detail coupon-button-type">
                        {coupon_data.coupon_type === "code" ? (
                            <a
                                onClick={async (e) => {
                                    // Set the copied_code in localStorage (no need to await as it's synchronous)
                                    localStorage.setItem('copied_code', coupon_data.id);

                                    // Copy the coupon code to the clipboard
                                    navigator.clipboard.writeText(coupon_data.coupon_code).then(() => {
                                        //                                        console.log("Coupon code copied to clipboard");
                                    }).catch((error) => {
                                        console.error("Error copying to clipboard: ", error);
                                    });

                                    // Open the store's page in a new tab
                                    window.open(`/${store.slug}/#c=${coupon_data.id}`, "_blank");

                                    // Log the affiliate URL

                                    // Open the affiliate URL in the same window after a short delay (to ensure proper sequence)
                                    setTimeout(() => {
                                        window.open(store.affiliate_url, "_self");
                                    }, 100);  // Delay added to ensure actions don't overlap

                                }}
                                rel="nofollow"
                                data-type="code"
                                className="coupon-code coupon-button"
                                href="javscript:void()"

                            >
                                <span class="code-text" rel="nofollow">{coupon_data.coupon_code}</span>
                                <span class="get-code">Get Code</span>
                            </a>
                        ) : (
                            <a
                                onClick={async (e) => {

                                    await localStorage.setItem('copied_code', coupon_data.id)
                                    window.open(`/${store.slug}`, "_blank");
                                    setTimeout(() => {
                                        window.open(store.affiliate_url, "_self");
                                    }, 100);
                                }}
                                rel="nofollow"
                                data-type="sale"
                                className="coupon-code coupon-button"
                                href="javscript:void()"
                            >
                               
                                <span class="code-text" rel="nofollow">*****************</span>
                                <span class="get-code">Show Code</span>
                            </a>
                        )}
                    </div>
                </div>
            </div >
            <>
                {modalOpen && coupon_data.coupon_type === "code" && (
                    <div
                        className="modal fade"
                        id={`getCode${coupon_data.id}`}
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header" style={{ justifyContent: "space-between" }}>
                                    <h5 className="modal-title" id="exampleModalLabel">
                                        {coupon_data.title}
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                        onClick={() => setModalOpen(false)}
                                    />
                                </div>
                                <div className="modal-body text-center">
                                    <div className="modal-store-logo">
                                        <a href={store.affiliate_url || "#"}>
                                            <img src={store.image} alt={store.title || "Store"} />
                                        </a>
                                    </div>
                                    <div className="modalCode">
                                        <span>{coupon_data.coupon_code}</span>
                                    </div>
                                    <div
                                        className="codeCopyBtn"
                                        onClick={() => {
                                            navigator.clipboard.writeText(coupon_data.coupon_code);
                                            setCopyText("Copied");
                                        }}
                                    >
                                        <button>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="bi bi-scissors"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
                                            </svg>
                                            {copytext}
                                        </button>
                                    </div>
                                    <div className="storeBtn">
                                        <a href={store.affiliate_url || "#"}>
                                            Visit at {store.home_url || "Store"}
                                        </a>
                                    </div>
                                    <div className="isWorked">
                                        <h4>Did this worked?</h4>
                                        <div className="workedbtn">
                                            <a href="javascript:void(0)" onClick={() => setModalOpen(false)}
                                                className="btnVote">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                    fill="#0ee032"
                                                    width={16}
                                                    height={16}
                                                >
                                                    <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z" />
                                                </svg>
                                                Yes
                                            </a>
                                            <a href="javascript:void(0)" onClick={() => setModalOpen(false)}
                                                className="btnVote">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                    fill="#ff5f71"
                                                    width={16}
                                                    height={16}
                                                >
                                                    <path d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384H96c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H32C14.3 96 0 110.3 0 128V352c0 17.7 14.3 32 32 32z" />
                                                </svg>
                                                No
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer"></div>
                            </div>
                        </div>
                    </div>
                )}
            </>
            {/**********************************Coupon Pop-Up GET-deal Modal*********************************************** */}
            <>
                {(coupon_data.coupon_type == "deal" && modalOpen) &&
                    <div
                        className="modal fade"
                        id={`getDeal${coupon_data.id}`}
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content" >
                                <div className="modal-header" style={{ justifyContent: "space-between" }}>
                                    <h5 className="modal-title" id="exampleModalLabel">
                                        {coupon_data.title}
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    />
                                </div>
                                <div className="modal-body text-center">
                                    <div className="modal-store-logo">
                                        <a href="#00">
                                            <img
                                                src={`${store.image}`}
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    <div className="modalCode d-flex align-items-center justify-content-center">
                                        <span>
                                            Deal Activated{" "}
                                            <svg
                                                height={25}
                                                width={25}
                                                fill="#0ee032"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                            >
                                                <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="storeBtn">
                                        <a href={`${store.affiliate_url}`}>
                                            Redeem at {store.home_url}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={16}
                                                height={16}
                                                fill="currentColor"
                                                className="bi bi-chevron-double-right"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="isWorked">
                                        <h4>Did this worked?</h4>
                                        <div className="workedbtn">
                                            <a href="javascript:void(0)" onClick={() => setModalOpen(false)}
                                                className="btnVote">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                    fill="#0ee032"
                                                    width={16}
                                                    height={16}
                                                >
                                                    <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z" />
                                                </svg>
                                                Yes
                                            </a>
                                            <a href="javascript:void(0)" onClick={() => setModalOpen(false)}
                                                className="btnVote">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                    fill="#ff5f71"
                                                    width={16}
                                                    height={16}
                                                >
                                                    <path d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384H96c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H32C14.3 96 0 110.3 0 128V352c0 17.7 14.3 32 32 32z" />
                                                </svg>
                                                No
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer"></div>
                            </div>
                        </div>
                    </div>
                }
            </>
        </>
    );
}
