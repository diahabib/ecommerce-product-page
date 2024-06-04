import { useState } from "react";
import logo from "../../assets/logo.svg";
import image_avatar from "../../assets/image-avatar.png";
import icon_cart from "../../assets/icon-cart.svg";
import "./style.css";
import icon_menu from "../../assets/icon-menu.svg";
import icon_close from "../../assets/icon-close.svg";

const Header = () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Collections", path: "javascript:void(0)" },
    { title: "Men", path: "javascript:void(0)" },
    { title: "Women", path: "javascript:void(0)" },
    { title: "About", path: "javascript:void(0)" },
    { title: "Contact", path: "javascript:void(0)" },
  ];

  return (
    <nav className="pt-12 ps-40 pe-40 flex justify-between">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="javascript:void(0)">
            <img
              src="https://www.floatui.com/logo.svg"
              width={120}
              height={50}
              alt="Float UI logo"
            />
          </a>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-600 hover:text-indigo-600">
                  <a href={item.path}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden md:inline-block">
          <a
            href="javascript:void(0)"
            className="py-3 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

/*const Header = () => {
  const [sidebarActive, setSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  return (
    <>
      <nav className="pt-12 ps-40 pe-40 flex justify-between">
        <div className="flex justify-between gap-8">
          <a>
            <img src={logo} alt="logo" />
          </a>

          <div className="flex flex-row justify-between gap-4 -mt-0.2">
            {navigation.map((item, idx) => {
              return (
                <a key={idx} href={item.path} className="block">
                  {item.title}
                </a>
              );
            })}
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

      <hr className="mt-8" />
    </>
  );
};

export default Header;
*/

//export default Header;