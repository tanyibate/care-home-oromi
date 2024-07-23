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
          Lorem ipsum dolor sit amet consectetur. Volutpat morbi dictum sed
          turpis mattis id sed. Nunc sed convallis interdum vitae sit
          suspendisse eget nulla. Habitant tempus lectus eget pretium placerat
          vulputate.
        </div>
        <div className={styles.contact_us_button_container}>
          <Button label="Learn More" />
        </div>
        <DownIcon />
      </div>
      <div className={styles.overlay}></div>
    </section>
  );
}
