import { useEffect, useRef } from "react";
export function useAutoResizeTextarea(value: string, isEditing: boolean) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textareaRef.current && isEditing) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value, isEditing]);
  return textareaRef;
}