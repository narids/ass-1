import React from "react";
import slide from "../images/slide_2.png";

export function Profile() {
  return <img src={slide} width={100} height={100} />;
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
