// import React, {
//   createContext, ReactNode, useContext, useMemo, useReducer,
// } from 'react';
// import { parseCookies } from 'nookies';
// import axios from 'axios/index';
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
//   let username = '';
//   const cookies = parseCookies();
//   const { id } = cookies;
//   switch (action.type) {
//     case 'checkLogin': {
//       return { ...preState, isLogin: !!id };
//     }
//     case 'getName': {
//       const instance = axios.create();
//       await instance({
//         url: '/api/getRedis',
//         params: { id },
//         method: 'get',
//       }).then((r) => {
//         username = r.data;
//       });
//       return { ...preState, username };
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
