'use client'

import { checkAuthCSR } from "@/api/auth";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import {  useEffect } from "react";
import LoadingSpinner from "../../ui/loadingSpinner/loadingSpinner";


const DashboardContainer = () => {

  const router = useRouter();

  const { data: user, isLoading, isError } = useQuery({
    queryKey: ["auth"],
    queryFn: checkAuthCSR,
    initialData: null,
    retry: 1,
  });

  useEffect(() => {
    console.log(user)
    if ((isError) && !isLoading) {
      router.push("/");
    }
  }, [user, isError, isLoading]);

  if (isLoading) {
    return (
      <LoadingSpinner />
    );
  }

    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}

export default DashboardContainer;