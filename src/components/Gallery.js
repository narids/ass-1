import React from "react";
import slide from "../images/slide_2.png";
import slide1 from "../images/slide_1.png"

export function Profile() {
  return <img src={slide} width={100} height={100} />;
}
export function Profile1() {
    return <img src={slide1} width={100} height={100} />;
  }
export default function Gallery() {
  return (
    <section>
        <h2>Hai anh</h2>
        <Profile/>
        <Profile/>
    </section>
  );
}
