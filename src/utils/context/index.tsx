import { useContext, createContext, useState, ReactNode } from "react";
import { CartDialogContextType, AddToCartContextType } from "../../type";

//CartDialogContext Creation
const CartDialogContext = createContext<CartDialogContextType | undefined>(
  undefined
);

export const CartDialogProvider = ({ children }: { children: ReactNode }) => {
  const [dialog, openDialog] = useState(false);

  const handleClickDialog = () => {
    openDialog(!dialog);
  };

  return (
    <CartDialogContext.Provider value={{ dialog, handleClickDialog }}>
      {children}
    </CartDialogContext.Provider>
  );
};

//AddToCartContext Creation
const AddToCartContext = createContext<AddToCartContextType | undefined>(
  undefined
);

export const AddToCartProvider = ({ children }: { children: ReactNode }) => {
  const [nbArticles, setNbArticles] = useState(0);

  const handleUpdate = (nb: number) => {
    setNbArticles((prevNbArticles) => prevNbArticles + nb);
  };

  return (
    <AddToCartContext.Provider value={{ nbArticles, handleUpdate }}>
      {children}
    </AddToCartContext.Provider>
  );
};

// Exports
export const useCartDialog = () => {
  const context = useContext(CartDialogContext);
  if (context === undefined) {
    throw new Error("useCartDialog must be used within a CartDialogProvider");
  }
  return context;
};

export const useAddToCartDialog = () => {
  const context = useContext(AddToCartContext);
  if (context === undefined) {
    throw new Error(
      "useAddToCartDialog must be used within an AddToCartProvider"
    );
  }
  return context;
};
