import React, {
  createContext, ReactNode, useContext, useMemo, useReducer,
} from 'react';
import { CartAttr } from '@/src/views/VDetails/interface';
import { updateCartList } from '@/src/utils/commonFuns';

export interface CartState{
  cartList: Array<CartAttr> | null;
  total: number;
}

interface Action{
  type: string;
  name: string;
  newCartList: Array<CartAttr>,
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
    case 'update': {
      console.log('update');
      return {
        ...preState, cartList: action.newCartList, total: action.newCartList.length,
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

// 自定义hooks
export const useCartAction = () => {
  const { store, dispatch } = useCartContext();
  const cartList = store.cartList ? store.cartList : [];
  return {
    handleAddCart: async (newCart: CartAttr, name: string) => {
      let isSameId = false;
      const newCartList:Array<CartAttr> = cartList.map((cart) => {
        isSameId = cart.id === newCart.id;
        const amount = isSameId ? cart.amount + newCart.amount : cart.amount;
        return { ...cart, amount };
      });
      if (!isSameId) newCartList.push(newCart);
      await dispatch({
        type: 'update',
        newCartList,
        name,
      });
      await updateCartList(newCartList, name);
      return Promise.resolve();
    },
    handleCheck: async (id: string, isChecked: boolean, name: string) => {
      const newCartList = cartList.map((cart) => (cart.id === id
        ? { ...cart, isChecked } : cart));
      await dispatch({
        type: 'update',
        newCartList,
        name,
      });
      await updateCartList(newCartList, name);
      return Promise.resolve();
    },
    handleNum: async (id: string, num: number, name: string) => {
      const newCartList = cartList.map((cart) => (cart.id === id ? { ...cart, amount: num } : cart));
      await dispatch({
        type: 'update',
        newCartList,
        name,
      });
      await updateCartList(newCartList, name);
      return Promise.resolve();
    },
    handleDel: async (id: string, name: string) => {
      const newCartList = cartList.filter((cart) => cart.id !== id);
      dispatch({
        type: 'update',
        newCartList,
        name,
      });
      await updateCartList(newCartList, name);
      return Promise.resolve({ succeed: true });
    },
    handleAllCheck: async (isChecked: boolean, name: string) => {
      const newCartList = cartList.map((cart) => ({ ...cart, isChecked }));
      await dispatch({
        type: 'update',
        newCartList,
        name,
      });
      await updateCartList(newCartList, name);
    },
    handleCheckDel: async (name: string) => {
      const newCartList = cartList.filter((cart) => (cart.isChecked !== true));
      await dispatch({
        type: 'update',
        newCartList,
        name,
      });
      await updateCartList(newCartList, name);
    },
  };
};
