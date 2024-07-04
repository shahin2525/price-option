import PropTypes from "prop-types";

const NavOptions = ({ route }) => {
  const { name, path } = route;
  return (
    <div>
      <li className="hover:bg-yellow-600 w-fit">
        <a href={path}>{name}</a>
      </li>
    </div>
  );
};
NavOptions.propTypes = {
  route: PropTypes.object,
};

export default NavOptions;
