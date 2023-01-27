import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.css";

function Banner() {
  return (
    <>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center h-screen">
        <div className="absolute top-0 w-full h-screen bg-center bg-cover bg-[url('https://images.ctfassets.net/u1nb1km7t5q7/7zLehBUOaDRgPpusTiGR0t/d87455b96d2a4a2aa712b39613a3ab27/Aesop_Sage_Zinc_2022_Web_Homepage_Primary_Full_Bleed_US_Desktop_2880x1044px.jpg')] xs:bg-[url('https://images.ctfassets.net/u1nb1km7t5q7/7zLehBUOaDRgPpusTiGR0t/d87455b96d2a4a2aa712b39613a3ab27/Aesop_Sage_Zinc_2022_Web_Homepage_Primary_Full_Bleed_US_Desktop_2880x1044px.jpg')]">
          <span id="blackOverlay" className="w-full h-full absolute"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto">
              <div className="pr-12">
                <h1 className="text-black titleBanner">
                  Tu Salud empieza con nosotros.
                </h1>
                <p className="mt-4 text text-blueGray-200 text1Banner ">
                  Cuidado diario para Ti
                </p>
                <p className="mt-1 text-lg text-blueGray-200 text2Banner grid grid-cols-2">
                  Un hidratante diario nutritivo, Sage & Zinc Facial Hydrating
                  Lotion SPF15 también brinda protección a base de minerales
                  contra la exposición solar incidental.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
