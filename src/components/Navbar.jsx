import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { upperCase } from "lodash";

function Navbar() {
  const navigate = useNavigate();

  const links = [
    { title: "Home", url: "/" },
    { title: "Popular", url: "/exclusive/sort/" + upperCase("popularity_desc") },
    { title: "Trending", url: "/exclusive/sort/" + upperCase("trending_desc") },
    { title: "Top Scored", url: "/exclusive/sort/" + upperCase("score_desc") },
    {
      title: "Favourites",
      url: "/exclusive/sort/" + upperCase("favourites_desc"),
    },
  ];

  function Search(e) {
    e.preventDefault();

    const f = document.querySelector("#query").value;

    if (f !== "") {
      navigate("/search/" + f);
    }
  }

  function toggleMenu() {
    const menu = document.querySelector(".menu");

    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      menu.classList.add("flex");
    } else {
      menu.classList.add("hidden");
      menu.classList.remove("flex");
    }
  }

  function toggleSearch() {
    const menu = document.querySelector(".search");

    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      menu.classList.add("flex");
      menu.querySelector("input").focus();
    } else {
      menu.classList.add("hidden");
      menu.classList.remove("flex");
    }
  }

  return (
    <>
      <div className="backdrop-filter backdrop-blur-sm bg-opacity-35 bg-white z-10 w-full sticky top-0 shadow-lg">
        <div className="navbar">
          <Logo />
          <ul className="md:flex flex-row gap-2 hidden ">
            {links.map((nav, i) => {
              return (
                <li key={"navlinks" + i}>
                  <Link to={nav.url}>
                    <button className="nav-link">{nav.title}</button>
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="flex flex-row gap-2">
            <li>
              <button onClick={toggleSearch} className="btn-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#ffffff"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button onClick={toggleMenu} className="btn-icon md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#ffffff"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
        <div className="menu hidden">
          <button onClick={toggleMenu} className="absolute top-0 left-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="sm:size-10 size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul>
            {links.map((nav, i) => {
              return (
                <li key={"menulink" + i}>
                  <Link className="m-3 text-lg sm:text-xl" to={nav.url}>
                    {nav.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="search flex-row hidden justify-center">
          <input
            id="query"
            placeholder="Search"
            type="text"
            className="my-2 p-2 border w-full max-w-[800px] border-black appearance-none focus:outline-none"
          />
          <button onClick={Search} className=" my-2 btn-icon rounded-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#ffffff"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
