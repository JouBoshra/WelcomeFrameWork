import React, { useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import { Minus, Star, Plus } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import portOne from "../img/portOne.png";
import portTwo from "../img/portTwo.png";
import portThree from "../img/portThree.png";
import "./Portfolio.css";

export default function Portfolio() {
  const { navHeight } = useOutletContext();
  const [activeImage, setActiveImage] = useState(null);

  const handleImageClick = (src) => {
    setActiveImage(src);
  };

  const handleClose = () => {
    setActiveImage(null);
  };

  return (
    <>
      <div
        className="container mx-auto "
        style={{ paddingTop: `${navHeight}px` }}
      >
        <h2 className="text-3xl lg:text-5xl md:text-4xl font-bold uppercase text-center">
          About Component
        </h2>
        <div className="lineHome flex flex-row items-center justify-center gap-4 m-auto text-center">
          <Minus size={100} strokeWidth={1.75} />
          <Star size={50} strokeWidth={1.75} />
          <Minus size={100} strokeWidth={1.75} />
        </div>
        <div className="flex justify-center items-center">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 px-5">
            {[portOne, portTwo, portThree, portOne, portTwo, portThree].map(
              (src, index) => (
                <div
                  key={index}
                  className="card-Portfolio "
                  onClick={() => handleImageClick(src)}
                >
                  <Card className="py-4 justify-center items-center text-center">
                    <CardBody className="relative overflow-hidden">
                      <img
                        alt={`Portfolio ${index + 1}`}
                        src={src}
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "cover",
                          borderRadius: "20px",
                        }}
                      />
                      <div className="overlay">
                        <p className="overlay-text">
                          <Plus className="size-40 font-bold" />
                        </p>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              )
            )}
          </div>
        </div>
        {activeImage && (
          <div
            className={`modal ${activeImage ? "active" : ""}`}
            onClick={handleClose}
          >
            <img src={activeImage} alt="Enlarged" />
          </div>
        )}
      </div>
    </>
  );
}
