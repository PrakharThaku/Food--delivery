import React, { useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import categories from '../Category';
import Card from '../components/Card';
import { food_items } from '../food';
import { DataContext } from './context/UserContext.jsx';
import { RxCross2 } from 'react-icons/rx';
import CartCard from '../components/CartCard';

const Home = () => {
  const { cate, setCate, input, isCartOpen, setIsCartOpen } =
    useContext(DataContext);

  const items = useSelector((state) => state.cart);

  const subTotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const deliveryFees = 20;
  const taxes = 18;
  const total = subTotal + deliveryFees + taxes;

  useEffect(() => {
    if (!input) {
      setCate(food_items);
      return;
    }

    const filtered = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input.toLowerCase())
    );

    setCate(filtered);
  }, [input, setCate]);

  const filterByCategory = (category) => {
    if (category === 'All') {
      setCate(food_items);
    } else {
      const filtered = food_items.filter(
        (item) => item.food_category === category
      );
      setCate(filtered);
    }
  };

  return (
    <div className="w-full bg-slate-200 min-h-screen">
      <Navbar />

      {!input && (
        <div className="flex flex-wrap justify-center items-center gap-6 w-full mt-6">
          {categories.map((item) => (
            <div
              key={item.name}
              className="w-36 h-36 bg-white flex flex-col gap-5 p-5 text-[18px] font-bold text-gray-500 rounded-b-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all"
              onClick={() => filterByCategory(item.name)}
            >
              <div>{item.image}</div>
              <div>{item.name}</div>
            </div>
          ))}
        </div>
      )}

      <div className="w-full flex flex-wrap gap-5 px-5 justify-center pt-8 pb-8">
        {cate.length ? (
          cate.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              type={item.food_type}
            />
          ))
        ) : (
          <span className="h-full w-full flex justify-center items-center text-3xl text-gray-400">
            No item found
          </span>
        )}
      </div>

      {isCartOpen && (
        <div className="w-full md:w-[40vw] h-full fixed top-0 right-0 bg-white shadow-xl p-6 z-50 overflow-auto">
          <header className="flex justify-between items-center">
            <span className="text-green-400 text-2xl font-bold">
              Order Items
            </span>
            <RxCross2
              className="text-green-400 text-3xl cursor-pointer hover:text-gray-600"
              onClick={() => setIsCartOpen(false)}
            />
          </header>

          {items.length ? (
            <>
              <div className="mt-9 w-full flex flex-col gap-8">
                {items.map((item) => (
                  <CartCard key={item.id} {...item} />
                ))}
              </div>

              <div className="w-full border-t-2 border-b-2 border-gray-400 mt-5 py-4">
                <div className="w-full flex justify-between items-center">
                  <span className="text-lg text-gray-600 font-semibold">
                    Subtotal
                  </span>
                  <span className="text-green-400 font-bold text-lg">
                    ₹{subTotal}
                  </span>
                </div>

                <div className="w-full flex justify-between items-center">
                  <span className="text-lg text-gray-600 font-semibold">
                    Delivery Fees
                  </span>
                  <span className="text-green-400 font-bold text-lg">
                    ₹{deliveryFees}
                  </span>
                </div>

                <div className="w-full flex justify-between items-center">
                  <span className="text-lg text-gray-600 font-semibold">
                    Taxes
                  </span>
                  <span className="text-green-400 font-bold text-lg">
                    ₹{taxes}
                  </span>
                </div>
              </div>

              <div className="w-full mt-4">
                <div className="w-full flex justify-between items-center">
                  <span className="text-2xl text-gray-600 font-semibold">
                    Total
                  </span>
                  <span className="text-green-400 font-bold text-2xl">
                    ₹{total}
                  </span>
                </div>

                <div className="w-full mt-6 flex justify-center">
                  <button className="w-[80%] p-3 rounded-lg bg-green-500 text-white hover:bg-green-400 transition-all cursor-pointer">
                    Place Order
                  </button>
                </div>
              </div>
            </>
          ) : (
            <span className="h-full w-full flex justify-center items-center text-3xl text-gray-400">
              Your cart is empty 🛒
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
 