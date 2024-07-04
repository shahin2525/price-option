import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import NavOptions from "../NavOptions/NavOptions";

const Nav = () => {
  const routes = [
    {
      id: 1,
      name: "Home",
      path: "/home",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Services",
      path: "/services",
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 5,
      name: "Blog",
      path: "/blog",
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-yellow-300 p-4">
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? (
          <IoMdMenu className="text-2xl"></IoMdMenu>
        ) : (
          <RxCross2 className="text-2xl"></RxCross2>
        )}
      </div>
      <ul
        className={`md:flex gap-5 ${
          open ? "top-10" : "top-[-260px]"
        } bg-yellow-300 p-4  w-full  absolute md:static`}
      >
        {routes.map((route) => (
          <NavOptions route={route} key={route.id}></NavOptions>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
