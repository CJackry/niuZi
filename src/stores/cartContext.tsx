import React, {
  createContext, ReactNode, useContext, useMemo, useReducer,
} from 'react';
import { CartAttr } from '@/src/views/VDetails/interface';

export interface CartState{
  cartList: Array<CartAttr>;
  total: number;
}

interface Action{
  type: string;
  id: string;
  isChecked?: boolean;
  num?:number;
  cart?: CartAttr;
}

type Dispatch = React.Dispatch<Action>;

const initialCart: CartState = { cartList: [], total: 0 };
const initialDispatch: Dispatch = () => null;

const CartContext = createContext({
  store: initialCart,
  dispatch: initialDispatch,
});

const CartReducer = (preState: CartState, action: Action) => {
  switch (action.type) {
    case 'addCart': {
      console.log('addCart', action.cart, preState.cartList);
      if (action.cart) preState.cartList.push(action.cart);
      return {
        ...preState,
        total: preState.cartList?.length,
      };
    }
    case 'changeChecked': {
      console.log('checked option', action.isChecked);
      let newCartList;
      if (preState.cartList) {
        newCartList = preState.cartList.map((cart) => (cart.id === action.id
          ? { ...cart, isChecked: action.isChecked } : cart));
      } else newCartList = null;
      console.log('newCartList', newCartList);
      return {
        ...preState,
        cartList: newCartList,
        total: newCartList ? newCartList.length : 0,
      };
    }
    case 'numChange': {
      console.log('numChange option', action.num);
      let newCartList;
      if (preState.cartList) {
        newCartList = preState.cartList.map((cart) => (cart.id === action.id
          ? { ...cart, amount: action.num } : cart));
      } else newCartList = null;
      return {
        ...preState,
        cartList: newCartList,
        total: newCartList ? newCartList.length : 0,
      };
    }
    case 'del': {
      let newCartList;
      if (preState.cartList) newCartList = preState.cartList.filter((cart) => cart.id !== action.id);
      else newCartList = null;
      return {
        ...preState,
        cartList: newCartList,
        total: newCartList ? newCartList.length : 0,
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

export const CartProvider:React.FC<Props> = ({ children, initialVal = { cartList: null, total: 0 } }) => {
  const [store, dispatch] = useReducer<ExpandReducer>(// @ts-ignore
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

// 自定义hooks
export const useCartAction = () => {
  const { dispatch } = useCartContext();
  return {
    handleCheck: async (id: string, isChecked: boolean) => {
      dispatch({
        type: 'changeChecked',
        id,
        isChecked,
      });
      return Promise.resolve();
    },
  };
};
