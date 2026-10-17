"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type FounderKey = "naveen" | "nidhith" | "hemanth";

interface FounderModalContextType {
  isOpen: boolean;
  activeFounder: FounderKey;
  openFounderModal: (founder: FounderKey) => void;
  closeFounderModal: () => void;
  setActiveFounder: (founder: FounderKey) => void;
}

const FounderModalContext = createContext<FounderModalContextType | undefined>(undefined);

export const FounderModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFounder, setActiveFounder] = useState<FounderKey>("naveen");

  const openFounderModal = (founder: FounderKey) => {
    setActiveFounder(founder);
    setIsOpen(true);
  };

  const closeFounderModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Expose on window for convenience
    if (typeof window !== "undefined") {
      (window as any).openFounderPreviewModal = (key: FounderKey) => openFounderModal(key);
      (window as any).closeFounderPreviewModal = () => closeFounderModal();
    }
  }, []);

  return (
    <FounderModalContext.Provider
      value={{
        isOpen,
        activeFounder,
        openFounderModal,
        closeFounderModal,
        setActiveFounder,
      }}
    >
      {children}
    </FounderModalContext.Provider>
  );
};

export const useFounderModal = () => {
  const context = useContext(FounderModalContext);
  if (!context) {
    throw new Error("useFounderModal must be used within a FounderModalProvider");
  }
  return context;
};
