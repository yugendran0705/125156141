import { useState } from "react";
import "./App.css";
import Product from "./Components/Product";
import axios from "axios";

function App() {
  const companyList = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
  const categoryList = [
    "Phone",
    "Computer",
    "TV",
    "Earphone",
    "Tablet",
    "Charger",
    "Mouse",
    "Keypad",
    "Bluetooth",
    "Pendrive",
    "Remote",
    "Speaker",
    "Headset",
    "Laptop",
    "PC"
  ];

  const intialOptions = {
    companyName: companyList[0],
    category: categoryList[0],
    top: "",
    minPrice: "",
    maxPrice: ""
  };
  const [options, setOptions] = useState(intialOptions);
  const [productList, setProductList] = useState([]);
  const onChangeHandler = (event) => {
    console.log(options);
    setOptions((options) => ({
      ...options,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://localhost:9876/api/categories/${options.category}/products?company=${options.companyName}&topValue=${options.top}&minPrice=${options.minPrice}&maxPrice=${options.maxPrice}`;
    const result = await axios.get(url);
    console.log(result);
    setProductList(result.data);
  };

  return (
    <div>
      <div>
        <form className="grid md:grid-cols-3 bg-yellow-800 text-white text-lg px-4 py-4 rounded-2xl gap-4 w-fit mx-auto items-center">
          <div className="flex gap-2">
            <div>Company Name:</div>
            <select
              name="companyName"
              id=""
              className="text-black rounded-md"
              onChange={(e) => onChangeHandler(e)}
              value={options.companyName}
            >
              {companyList.map((company, index) => (
                <option value={company} key={index}>
                  {company}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-2">
            <div>Category:</div>
            <select
              name="category"
              id=""
              className="text-black rounded-md"
              onChange={(e) => onChangeHandler(e)}
              value={options.category}
            >
              {categoryList.map((category, index) => (
                <option value={category} key={index}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-2">
            <div>Top:</div>
            <input
              type="text"
              name="top"
              className="text-black rounded-md"
              onChange={onChangeHandler}
              value={options.top}
            />
          </div>
          <div className="flex gap-2">
            <div>Min Price:</div>
            <input
              type="text"
              name="minPrice"
              className="text-black rounded-md"
              onChange={onChangeHandler}
              value={options.minPrice}
            />
          </div>
          <div className="flex gap-2">
            <div>Max Price:</div>
            <input
              type="text"
              name="maxPrice"
              onChange={onChangeHandler}
              className="text-black rounded-md"
              value={options.maxPrice}
            />
          </div>
          <button
            className="bg-violet-700 text-yellow-200 font-bold py-2 px-4 rounded-lg w-40"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
      <div className="text-center py-16 text-6xl font-bold text-violet-800">
        Products
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {productList.map((p, index) => (
          <Product p={p} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
