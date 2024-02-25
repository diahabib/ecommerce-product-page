import logo from "../../assets/logo.svg";
import image_avatar from "../../assets/image-avatar.png";
import icon_cart from "../../assets/icon-cart.svg";
import "./style.css";

const Header = () => {
  return (
    <>
      <nav className="p-12 ps-16  flex justify-around">
        <div className="flex justify-between gap-8">
          <a>
            <img src={logo} alt="logo" />
          </a>

          <div className="flex flex-row justify-between gap-4 -mt-0.2">
            <a href="">Collections</a>
            <a href="">Men</a>
            <a href="">Women</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </div>
        </div>

        <div className="flex justify-around gap-8">
          <a href="">
            <img src={icon_cart} alt="cart" className="w-4" />
          </a>
          <a href="" className="-mt-4">
            <img src={image_avatar} alt="avatar" className="w-11" />
          </a>
        </div>
      </nav>

      <hr className="-mt-4" />
    </>
  );
};

export default Header;
