"use client";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({
  children,
  allowedRoles,
}: {
  children: ReactNode;
  allowedRoles: string[];
}) => {
  const { role, token } = useAuth();
  const router = useRouter();
  const isAllowed = role && allowedRoles.includes(role);

  if (typeof role === "undefined" || typeof token === "undefined") {
    return null; // or <LoadingSpinner />
  }

  // If the user is not allowed or there is no token, redirect
  if (!isAllowed || !token) {
    router.push("/login");
    return null;
  }
  if (
    typeof role === "undefined" ||
    role === null ||
    typeof token === "undefined" ||
    token === null
  ) {
    router.push("/login");
    return null;
  }
  // If the user is allowed, render the children
  return <>{children}</>;
};

export default ProtectedRoute;
