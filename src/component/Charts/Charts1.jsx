import axios from "axios";
import { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const Charts1 = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phones = data.data.data;

        const phoneWithFakeData = phones.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        setPhones(phoneWithFakeData);
        setLoading(false);
      });
  }, []);
  //   const students = [
  //     { name: "assignment-1", mark: 20, id: 1 },
  //     { name: "assignment-2", mark: 22, id: 2 },
  //     { name: "assignment-3", mark: 19, id: 3 },
  //     { name: "assignment-4", mark: 21, id: 4 },
  //     { name: "assignment-5", mark: 23, id: 5 },
  //     { name: "assignment-6", mark: 20, id: 6 },
  //     { name: "assignment-7", mark: 22, id: 7 },
  //   ];
  return (
    <div>
      <div>
        {loading && (
          <Audio
            height="100"
            width="100"
            color="#4fa94d"
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
            visible={true}
          />
        )}
      </div>
      <BarChart
        width={800}
        height={300}
        data={phones}
        margin={{
          top: 5,
          right: 30,
          left: 100,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="price"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        {/* <Bar
        dataKey="mark"
        fill="#82ca9d"
        activeBar={<Rectangle fill="gold" stroke="purple" />}
      /> */}
      </BarChart>
    </div>
  );
};

export default Charts1;
