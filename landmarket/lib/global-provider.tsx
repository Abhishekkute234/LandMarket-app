import React, { createContext, useContext, ReactNode } from "react";
import { getCurrentUser } from "./appwrite";
import { useAppwrite } from "./useAppwrite";
import { Redirect } from "expo-router";

interface GlobalContextType {
  isLogged: boolean;
  user: User | null;
  loading: boolean;
  refetch: () => void;
}

interface User {
  $id: string;
  name: string;
  email: string;
  avatar: string;
}

const defaultContext: GlobalContextType = {
  isLogged: false,
  user: null,
  loading: true,
  refetch: () => {},
};

const GlobalContext = createContext<GlobalContextType>(defaultContext);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const {
    data: user,
    loading,
    error,
    refetch,
  } = useAppwrite({ fn: getCurrentUser });

  const isLogged = !!user;

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    console.error("Error fetching user data:", error);
    return <ErrorScreen message="Failed to fetch user data" />;
  }

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        user,
        loading,
        refetch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

export default GlobalProvider;
