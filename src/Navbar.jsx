import logo from "./assets/images/logo.svg";
import ham from "./assets/images/icon-menu.svg";
import { useState } from "react";

export function Navbar() {
  const [click, SetClick] = useState(false);
  if (click) {
    const page = (
      <div className="min-h-screen w-full bg-white">
        <ul className="flex flex-col gap-y-5  text-light-gray">
          <li>
            <a
              className=" hover:text-light-pink focus:text-light-pink"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className=" hover:text-light-pink focus:text-light-pink"
              href="#"
            >
              New
            </a>
          </li>
          <li>
            <a
              className=" hover:text-light-pink focus:text-light-pink"
              href="#"
            >
              Popular
            </a>
          </li>
          <li>
            <a
              className=" hover:text-light-pink focus:text-light-pink"
              href="#"
            >
              Trending
            </a>
          </li>
          <li>
            <a
              className=" hover:text-light-pink focus:text-light-pink"
              href="#"
            >
              Categories
            </a>
          </li>
        </ul>
      </div>
    );
    return page;
  }
  const handleClick = () => {
    SetClick(true);
  };

  return (
    <div className="mx-4 py-8">
      <div className="flex justify-between items-center">
        <img className="" src={logo} />
        <button onClick={handleClick} className="lg:hidden">
          <img src={ham} />
        </button>
        <div className="hidden lg:block">
          <ul className="flex gap-x-5 text-light-gray">
            <li>
              <a
                className=" hover:text-light-pink focus:text-light-pink"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className=" hover:text-light-pink focus:text-light-pink"
                href="#"
              >
                New
              </a>
            </li>
            <li>
              <a
                className=" hover:text-light-pink focus:text-light-pink"
                href="#"
              >
                Popular
              </a>
            </li>
            <li>
              <a
                className=" hover:text-light-pink focus:text-light-pink"
                href="#"
              >
                Trending
              </a>
            </li>
            <li>
              <a
                className=" hover:text-light-pink focus:text-light-pink"
                href="#"
              >
                Categories
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
