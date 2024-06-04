import minus_icon from "../../assets/icon-minus.svg";
import plus_icon from "../../assets/icon-plus.svg";
import cart_icon from "../../assets/icon-cart.svg";
import { useReducer } from "react";
import { StateType, ActionType } from "../../type";
const AddToCart = ({
  handleUpdate,
}: {
  handleUpdate: (nb: number) => void;
}) => {
  const initialQuantity: StateType = {
    counter: 0,
  };

  const counterReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
      case "increment":
        return {
          counter: state.counter + 1,
        };
      case "decrement":
        return {
          counter: state.counter !== 0 ? state.counter - 1 : 0,
        };
      case "reset":
        return {
          counter: 0,
        };
      default:
        return { counter: state.counter };
    }
  };

  const [quantity, setQuantity] = useReducer(counterReducer, initialQuantity);

  return (
    <div className="w-full mt-4 flex flex-col md:flex-row justify-between gap-y-2 md:max-w-[85%] gap-2">
      <div className="bg-gray-100 p-4 flex justify-between md:w-[35%] border border-gray-100 rounded-lg ">
        <button className="" onClick={() => setQuantity({ type: "decrement" })}>
          <img src={minus_icon} alt="minus icon" className="w-3 h-1" />
        </button>{" "}
        <span className="font-semibold self-center">{quantity.counter}</span>
        <button onClick={() => setQuantity({ type: "increment" })}>
          <img src={plus_icon} alt="plus icon" className="w-3 h-3" />
        </button>
      </div>
      <button
        className="add_to_cart__button p-4 flex shadow-2xl shadow-orange-400 hover:opacity-50 place-content-center gap-4 md:w-[65%] border rounded-lg text-white font-semibold mt-1"
        onClick={() => {
          handleUpdate(quantity.counter);
          setQuantity({ type: "reset" });
        }}
      >
        <img
          src={cart_icon}
          alt="cart-icon"
          className="fill-white self-center"
        />
        <span>Add to cart</span>
      </button>
    </div>
  );
};

export default AddToCart;
