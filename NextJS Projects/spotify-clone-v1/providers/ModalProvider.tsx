"use client";

import Modal from "@/components/Modal";

import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  // If this loads, then that means we are loaded in the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Shows us if whatever we are rendering is serverside, we will return null
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Modal
        title="Test Model"
        description="Test Description"
        isOpen
        onChange={() => {}}
      >
        Test Children{" "}
      </Modal>
    </>
  );
};

export default ModalProvider;
