const NavOptions = ({ route }) => {
  const { name } = route;
  return <li>{name}</li>;
};

export default NavOptions;
