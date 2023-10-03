import React from "react";
import { render, fireEvent,screen } from "@testing-library/react";
import { CartProvider, CartContext } from "../../container/cartContext";

const value = {
    initialState: {
      products: [],
      total: 0
    }, 
    reducer: jest.fn(),
  };
