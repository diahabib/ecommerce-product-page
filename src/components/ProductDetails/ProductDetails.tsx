import { ProductData } from "../../type";
const ProductDetails = ({ data }: { data: ProductData }) => {
  return (
    <>
      <h3 className="title-2 text-xs font-extrabold tracking-widest">
        {data.company}
      </h3>
      <h3 className="title-1 text-[28px] md:text-[42px] font-semibold mb-2 md:mb-4 leading-8 md:leading-tight">
        {data.title}
      </h3>
      <p className="description tracking-tighter md:tracking-normal font-normal">
        {data.description}
      </p>

      <div className="flex mt-4 justify-between md:flex-col ">
        <p className="text-3xl font-bold relative">
          ${data.price - data.price * (data.reduction / 100)}.00
          <span className="ms-4 reduction text-base absolute top-1 ps-2 pe-2 border rounded-md">
            {data.reduction}%
          </span>
        </p>
        <p className="text-gray-400 line-through ">${data.price}.00</p>
      </div>
    </>
  );
};

export default ProductDetails;
