'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'

function Navigation() {

    const pathname = usePathname()

    return (
        <nav className="navigation">
            <ul className="side-nav">
                <li className={`side-nav__item ${pathname === "/videos/guitar" ? "side-nav__item--active" : ""}`}>
                    <Link href="/videos/guitar" className="side-nav__link">
                        <span>Guitarra</span>
                    </Link>
                </li>
                <li className={`side-nav__item ${pathname === "/videos/piano" ? "side-nav__item--active" : ""}`}>
                    <Link href="/videos/piano" className="side-nav__link">
                        <span>Piano</span>
                    </Link>
                </li>
                <li className={`side-nav__item ${pathname === "/videos/violin" ? "side-nav__item--active" : ""}`}>
                    <Link href="/videos/violin" className="side-nav__link">
                        <span>Violín</span>
                    </Link>
                </li>
            </ul>

            <div className="legal">
                &copy; 2023 by Alan Flores
            </div>
        </nav>
    )
}

export default Navigation;