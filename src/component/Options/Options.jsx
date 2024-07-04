import Option from "../Option/Option";

const Options = () => {
  const options = [
    {
      name: "Jem1",
      features: ["Lightweight", "Water-resistant", "Bluetooth"],
      price: 199.99,
      id: 101,
    },
    {
      name: "Jem2",
      features: ["Compact", "Long battery life", "WiFi"],
      price: 249.99,
      id: 102,
    },
    {
      name: "Jem3",
      features: ["Durable", "High resolution display", "Voice control"],
      price: 299.99,
      id: 103,
    },
  ];

  return (
    <div>
      <h1>Best price in town</h1>

      <div>
        {options.map((option) => (
          <Option key={option.id} option={option}></Option>
        ))}
      </div>
    </div>
  );
};

export default Options;
