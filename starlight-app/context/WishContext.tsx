"use client";

import { createContext, useContext, useState } from "react";
import { WishData, initialWishData } from "@/lib/wishData";

type WishContextType = {
  wishData: WishData;
  setWishData: React.Dispatch<React.SetStateAction<WishData>>;
};

const WishContext = createContext<WishContextType | null>(null);

export function WishProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [wishData, setWishData] = useState(initialWishData);

  return (
    <WishContext.Provider
      value={{
        wishData,
        setWishData,
      }}
    >
      {children}
    </WishContext.Provider>
  );
}

export function useWish() {
  const context = useContext(WishContext);

  if (!context) {
    throw new Error("useWish must be used inside WishProvider");
  }

  return context;
}