"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import Image from "next/image";

export default function AgeVerificationModal() {
  const { isOpen, onClose: internalOnClose } = useDisclosure({
    defaultOpen: true,
  });

  // Cierre solo por botones
  const handleClose = () => internalOnClose();

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {}}
      backdrop="blur"
      classNames={{
        base: "footer-font bg-secondary text-quaternary max-w-sm sm:max-w-md rounded-2xl shadow-lg",
        header: "text-lg sm:text-xl font-bold text-center",
        body: " sm:text-base leading-relaxed text-center",
        footer: "flex gap-4 justify-center mt-4",
      }}
      hideCloseButton={true}
      size="3xl"
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="bg-secondary">
              Eres mayor de edad?
            </ModalHeader>
            <ModalBody>
              <Image
                src={"/images/log-danslevent.png"}
                width={600}
                height={600}
                alt="Imagen banner"
              />
              {/*<p>
                Para continuar, debe confirmar que es mayor de 18 años.
                <br />
                El consumo de bebidas alcohólicas está prohibido a menores de
                edad.
              </p>*/}
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onPress={handleClose}
                className="footer-font rounded-xl"
              >
                Sí
              </Button>
              <Button color="primary" className="footer-font rounded-xl ">
                No
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
