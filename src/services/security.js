import { api } from "./api"; 
import jwtDecode from "jwt-decode";


const USER_KEY = "@user";

export const signIn = (user) => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  
    //setando o token como padrão em todas as requisições
    api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
    console.log(api.defaults.headers.common["Authorization"])
  };
  export const signOut = () => {
    localStorage.removeItem(USER_KEY);
  
    api.defaults.headers.common["Authorization"] = undefined;
  };
  export const isSignedIn = () => {
    const user = JSON.parse(localStorage.getItem(USER_KEY));
  
    if (user && user.token) {
      const jwtDecoded = jwtDecode(user.token);
  
      console.log(jwtDecoded);
  
      const nowTime = (Date.now() / 1000) | 0;
  
      if (jwtDecoded.exp < nowTime) {
        return signOut();
      }
  
      api.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
      return true;
    }
  };
  