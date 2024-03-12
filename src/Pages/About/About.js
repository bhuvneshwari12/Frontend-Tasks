import React, { Fragment } from "react";
import styles from "./About.module.css"; // Importing CSS module
import Navigation from "../../Components/Navigation/Navigation";

const About = () => {
  return (
    <Navigation>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src="https://dermacompanies.in/wp-content/uploads/2021/01/Top-Cosmetic-Manufacturers-in-Mumbai.jpg"
          alt="Cosmetics"
        />
      </div>

      <div className={styles.content}>
        <h2>EMBODY YOUR STRENGTH, YOUR BEAUTY, YOUR POWER.</h2>
        <p>
          Spiked Beaty Bar is a thoughtfully curated skincare routine for the
          ​body that addresses its specific and unique needs, ​delivering
          visible results and limitless confidence. ​ Powered by science, It
          offers high-performance formulas to ensure your ​highest performance
          at any stage. we believe that beauty is not just about makeup; it's about confidence, self-expression, and empowerment. Founded with a passion for cosmetics and a commitment to quality, BSpiked Beauty Bar is your destination for premium beauty products that inspire and enhance your natural radiance.
        </p>
        <img
          src="https://jlobeauty.com/cdn/shop/files/image_108_medium.png?v=1685064844"
          className={styles.signature}
        ></img>
        <br></br>
        <span1>Mrs XYZ</span1>
        <br></br>
        <span2> FOUNDER, BEAUTY BAR</span2>
      </div>
    </div>
</Navigation>
  );
};

export default About;
