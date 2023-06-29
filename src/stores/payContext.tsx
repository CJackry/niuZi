import React, {
  createContext, ReactNode, useContext, useMemo, useReducer,
} from 'react';
import { PayInfo } from '@/src/views/VPay/interface';
import { defaultPayInfo } from '@/src/utils/fakeData';

export interface PayState{
    payInfo: PayInfo | null;
}

interface Action{
    type: string;
    newPayInfo: PayInfo,
}

type Dispatch = React.Dispatch<Action>;

const initialPayInfo: PayState = { payInfo: defaultPayInfo };
const initialDispatch: Dispatch = () => null;

const PayContext = createContext({
  store: initialPayInfo,
  dispatch: initialDispatch,
});

const PayReducer = (preState: PayState, action: Action) => {
  switch (action.type) {
    case 'update': {
      console.log('updatePayInfo');
      return {
        ...preState, payInfo: action.newPayInfo,
      };
    }
    default: {
      return { ...preState };
    }
  }
};

type Props = {
    children?: ReactNode,
    initialVal: PayState,
}

type ExpandReducer = React.Reducer<PayState, Action>;

export const PayProvider:React.FC<Props> = ({ children, initialVal = { payInfo: null } }) => {
  const [store, dispatch] = useReducer<ExpandReducer>(
    PayReducer,
    initialVal,
  );
  const state = useMemo(() => ({ store, dispatch }), [store, dispatch]);
  return (
    <PayContext.Provider value={state}>
      {children}
    </PayContext.Provider>
  );
};

export const usePayContext = () => useContext(PayContext);

// 自定义hooks
// export const usePayAction = () => {
//   const { store, dispatch } = usePayContext();
//   const cartList = store.cartList ? store.cartList : [];
//   return {
//     handleAddCart: async (newCart: CartAttr, name: string) => {
//       let isSameId = false;
//       const newCartList:Array<CartAttr> = cartList.map((cart) => {
//         isSameId = cart.id === newCart.id;
//         const amount = isSameId ? cart.amount + newCart.amount : cart.amount;
//         return { ...cart, amount };
//       });
//       if (!isSameId) newCartList.push(newCart);
//       await dispatch({
//         type: 'update',
//         newCartList,
//         name,
//       });
//       await updateCartList(newCartList, name);
//       return Promise.resolve();
//     },
//   };
// };
