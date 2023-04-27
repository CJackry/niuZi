import React, {
  createContext, ReactNode, useContext, useMemo, useReducer,
} from 'react';

interface PageState{
    page:number,
}
interface Action{
    page:number,
    type:string,
}
interface Props{
  children?:ReactNode,
  initialVal: PageState
}

type ExpandReducer = React.Reducer<PageState, Action>;

const initialPage:PageState = {
  page: 1,
};
const initialDispatch:React.Dispatch<Action> = () => null;

const PageContext = createContext({
  store: initialPage,
  dispatch: initialDispatch,
});

const pageReducer = (preState:PageState, action:Action) => {
  switch (action.type) {
    case 'moveTo': {
      return { ...preState, page: action.page };
    }
    default: {
      return { ...preState };
    }
  }
};

export const PageProvider:React.FC<Props> = ({ children, initialVal }) => {
  const [store, dispatch] = useReducer<ExpandReducer>(
    pageReducer,
    initialVal,
  );
  const state = useMemo(() => ({ store, dispatch }), [store, dispatch]);
  return (
    <PageContext.Provider value={state}>
      {children}
    </PageContext.Provider>
  );
};

export function usePageContext() {
  return useContext(PageContext);
}
