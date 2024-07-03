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

  return (
    <div>
      <ul>
        {routes.map((route) => (
          <NavOptions route={route} key={route.id}></NavOptions>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
