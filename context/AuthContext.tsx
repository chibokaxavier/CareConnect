"use client";
import { createContext } from "react";
import { useContext, useEffect, useReducer, ReactNode, Dispatch } from "react";
interface AuthState {
  user: {
    name: string;
    photo: string;
    role: string;
  } | null;
  role: string | null;
  token: string | null;
}

type AuthAction =
  | { type: "LOGIN_START" }
  | {
      type: "LOGIN_SUCCESS";
      payload: {
        user: {
          name: string;
          photo: string;
          role: string;
        };
        token: string;
        role: string;
      };
    }
  | { type: "LOGOUT" };

type AuthContextType = AuthState & {
  dispatch: React.Dispatch<AuthAction>;
};
interface User {
  photo: string;
  name: string;
  role: string;
  // add other properties that your `user` object contains
}

const initialState = {
  user: (() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? (JSON.parse(storedUser) as User) : null;
  })(),
  role: localStorage.getItem("role") || null,
  token: localStorage.getItem("token") || null,
};

export const authContext = createContext<AuthContextType | undefined>(
  undefined
);
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        role: null,
        token: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.role,
      };
    case "LOGOUT":
      return {
        user: null,
        role: null,
        token: null,
      };
    default:
      return state;
  }
};
interface AuthContextProviderProps {
  children: ReactNode;
}
export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("token", JSON.stringify(state.token));
    localStorage.setItem("role", JSON.stringify(state.role));
  }, [state]);
  return (
    <authContext.Provider value={{ ...state, dispatch }}>
      {children}
    </authContext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};
