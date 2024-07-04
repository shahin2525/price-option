import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
const Option = ({ option }) => {
  const { price, features, name } = option;
  return (
    <div className="bg-green-500 rounded w-[400px] text-center p-5 flex flex-col">
      <p>{price}</p>
      <p>{name}</p>
      <div className="my-5 flex-grow">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
      </div>
      <div></div>

      <button className="bg-sky-400 w-full rounded">Buy Now</button>
    </div>
  );
};
Option.propTypes = {
  option: PropTypes.object,
};
export default Option;
