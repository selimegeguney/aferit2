import React from "react"
import Link from "next/link"
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"
const Header = () => {
  return (
    <header className="bg-slate-600 px-4 py-6 drop-shadow-xl sticky top-0 z-10 h-full text-2xl ">
      <div className="container flex justify-between mx-auto">
        <div className="logo text-neutral-50">AFERIT</div>
        <nav>
          <ul className="flex text-slate-400 ">
            <li className="px-3 hover:text-slate-900">
              <Link href="/">
                <AiOutlineTwitter />
              </Link>
            </li>
            <li className="px-3 hover:text-slate-900">
              <Link href="/articles">
                <AiOutlineInstagram />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
