"use client";
import { createContext, useState } from "react";
import { useContext, useEffect, useReducer, ReactNode, Dispatch } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
  isLoading: boolean;
  dispatch: React.Dispatch<AuthAction>;
};
interface User {
  photo: string;
  name: string;
  role: string;
  // add other properties that your `user` object contains
}

const initialState: AuthState = {
  user: (() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      return storedUser ? (JSON.parse(storedUser) as User) : null;
    }
    return null;
  })(),
  role: typeof window !== "undefined" ? localStorage.getItem("role") : null,
  token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
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
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (state.user && state.token && state.role) {
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("token", state.token);
      localStorage.setItem("role", state.role);
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("role");
    }
    setIsLoading(false);
  }, [state.user, state.token, state.role]);

  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <BounceLoader size={100} color="#111111" />
  //     </div>
  //   ); // Or a spinner/loader component
  // }

  return (
    <authContext.Provider value={{ ...state, dispatch, isLoading }}>
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
