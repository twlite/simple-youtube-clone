import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function Navbar() {
    const handleClick = (e) => {
        if (e) e.preventDefault();
        const elm = document.getElementById("searchQuery");
        if (elm && elm.value) {
            window.location.href = `/search?query=${encodeURIComponent(elm.value)}`;
        }
    };

    const handleEnter = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            handleClick();
        }
    }

    useEffect(() => {
        const q = new URLSearchParams(window.location.search).get("query");
        const elm = document.getElementById("searchQuery");

        if (q && elm) elm.value = q; 
    });

    return (
        <section>
            <nav className="relative py-6 bg-gray-800">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <Link href="/">
                        <a className="text-3xl font-bold leading-none">
                            <img className="h-10" src="/img/youtube_logo.png" alt="logo" width="auto" draggable="false" />
                        </a>
                    </Link>
                    <div className="lg:hidden">
                        <button className="navbar-burger flex items-center text-gray-400 p-3" onClick={() => document.getElementById("mobileNav").classList.remove("hidden")}>
                            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="relative mt-1 mx-auto w-3/5">
                        <input onKeyDown={handleEnter} id="searchQuery" type="text" className="font-semibold w-full pl-3 pr-10 py-2 border-2 border-gray-500 rounded-sm focus:outline-none transition-colors" placeholder="Search"/>
                        <button onClick={handleClick} className="block w-7 h-7 text-center text-xl leading-0 absolute top-2 right-2 text-gray-500 focus:outline-none hover:text-gray-900 transition-colors">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
            </nav>

            <div className="hidden navbar-menu relative z-50" id="mobileNav">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 overflow-y-auto bg-gray-800">
                    <div className="flex items-center mb-8">
                        <Link href="/">
                            <a className="mr-auto text-3xl font-bold leading-none">
                                <img className="h-7" src="/img/youtube_logo.png" alt="logo" width="auto" draggable="false" />
                            </a>
                        </Link>
                        <button className="navbar-close" onClick={() => document.getElementById("mobileNav").classList.add("hidden")}>
                            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul>
                            <li className="mb-1">
                                <Link href="/">
                                    <a className="block p-4 text-sm font-semibold text-gray-200 hover:bg-gray-200 hover:text-gray-600 rounded">
                                        Home
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    )
}
