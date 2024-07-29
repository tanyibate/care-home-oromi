import Button from "@/components/Button/Button";
import React from "react";
import styles from "./Navbar.module.scss";

type Link = {
  href: string;
  label: string;
};

type NavbarProps = {
  links: Link[];
};

const Navbar = ({ links }: NavbarProps) => {
  return (
    <header aria-label="navbar" className={styles.navbar}>
      <div></div>
      <nav className={styles.nav_links}>
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <Button label="Contact Us" href="#contact-us-section" />
    </header>
  );
};

export default Navbar;
