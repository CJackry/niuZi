import React, {
  createContext, ReactNode, useContext, useMemo, useReducer,
} from 'react';

interface UserState {
  name: string | undefined
}

interface Props {
  children?:ReactNode;
  initialUser: UserState
}

type Action = {
  type: string,
  id?: string,
  name?: string,
}
// 规定Reducer的类型
type ExpandReducer = React.Reducer<UserState, Action>

// 初始化Context
const initialStore:UserState = {
  name: undefined,
};
const initialDispatch: React.Dispatch<Action> = () => null;
const UserContext = createContext({
  store: initialStore,
  dispatch: initialDispatch,
});

const userReducer = (preState:UserState, action:Action) => {
  switch (action.type) {
    case 'login': {
      console.log('reducer', action.name);
      return { ...preState, name: action.name };
    }
    case 'logout': {
      return { ...preState, name: undefined };
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
