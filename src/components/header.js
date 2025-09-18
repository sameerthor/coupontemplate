'use client';
import Image from "next/image";
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

    faSearch
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import axios from 'axios';
import ReactSearchBox from "react-search-box";
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();
    const [postCategories, setPostCategories] = useState([]);
    useEffect(() => {
        axios.get('https://backend.supercosts.com/post-categories')
            .then(function (response) {
                // handle success
                console.log(response.data)
                setPostCategories(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);

    const [filterdata, setFilterdata] = useState([]);
    function fetchData() {
        axios.get('https://backend.supercosts.com/store-search/')
            .then(function (response) {
                var d = response.data.map(item => { return { key: item.slug, value: item.title } })
                setFilterdata(d);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    return (
        <>
            <nav className="nav headerNav">
            <button className="navOpenBtn" aria-label="Open Navigation">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
                </svg>
            </button>
                <a href="/" className="logo">
                    <Image
                        src={'/images/coupon-template-logo.webp'}
                         width="160"
                         height="55"
                         alt="logo"
                    />
                </a>
                <ul className="nav-links">
                <button className="navCloseBtn" aria-label="Close Navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
                </svg>
        </button>

                    <li>
                        <Link className="link-hover" href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="link-hover" href="/stores">
                            Stores
                        </Link>
                    </li>
                    <li>
                        <Link className="link-hover" href="/blog">
                            Blog
                        </Link>
                    </li>
                    {/* <li>
                        <div className="dropdown dropdown-hover">
                            <a
                                className="dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Blog
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="dropdown-item" href="/blog">
                                        All Blogs
                                    </Link>
                                </li>
                                {postCategories && postCategories.map((item, index) =>
                                    <li key={index}>
                                        <Link className="dropdown-item" href={`/blog/category/${item.slug}`}>
                                            {item.title}
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </li> */}
                    <li>
                        <Link className="link-hover" href="/category">
                            Category
                        </Link>
                    </li>
                </ul>
                <button id="searchIcon" className="search-icon" aria-label="Search">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                </svg>
    </button>
                <div className="search-box">
               
                <ReactSearchBox
                    placeholder="Search Store"
                    value=""
                    className="search-box"
                    data={filterdata}
                    onFocus={() => fetchData()}
                    clearOnSelect={true}
                    onSelect={(record) => router.push('/' + record.item.key)}
                    leftIcon={<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="#2f3c97"
                        className="fa fa-search search-icon"
                        viewBox="0 0 20 20"
                    >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>}
                />
                </div>
                {/* <FontAwesomeIcon className='search-icon' id="searchIcon" icon={faSearch} /> */}
                
            </nav>

        </>
    )

}
