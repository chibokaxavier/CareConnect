"use client";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import HashLoader from "react-spinners/HashLoader";
import BounceLoader from "react-spinners/BounceLoader";

const ProtectedRoute = ({
  children,
  allowedRoles,
}: {
  children: ReactNode;
  allowedRoles: string[];
}) => {
  const { role, token, isLoading } = useAuth();
  const router = useRouter();
  const isAllowed = role && allowedRoles.includes(role);

  if (isLoading) {
    return (
      <div className="flex my-28 justify-center text-center items-center">
        <BounceLoader color="#111111" size={100} />
      </div>
    ); // or a loading spinner
  }

  if (!isAllowed || !token) {
    router.push("/Login");
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
