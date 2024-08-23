"use client";
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const useFetchData = (url: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { token } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await res.json();
        if (!res.ok) {
          throw new Error(result.message + "🤔");
        }
        setData(result.data);
        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchData();
  }, [url]);
  return { data, loading, error };
};

export default useFetchData;
