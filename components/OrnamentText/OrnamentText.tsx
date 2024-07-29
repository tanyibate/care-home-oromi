import React from "react";
import styles from "./OrnamentText.module.scss";

const OrnamentLine = ({ color }: { color: string }) => {
  return (
    <span
      className={styles.line}
      style={{
        borderColor: color,
      }}
    ></span>
  );
};

export default function OrnamentText({
  children,
  color,
  leftOrnament,
  rightOrnament,
}: {
  children: React.ReactNode;
  color: string;
  leftOrnament: boolean;
  rightOrnament: boolean;
}) {
  return (
    <div className={styles.text_container}>
      {leftOrnament && <OrnamentLine color={color} />}
      {children}
      {rightOrnament && <OrnamentLine color={color} />}
    </div>
  );
}
