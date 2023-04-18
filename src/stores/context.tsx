import React, {
  createContext, ReactNode, useContext, useMemo, useReducer,
} from 'react';

interface userState {
  name:string
}

interface Props {
  children?:ReactNode;
  initialUser: userState
}

type Action = {
  type: string,
  id?: string
}
// 规定Reducer的类型
type ExpandReducer = React.Reducer<userState, Action>

// 初始化Context
const initialStore:userState = {
  name: '',
};
const initialDispatch: React.Dispatch<Action> = () => null;
const UserContext = createContext({
  store: initialStore,
  dispatch: initialDispatch,
});

const userReducer = (preState:userState, action:Action) => {
  switch (action.type) {
    case 'getName': {
      return { ...preState };
    }
    default: {
      return { ...preState };
    }
  }
};

export const UserProvider:React.FC<Props> = ({ children, initialUser = { name: '' } }) => {
  const [store, dispatch] = useReducer<ExpandReducer>(
    userReducer,
    initialUser,
  );
  // 确保能拿到最新值
  const state = useMemo(() => ({ store, dispatch }), [store, dispatch]);
  return (
    <UserContext.Provider value={state}>
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext() {
  return useContext(UserContext);
}
