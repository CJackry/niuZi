import React, {
  createContext, ReactNode, useContext, useMemo, useReducer,
} from 'react';

interface UserState {
  name: string
}

interface Props {
  children?:ReactNode;
  initialUser: UserState
}

type Action = {
  type: string,
  id?: string,
  username?: string,
}
// 规定Reducer的类型
type ExpandReducer = React.Reducer<UserState, Action>

// 初始化Context
const initialStore:UserState = {
  name: '',
};
const initialDispatch: React.Dispatch<Action> = () => null;
const UserContext = createContext({
  store: initialStore,
  dispatch: initialDispatch,
});

const userReducer = (preState:UserState, action:Action) => {
  switch (action.type) {
    case 'getName': {
      return { ...preState };
    }
    case 'logout': {
      return { ...preState, name: '' };
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
