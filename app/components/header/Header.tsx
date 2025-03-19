"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import Button from "../button/Button";
import { MdAddIcCall } from "react-icons/md";
import { navMenus } from "../../lib/constants";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";
import { useState } from "react";
import "./Header.scss";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const handleMenuOpen = () => {
    setIsMobileMenu(true);
  };
  const handleMenuClose = () => {
    setIsMobileMenu(false);
  };
  const pathname = usePathname();
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <Link href="/">
              <Image src={Logo} alt="DRX" height={50} />
            </Link>
          </div>
          <ul className="navigations">
            {navMenus.map((menu, index) => {
              return (
                <li key={menu?.id || index} className="nav-item">
                  <Link
                    href={menu?.link || "#"}
                    className={
                      pathname === menu?.link ? "nav-link active" : "nav-link"
                    }
                  >
                    <span className="icon menu-icon">{menu?.icon}</span>
                    <span className="menu-name">{menu.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="header-actions">
            <Button
              text="Hire Me"
              link="tel:+917271053944"
              icon={<MdAddIcCall />}
              isButton={false}
            />
            <Button
              icon={<RxHamburgerMenu />}
              isButton={true}
              onClick={handleMenuOpen}
              className="menu-toggler"
            />
          </div>
        </nav>
      </header>
      {isMobileMenu && (
        <header className="mobile-header">
          <Button
            icon={<RiCloseLargeLine />}
            isButton={true}
            onClick={handleMenuClose}
            className="menu-toggler"
          />
          <nav className="mobile-navbar">
            <ul className="menus">
              {navMenus.map((menu, index) => {
                return (
                  <li key={menu?.id || index} className="nav-item">
                    <Link
                      href={menu?.link || "#"}
                      className={
                        pathname === menu?.link ? "nav-link active" : "nav-link"
                      }
                      onClick={handleMenuClose}
                    >
                      <span className="icon menu-icon">{menu?.icon}</span>
                      <span className="menu-name">{menu.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
      )}
    </>
  );
}
