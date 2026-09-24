import React, { createContext, useContext, useEffect, useState } from 'react';

interface ModalContextType {
  isAdmissionModalOpen: boolean;
  openAdmissionModal: () => void;
  closeAdmissionModal: () => void;
  isSearchModalOpen: boolean;
  openSearchModal: () => void;
  closeSearchModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState<boolean>(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);

  // First visit popup logic
  useEffect(() => {
    try {
      const hasSeenModal = localStorage.getItem('admissionFormSeen');
      if (!hasSeenModal) {
        const timer = setTimeout(() => {
          setIsAdmissionModalOpen(true);
        }, 1300);
        return () => clearTimeout(timer);
      }
    } catch {
      // Fallback for sandboxes without localStorage
    }
  }, []);

  const openAdmissionModal = () => {
    setIsAdmissionModalOpen(true);
  };

  const closeAdmissionModal = () => {
    setIsAdmissionModalOpen(false);
    try {
      localStorage.setItem('admissionFormSeen', 'true');
    } catch {
      // Ignore
    }
  };

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  // Prevent background scroll when any modal is open
  useEffect(() => {
    if (isAdmissionModalOpen || isSearchModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isAdmissionModalOpen, isSearchModalOpen]);

  // Handle ESC key to close open modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isAdmissionModalOpen) closeAdmissionModal();
        if (isSearchModalOpen) closeSearchModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAdmissionModalOpen, isSearchModalOpen]);

  return (
    <ModalContext.Provider
      value={{
        isAdmissionModalOpen,
        openAdmissionModal,
        closeAdmissionModal,
        isSearchModalOpen,
        openSearchModal,
        closeSearchModal
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
