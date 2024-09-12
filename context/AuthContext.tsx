"use client";
import { createContext, useState } from "react";
import { useContext, useEffect, useReducer, ReactNode, Dispatch } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {jwtDecode} from "jwt-decode";

interface TokenPayload {
  expiresIn: number; // Expiration time (in seconds)
  // add other properties if your token has them
}

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
  | {
      type: "UPDATE";
      payload: {
        user: {
          name: string;
          photo: string;
          role: string;
        };
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

const isTokenExpired = (token: string): boolean => {
  try {
    const decodedToken = jwtDecode<TokenPayload>(token);
    const currentTime = Math.floor(Date.now() / 1000); // Get current time in seconds
    return decodedToken.expiresIn < currentTime; // Check if the token is expired
  } catch (error) {
    console.error("Invalid token:", error);
    return true; // If token is invalid, consider it expired
  }
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
    case "UPDATE":
      return {
        ...state, // Keep the existing token and role
        user: action.payload.user,
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
    if (state.token && isTokenExpired(state.token)) {
      dispatch({ type: "LOGOUT" }); // Token is expired, log out the user
    } else if (state.user && state.token && state.role) {
      // Token is valid, store it in localStorage
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("token", state.token);
      localStorage.setItem("role", state.role);
    } else {
      // No user or token, clear localStorage
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("role");
    }
    setIsLoading(false);
  }, [state.user, state.token, state.role]);

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
