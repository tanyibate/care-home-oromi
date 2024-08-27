import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  light?: boolean;
  label: string;
  href?: string;
  onClick?: () => void;
  newTab?: boolean;
};

const Button = ({ light, label, href, onClick, newTab }: ButtonProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener" : undefined}
    >
      <button
        className={`${styles.button} ${light ? styles.light : styles.dark}`}
      >
        {label}
      </button>
    </a>
  );
};

export default Button;
