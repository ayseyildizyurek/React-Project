import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutContent}>
        <h2>Hakkımızda</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel
          tellus non nunc ullamcorper ullamcorper. Vivamus auctor purus nec
          sapien facilisis, vel euismod enim vehicula. Cras id tortor eget eros
          cursus vulputate. Nullam lacinia tristique odio, vitae convallis lorem
          ultricies et. Integer aliquet malesuada quam, non fringilla quam
          tristique sit amet. Duis ullamcorper arcu eu efficitur vestibulum.
        </p>
        <p>
          Phasellus eget eleifend turpis, at feugiat libero. Vivamus et arcu id
          dolor fermentum condimentum non vel quam. Sed rutrum felis non nisl
          blandit hendrerit. Nulla facilisi. Integer fermentum arcu non
          fermentum suscipit. Fusce placerat urna ut enim euismod, nec lobortis
          sapien fringilla. Aenean euismod nec nunc nec tincidunt.
        </p>
      </div>
    </div>
  );
};

export default About;
