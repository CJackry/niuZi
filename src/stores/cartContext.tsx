import React, {
  createContext, ReactNode, useContext, useMemo, useReducer,
} from 'react';
import { CartInfo } from '@/src/views/VCart/interface';
import { cartList } from '@/src/utils/fakeData';

interface CartState{
  cartList: Array<CartInfo>;
}

interface Action{
  type: string;
  id: string;
  check?: boolean;
}

type Dispatch = React.Dispatch<Action>;

const initialCart: CartState = { cartList };
const initialDispatch: Dispatch = () => null;

const CartContext = createContext({
  store: initialCart,
  dispatch: initialDispatch,
});

const CartReducer = (preState: CartState, action: Action) => {
  switch (action.type) {
    case 'checked': {
      return {
        ...preState,
        cartList: cartList.map((cart) => (cart.id === action.id ? { ...cart, isCheck: action.check } : cart)),
      };
    }
    case 'del': {
      return {
        ...preState,
        cartList: cartList.filter((cart) => cart.id !== action.id),
      };
    }
    default: {
      return { ...preState };
    }
  }
};

type Props = {
  children?: ReactNode,
  initialVal: CartState,
}

type ExpandReducer = React.Reducer<CartState, Action>;

export const CartProvider:React.FC<Props> = ({ children, initialVal }) => {
  const [store, dispatch] = useReducer<ExpandReducer>(
    CartReducer,
    initialVal,
  );
  const state = useMemo(() => ({ store, dispatch }), [store, dispatch]);
  return (
    <CartContext.Provider value={state}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
