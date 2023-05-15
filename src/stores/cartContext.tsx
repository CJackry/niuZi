import { createContext } from 'react';

export const CartContext = createContext({
  store: null,
  dispatch: () => null,
});
