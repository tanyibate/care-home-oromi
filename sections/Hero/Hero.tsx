import React from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";
import OrnamentText from "@/components/OrnamentText/OrnamentText";
import Button from "@/components/Button/Button";
import DownIcon from "@/components/DownIcon/DownIcon";

export default function Hero({ image }: { image: string }) {
  return (
    <section className={styles.hero_container}>
      <Image
        src={image}
        alt="hero"
        objectFit="cover"
        objectPosition="80% 100%"
        fill
      />
      <div className={styles.content}>
        <OrnamentText color="white" leftOrnament rightOrnament>
          <h1 className={styles.motto}>Caring with mercy</h1>
        </OrnamentText>
        <div className={styles.header}>
          Compassionate Care, Every Step Of The Way
        </div>
        <div className={styles.description}>
          Our dedicated team is here to provide exceptional care at every stage.
          We focus on creating a nurturing environment where every resident
          feels valued and supported. Whether it's through personalized care
          plans or engaging activities, we are committed to enhancing the
          quality of life for all our residents.{" "}
        </div>
        <div className={styles.contact_us_button_container}>
          <Button label="Learn More" />
        </div>
        <a href="#about">
          <DownIcon />
        </a>
      </div>
      <div className={styles.overlay}></div>
    </section>
  );
}
