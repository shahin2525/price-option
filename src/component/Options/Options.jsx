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
      features: [
        "Compact",
        "Long battery life",
        "Voice control",
        "Voice control",
        "WiFi",
      ],
      price: 249.99,
      id: 102,
    },
    {
      name: "Jem3",
      features: [
        "Durable",
        "High resolution display",
        "Voice control",
        "Voice control",
        "Voice control",
        "WiFi",
      ],
      price: 299.99,
      id: 103,
    },
  ];

  return (
    <div className="p-6 bg-black">
      <h1>Best price in town</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {options.map((option) => (
          <Option key={option.id} option={option}></Option>
        ))}
      </div>
    </div>
  );
};

export default Options;
