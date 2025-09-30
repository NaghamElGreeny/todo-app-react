import { useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 bg-black/30 px-3 lg:px-6 backdrop-blur-xs flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-[var(--color-bg)] rounded-2xl shadow-xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()} 
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
