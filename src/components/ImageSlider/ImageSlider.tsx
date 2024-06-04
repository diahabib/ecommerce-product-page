import iconNext from "../../assets/icon-next.svg";
import iconPrev from "../../assets/icon-previous.svg";
import iconClose from "../../assets/icon-close.svg";
import { ProductData } from "../../type";

interface ImageSliderProps {
  data: ProductData;
  slider: boolean;
  ndex: number;
  dialog: boolean;
  handleShow: (ndex: number) => void;
  handleShowPrev: () => void;
  handleShowNext: () => void;
  handleClickDialog: () => void;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  data,
  slider,
  ndex,
  dialog,
  handleShow,
  handleShowPrev,
  handleShowNext,
  handleClickDialog,
}) => {
  console.log(data.images[0]);
  console.log(iconNext);
  return (
    <>
      <div
        className={`image mb-6 md:border md:rounded-xl relative ${
          dialog && slider ? "mt-10 lg:w-[35%] lg:h-[75%] border-none" : ""
        }`}
      >
        {slider && (
          <img
            src={iconClose}
            alt="close icon"
            className="icon__close w-6 float-right mb-4 cursor-pointer"
            onClick={handleClickDialog}
          />
        )}
        <button
          className={`py-2 px-3 border bg-white left-2  rounded-full self-center absolute top-[50%] ${
            !dialog ? "md:hidden" : ""
          } ${!slider ? "md:hidden" : "lg:py-4 lg:px-5 lg:-left-[4%]"} `}
          onClick={handleShowPrev}
        >
          <img src={iconPrev} alt="prev icon" className="w-3" />
        </button>
        <img
          src={data.images[ndex]}
          alt=""
          className={`main__image w-full md:max-h-max lg:rounded-xl cursor-pointer ${
            dialog && slider ? "lg:max-h-[68vh]" : ""
          }`}
          onClick={handleClickDialog}
        />
        <button
          className={`py-2 px-3 border rounded-full absolute bg-white right-2 top-[50%] ${
            !dialog ? "md:hidden" : ""
          } ${!slider ? "" : "lg:py-4 lg:px-5 lg:-right-[4%]"} `}
          onClick={handleShowNext}
        >
          <img src={iconNext} alt="prev icon" className="w-3" />
        </button>
      </div>

      <div
        className={`thumbnails hidden md:flex flex-wrapp gap-2 lg:gap-8 justify-between `}
      >
        {data["imagesThumbnail"].map((thumbnail, index) => (
          <button
            key={index}
            className={`${
              index === ndex ? "border-2 border-orange-500 rounded-xl" : ""
            }`}
          >
            <img
              src={thumbnail}
              alt={`${data.title}-thumbnail `}
              className={`thumb hover:opacity-50 w-36 lg:w-20 ${
                index === ndex ? "opacity-40 " : ""
              }`}
              onClick={() => {
                handleShow(index);
              }}
            />
          </button>
        ))}
      </div>
    </>
  );
};

export default ImageSlider;
