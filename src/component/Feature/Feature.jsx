import { BiCheck } from "react-icons/bi";
import PropTypes from "prop-types";
const Feature = ({ feature }) => {
  return (
    <div className="flex">
      <BiCheck className="bg-blue-500 rounded-xl mr-1"></BiCheck>
      <p>{feature}</p>
    </div>
  );
};
Feature.propTypes = {
  feature: PropTypes.string,
};
export default Feature;
