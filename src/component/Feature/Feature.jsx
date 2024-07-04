import { BiCheck } from "react-icons/bi";

const Feature = ({ feature }) => {
  return (
    <div className="flex">
      <BiCheck className="bg-blue-500 rounded-xl mr-1"></BiCheck>
      <p>{feature}</p>
    </div>
  );
};

export default Feature;
