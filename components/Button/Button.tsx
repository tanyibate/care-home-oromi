import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  light?: boolean;
  label: string;
  href?: string;
  onClick?: () => void;
};

const Button = ({ light, label, href, onClick }: ButtonProps) => {
  return (
    <a href={href} onClick={onClick}>
      <button
        className={`${styles.button} ${light ? styles.light : styles.dark}`}
      >
        {label}
      </button>
    </a>
  );
};

export default Button;
