import React, { useEffect, useState } from "react";
import styles from "./AnimatedBackground.module.scss";
import logoSVG from "../../../public/logo.svg";

const AnimatedBackground = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [dirX, setDirX] = useState(1);
  const [dirY, setDirY] = useState(1);
  const [backgroundColor, setBackgroundColor] = useState(pallete[0]);

  const pallete = ["#ff8800", "#e124ff", "#6a19ff", "#ff2188"];
  const speed = 2;
  const svgWidth = 100; // Substitua pelo tamanho real do seu logo
  const svgHeight = 50;

  useEffect(() => {
    const dvd = document.querySelector(`.${styles.dvd}`);
    const screenWidth = document.body.clientWidth;
    const screenHeight = document.body.clientHeight;

    const getNewRandomColor = () => {
      const currentPallete = pallete.filter(
        (color) => color !== backgroundColor
      );
      const colorChoice =
        currentPallete[Math.floor(Math.random() * currentPallete.length)];
      setBackgroundColor(colorChoice);
    };

    const animate = () => {
      if (y + dvdHeight >= screenHeight || y < 0) {
        setDirY((prevDirY) => prevDirY * -1);
        getNewRandomColor();
      }
      if (x + dvdWidth >= screenWidth || x < 0) {
        setDirX((prevDirX) => prevDirX * -1);
        getNewRandomColor();
      }
      setX((prevX) => prevX + dirX * speed);
      setY((prevY) => prevY + dirY * speed);
      window.requestAnimationFrame(animate);
    };

    window.requestAnimationFrame(animate);

    return () => {
      // Clean up if the component is unmounted
      window.cancelAnimationFrame(animate);
    };
  }, [x, y, dirX, dirY, backgroundColor]);

  return (
    <div className={styles.black}>
      <div
        className={styles.dvd}
        style={{
          left: `${x}px`,
          top: `${y}px`,
          backgroundColor: backgroundColor,
          width: `${svgWidth}px`, // Ajuste conforme necessário
          height: `${svgHeight}px`, // Ajuste conforme necessário
        }}
      >
        <img
          src={logoSVG}
          alt="Logo"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
};

export default AnimatedBackground;
