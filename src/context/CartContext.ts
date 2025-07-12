// src/context/CartContext.ts
import { createContext } from "react";
import type { CartContextType } from "./Types";

const CartContext = createContext<CartContextType | undefined>(undefined);

export default CartContext;