import "./App.css";
import data from "./data.json";
import ProductImage from "./components/ProductImage/ProductImage";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import AddToCart from "./components/AddToCart/AddToCart";
import Cart from "./components/Cart/Cart";
import { useCartDialog, useAddToCartDialog } from "./utils/context";
const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
