"use client"
import { createContext, useState, ReactNode } from "react"

// Define the context type
interface MainContextType {
  phone: boolean;
  setPhone: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create context with proper typing
export const MainContext = createContext<MainContextType | undefined>(undefined)

// Define props type for the provider
interface AppDataProviderProps {
  children: ReactNode;
}

export function AppDataProvider({ children }: AppDataProviderProps) {
  const [phone, setPhone] = useState<boolean>(false)

  return (
    <MainContext.Provider value={{ phone, setPhone }}>
      {children}
    </MainContext.Provider>
  )
}