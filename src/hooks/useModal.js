import { useCallback, useState } from "react";

const useModal = (initialOpen = false) => {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [content, setContent] = useState(null);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleContent = (item) => {
    setContent(item);
  };

  return {
    isOpen,
    content,
    handleContent,
    onOpen,
    onClose,
  };
};

export default useModal;
