import Link from "next/link";
import React from "react";

function Header() {
  return (
    <>
      <header className="bg-white shadow-md ">
        <div className="mx-auto flex h-16 w-full items-center gap-8 px-4 sm:px-6 lg:px-8">
          <span> </span>
        <Link href={"/"}>Noxel</Link>
          <Link className="block text-sky-600" href="/">
            <span>Home</span>
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/TV"
                  >
                    {" "}
                    TvShow{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/Person"
                  >
                    {" "}
                    People{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="/Movies"
                  >
                    {" "}
                    Movies{" "}
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link
                  className="block rounded-md bg-sky-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-sky-700"
                  href="/Login"
                >
                  Login
                </Link>

                <Link
                  className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-sky-600 transition hover:text-sky-600/75 sm:block"
                  href="/Register"
                >
                  Register
                </Link>
              </div>

              <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
