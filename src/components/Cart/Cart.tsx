import iconDelete from "../../assets/icon-delete.svg";
import { ProductData, functionWithOneParam } from "../../type";
const Cart = ({
  data,
  nbArticles,
  handleUpdate,
}: {
  data: ProductData;
  nbArticles: number;
  handleUpdate: functionWithOneParam;
}) => {
  const reductedPrice = data.price - data.price * (data.reduction / 100);
  return (
    <span className={`cart__window py-4 md:shadow-xl`}>
      <span className="cart__title m-4 text-base font-bold text-black">
        Cart
      </span>
      <hr className="mt-4" />

      <span className="cart__content flex w-full h-full relative">
        {nbArticles === 0 ? (
          <span className="cart__content--empty text-gray-400 text-sm absolute">
            Your cart is empty.
          </span>
        ) : (
          <span className="p-4">
            <span className="flex justify-between gap-4">
              <img
                src={data.imagesThumbnail[0]}
                alt=""
                className="w-14 h-14 rounded-md"
              />
              <span className="text-gray-400">
                <h5 className="text-nowrap font-extralight text-gray-600 ">
                  {data.title}
                </h5>
                <span className="text-base">
                  ${reductedPrice} x {nbArticles}
                  {"  "}
                  <span className="ms-2 text-lg text-black font-bold">
                    ${nbArticles * reductedPrice}
                  </span>
                </span>
              </span>
              <img
                src={iconDelete}
                alt="close icon"
                className="w-4 h-4 mt-4 cursor-pointer"
                onClick={() => handleUpdate(-nbArticles)}
              />
            </span>
            <button className="mt-8 w-full p-4 rounded-xl text-white font-extrabold text-center bg-orange-500">
              Checkout
            </button>
          </span>
        )}
      </span>
    </span>
  );
};

export default Cart;
