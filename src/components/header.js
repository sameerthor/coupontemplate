'use client';

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
            <nav className="nav">
                <i className="fa fa-bars navOpenBtn" aria-hidden="true" />
                <a href="/" className="logo">
                    Super<span>Costs</span>
                </a>
                <ul className="nav-links">
                    <i className="fa fa-times navCloseBtn" aria-hidden="true" />
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
                    </li>
                    <li>
                        <Link className="link-hover" href="/category">
                            Category
                        </Link>
                    </li>
                </ul>
                {/* <FontAwesomeIcon className='search-icon' id="searchIcon" icon={faSearch} /> */}
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
            </nav>

        </>
    )

}
