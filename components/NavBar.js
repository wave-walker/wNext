import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div>
        <header className="text-gray-400 bg-gray-900 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="{2}" className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="ml-3 text-xl">Wavewalker</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <Link href="/" ><a className="mr-5 hover:text-white">Home</a></Link>
              <Link href="/about" ><a className="mr-5 hover:text-white">About</a></Link>
              <Link href="/services" ><a className="mr-5 hover:text-white">Services</a></Link>
              <Link href="/pricing" ><a className="mr-5 hover:text-white">Projects</a></Link>
              <Link href="/pricing" ><a className="mr-5 hover:text-white">Pricing</a></Link>
            </nav>
            <Link href="/contact" ><button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Get a quote 
              <svg fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="{2}" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button></Link>
          </div>
        </header>
        <script src="https://cdn.tailwindcss.com"></script>

    </div>
  )
}

export default NavBar