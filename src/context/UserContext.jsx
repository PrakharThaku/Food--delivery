import React, { createContext, useState } from "react";
import { food_items } from "../food";

export const DataContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [cate, setCate] = useState(food_items)
  const [isCartOpen, setIsCartOpen] = useState(false);

  const value = {
    input,
    setInput,
    cate,
    setCate,
    isCartOpen,
    setIsCartOpen,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export default UserContextProvider;
