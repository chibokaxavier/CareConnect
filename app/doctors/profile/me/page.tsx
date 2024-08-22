"use client";
import React from "react";
import ProtectedRoute from "../../../../components/ProtectedRoute";

const page = () => {
  return (
    <ProtectedRoute allowedRoles={["doctor"]}>
      <div>page</div>
    </ProtectedRoute>
  );
};

export default page;
