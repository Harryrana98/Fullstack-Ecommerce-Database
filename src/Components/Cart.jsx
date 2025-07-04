import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "./UserContext";
import {useNavigate} from "react-router-dom"
function Cart() {
  const {
    addtocartid,
    setAddtocartid,
    Cart,
    setCart,
    Quantity,
    setQuantity,
   
  } = useContext(UserContext);

  const [data, setData] = useState([]);
  const [totalamount, setTotalAmount] = useState(0);
  const navigate=useNavigate()
   
   
  useEffect(() => {
    async function fetcheddata() {
      if (addtocartid.length === 0) return;

      const result = await Promise.all(
        addtocartid.map(async (x) => {
          const response = await fetch(`https://ecommerce-api-8ga2.onrender.com/api/product/${x}`);
          return await response.json();
        })
      );

      const newQuantities = {};
      result.forEach((item) => {
        newQuantities[item.id] = 1;
      });

      setQuantity((prev) => ({ ...prev, ...newQuantities }));
      setData(result);
    }
    fetcheddata();
  }, [addtocartid]);

  function increment(id) {
    // console.log(id)
    setQuantity((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  }

  function decrement(id) {
    setQuantity((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  }

  function RemoveCart(index) {
    const updatedData = data.filter((_, idx) => idx !== index);
    setData(updatedData);
    const newCartIds = [...addtocartid];
    newCartIds.splice(index, 1);
    setAddtocartid(newCartIds);
    setCart(Cart - 1);
  }

  useEffect(() => {
    let total = 0;
    data.forEach((item) => {
      const qty = Quantity[item._id] || 1;
      total += qty * item.price;
    });
    setTotalAmount(total);
  }, [data, Quantity]);

  if (addtocartid.length === 0) {
    return (
      <h1 className="text-center text-2xl font-semibold mt-16 text-gray-700">
        🛒 Cart is empty
      </h1>
    );
  }

 return (
  <div className="max-w-6xl mx-auto mt-15 px-4 py-12">
    <h1 className="text-4xl font-bold text-blue-700 mb-10 text-center">🛍️ Your Shopping Cart</h1>

    <div className="space-y-8">
      {data.map((item, index) => (
        <div
          key={item._id}
          className="flex flex-col sm:flex-row items-center gap-6 bg-white border border-gray-200 rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
        >
          <div className="w-32 h-32 bg-gray-50 flex items-center justify-center rounded-xl border">
            <img src={item.url} alt={item.title} className="w-full h-full object-contain" />
          </div>

          <div className="flex-1 space-y-2">
            <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
            <p className="text-gray-600">💵 Price: <span className="font-medium">${item.price}</span></p>
            <p className="text-gray-600">⭐ Rating: {item.rating?.rate} ({item.rating?.count} reviews)</p>

            <div className="flex items-center gap-4 mt-3">
              <button
                onClick={() => decrement(item._id)}
                className="w-8 h-8 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
              >
                −
              </button>
              <span className="text-lg font-semibold">{Quantity[item._id] || 1}</span>
              <button
                onClick={() => increment(item._id)}
                className="w-8 h-8 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={() => RemoveCart(index)}
            className="text-red-500 hover:text-red-700 text-3xl font-bold self-start sm:self-center"
          >
            &times;
          </button>
        </div>
      ))}
    </div>

    <div className="mt-10 bg-gray-100 p-6 rounded-xl shadow-inner text-right">
      <p className="text-2xl font-bold text-gray-800">
        🧾 Grand Total: <span className="text-blue-600">${totalamount.toFixed(2)}</span>
      </p>
    </div>
  </div>
);

}

export default Cart;