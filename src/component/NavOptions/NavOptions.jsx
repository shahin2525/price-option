import PropTypes from "prop-types";

const NavOptions = ({ route }) => {
  const { name } = route;
  return (
    <div>
      <li className="hover:bg-yellow-600">{name}</li>
    </div>
  );
};
NavOptions.propTypes = {
  route: PropTypes.object,
};

export default NavOptions;
