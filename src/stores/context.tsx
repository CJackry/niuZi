// import React, {
//   createContext, ReactNode, useContext, useMemo, useReducer,
// } from 'react';
// import { parseCookies } from 'nookies';
//
// interface userState {
//   name:string
// }
// interface Props {
//   children?:ReactNode;
//   initialUser: object
// }
//
// type Action = {
//   type: string,
//   id?: string
// }
//
// const UserContext = createContext({
//   store: null,
//   dispatch: () => null,
// });
//
// const userReducer = async (preState:userState, action:Action) => {
//   const cookies = parseCookies();
//   const { id } = cookies;
//   switch (action.type) {
//     case 'checkLogin': {
//       return { ...preState, isLogin: !!id };
//     }
//     default: {
//       return { ...preState };
//     }
//   }
// };
//
// export const UserProvider:React.FC<Props> = ({ children, initialUser }) => {
//   const [store, dispatch] = useReducer(userReducer, initialUser);
//   const state = useMemo(() => ({ store, dispatch }), [store, dispatch]);
//   return (
//     <UserContext.Provider value={state}>
//       {children}
//     </UserContext.Provider>
//   );
// };
//
// export function useUserContext() {
//   return useContext(UserContext);
// }
