import { useState, useEffect } from "react";
import { ProductData } from "../../type";

import "./style.css";
import ImageSlider from "../ImageSlider/ImageSlider";

const ProductImage = ({ data }: { data: ProductData }) => {
  const [isLaptop, setIsLaptopState] = useState(window.innerWidth >= 1024);
  const [slider, setSlider] = useState(false);
  const [dialog, openDialog] = useState(false);
  const [ndex, setActive] = useState(0);

  const handleClickDialog = () => {
    openDialog(!dialog);
    handleSlider();
  };

  const handleShow = (ndex: number) => {
    setActive(ndex);
  };

  const handleShowNext = () => {
    setActive((prevIndex) =>
      ndex === data.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleShowPrev = () => {
    setActive((prevIndex) =>
      ndex === 0 ? data.images.length - 1 : prevIndex - 1
    );
  };

  const handleSlider = () => {
    setSlider(!slider);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLaptopState(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className={`page-container`}>
        <ImageSlider
          data={data}
          slider={false}
          ndex={ndex}
          dialog={dialog}
          handleShow={handleShow}
          handleShowPrev={handleShowPrev}
          handleShowNext={handleShowNext}
          handleClickDialog={handleClickDialog}
        />
      </div>

      {slider && isLaptop && (
        <span
          className="dialog-window flex justify-center items-center
        "
        >
          <ImageSlider
            data={data}
            slider={true}
            ndex={ndex}
            dialog={dialog}
            handleShow={handleShow}
            handleShowPrev={handleShowPrev}
            handleShowNext={handleShowNext}
            handleClickDialog={handleClickDialog}
          />
        </span>
      )}
    </>
  );
};

export default ProductImage;
