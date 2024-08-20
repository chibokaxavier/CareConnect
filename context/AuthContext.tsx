'use client'
import { createContext } from "react";
import { useContext, useEffect, useReducer, ReactNode, Dispatch } from "react";
interface AuthState {
  user: string | null;
  role: string | null;
  token: string | null;
}

type AuthAction =
  | { type: "LOGIN_START" }
  | {
      type: "LOGIN_SUCCESS";
      payload: { user: string; token: string; role: string };
    }
  | { type: "LOGOUT" };

  type AuthContextType = AuthState & {
    dispatch: React.Dispatch<AuthAction>;
  };

const initialState = {
  user: null,
  role: null,
  token: null,
};

export const authContext = createContext<AuthContextType | undefined>(
  undefined
);
const authReducer = (state: AuthState, action: AuthAction):AuthState => {
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