import { useState, useEffect } from "react";
import logo from "../../assets/logo.svg";
import imageAvatar from "../../assets/image-avatar.png";
import iconCart from "../../assets/icon-cart.svg";
import "./style.css";
import iconMenu from "../../assets/icon-menu.svg";
import iconClose from "../../assets/icon-close.svg";
import { useCartDialog, useAddToCartDialog } from "../../utils/context";
const navigation = [
  { id: 10, title: "test", path: "#" },

  { id: 1, title: "Collections", path: "#" },
  { id: 2, title: "Men", path: "#" },
  { id: 3, title: "Women", path: "#" },
  { id: 4, title: "About", path: "#" },
  { id: 5, title: "Contact", path: "#" },
];
const Header = () => {
  //const [sidebarActive, setSidebarActive] = useState(false);
  const [sidebarOpen, setOpen] = useState(false);
  const [isLaptop, setIsLaptopState] = useState(window.innerWidth >= 1024);
  const { dialog, handleClickDialog } = useCartDialog();
  const { nbArticles } = useAddToCartDialog();

  useEffect(() => {
    const handleResize = () => {
      setIsLaptopState(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    if (dialog) handleClickDialog();
    setOpen(!sidebarOpen);
  };

  return (
    <header>
      <nav
        className={`pb-2 lg:pt-4 lg:ps-40 lg:pe-40 lg:ww-48 lg:mb-0 flex justify-between ${
          sidebarOpen ? "bg-[rgba(0,0,0,0.5)]" : "bg-white"
        }`}
      >
        <div
          className={`px-4 items-center lg:flex lg:px-8 ${
            sidebarOpen ? "w-[65%]" : ""
          }`}
        >
          <div
            className={`flex items-center justify-between py-3 lg:py-5 gap-x-2 `}
          >
            <div className="lg:hidden">
              <button
                className="text-gray-700 outline-none p-2"
                onClick={() => toggleSidebar()}
              >
                <img src={iconMenu} alt="icon menu" className="w-4" />
              </button>
            </div>

            <a
              className={`lg:block ${
                sidebarOpen ? "invisible" : "block"
              } -mt-1`}
            >
              <img
                src={logo}
                alt="logo"
                className={`${sidebarOpen ? "" : "block"}`}
              />
            </a>
          </div>

          <div
            className={`lg:flex lg:justify-between lg:gap-8  ${
              sidebarOpen ? "blurr" : "hidden"
            }`}
          >
            <div className="sidenav lg:ms-16">
              <div className="ps-6 pt-5 lg:hidden">
                <button
                  className="text-gray-700 outline-none"
                  onClick={() => toggleSidebar()}
                >
                  <img src={iconClose} alt="icon close" className="w-4" />
                </button>
              </div>

              <ul className="mt-6 text-base lg:text-sm lg:gap-4 justify-center items-center space-y-5 lg:flex lg:space-x-5 lg:-mt-6 text-black font-bold p-6">
                {navigation.map((item) => {
                  return (
                    <li key={item.id} className={`${item.title}`}>
                      <a
                        href={item.path}
                        className="md:hover:border-b-4 border-orange-400 pb-8"
                      >
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 lg:gap-10  pe-6">
          <span
            className="cart__icon -lt-4 ld:-mt-1 cursor-pointer relative"
            onClick={handleClickDialog}
          >
            <img src={iconCart} alt="cart" className={`w-6`} />
            {nbArticles > 0 && (
              <span className="absolute aspect-square -top-2 -right-2 text-white h-4 text-center w-5 pb-1 bg-orange-500 border rounded-full ">
                {nbArticles}
              </span>
            )}
          </span>
          <span className="-lg-4 cursor-pointer">
            <img
              src={imageAvatar}
              alt="avatar"
              className={`w-6 lg:w-14   hover:border-2 border-orange-500 rounded-full ${
                sidebarOpen ? "brightness-50" : ""
              }`}
            />
          </span>
        </div>
      </nav>
      {isLaptop && (
        <hr className="mwt-2 items-center hidden lg:w-[75%] m-auto lg:block fixed" />
      )}
    </header>
  );
};

export default Header;
