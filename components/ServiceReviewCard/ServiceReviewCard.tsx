import React from "react";
import Image from "next/image";
import styles from "./ServiceReviewCard.module.scss";
import heroImage from "@/public/hero-image.jpg";

export default function ServiceReviewCard() {
  return (
    <div className={styles.container}>
      <div className={styles.underlay}></div>
      <div className={styles.image_container}>
        <Image
          fill
          src={heroImage}
          alt="woman helping man"
          className="rounded"
        ></Image>
      </div>
    </div>
  );
}
