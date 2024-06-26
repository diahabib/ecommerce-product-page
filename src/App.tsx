import "./App.css";
import { ProductData } from "./type";
import ProductImage from "./components/ProductImage/ProductImage";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import AddToCart from "./components/AddToCart/AddToCart";
import Cart from "./components/Cart/Cart";
import { useCartDialog, useAddToCartDialog } from "./utils/context";
import imageProduct1 from "/src/assets/image-product-1.jpg";
import imageProduct2 from "/src/assets/image-product-2.jpg";
import imageProduct3 from "/src/assets/image-product-3.jpg";
import imageProduct4 from "/src/assets/image-product-4.jpg";
import imageProduct1Thumb from "/src/assets/image-product-1-thumbnail.jpg";
import imageProduct2Thumb from "/src/assets/image-product-2-thumbnail.jpg";
import imageProduct3Thumb from "/src/assets/image-product-3-thumbnail.jpg";
import imageProduct4Thumb from "/src/assets/image-product-4-thumbnail.jpg";

const data: ProductData = {
  images: [imageProduct1, imageProduct2, imageProduct3, imageProduct4],
  imagesThumbnail: [
    imageProduct1Thumb,
    imageProduct2Thumb,
    imageProduct3Thumb,
    imageProduct4Thumb,
  ],
  company: "SNEAKER COMPANY",
  title: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  price: 125.0,
  reduction: 50,
};
const App = () => {
  const { dialog } = useCartDialog();
  const { nbArticles, handleUpdate } = useAddToCartDialog();

  return (
    <div
      className={`product__card relative flex flex-wrap md:justify-around md:ps-20 md:pe-20 lg:ps-40 lg:pe-40 md:mt-16`}
    >
      {dialog && (
        <Cart data={data} nbArticles={nbArticles} handleUpdate={handleUpdate} />
      )}

      <div className="left-side w-[100%] lg:basis-4/12">
        <ProductImage data={data} />
      </div>

      <div
        className={`
          } product-details w-full lg:basis-2/5 -mt-4 md:mt-16 px-6 md:px-0 flex flex-col gap-2 md:gap-4`}
      >
        <ProductDetails data={data} />

        <AddToCart handleUpdate={handleUpdate} />
      </div>
    </div>
  );
};

export default App;
