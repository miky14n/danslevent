"use client";
import { useEffect, useState } from "react";
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
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AgeVerificationModal() {
  const { isOpen, onOpen, onClose: internalOnClose } = useDisclosure();
  const [checked, setChecked] = useState(false);
  const pathname = usePathname();
  // Al cargar, revisa si ya se aceptó antes
  useEffect(() => {
    const isAdult = localStorage.getItem("isAdult");
    if (!isAdult) {
      onOpen(); // Abre modal solo si no hay confirmación
    } else {
      setChecked(true); // Ya aceptó antes
    }
  }, [onOpen]);

  const handleYes = () => {
    localStorage.setItem("isAdult", "true"); // Guardar confirmación
    setChecked(true);
    internalOnClose();
  };

  const handleNo = () => {
    alert("Debes ser mayor de edad para acceder a este sitio.");
    // Podrías redirigir a otra página en lugar del alert
    // window.location.href = "https://google.com";
  };

  if (checked) return null; // Si ya aceptó, no mostrar nada

  return (
    <>
      {pathname !== "/unauthorized" && (
        <Modal
          isOpen={isOpen}
          onClose={() => {}}
          backdrop="blur"
          classNames={{
            base: "footer-font bg-secondary text-quaternary max-w-sm sm:max-w-md rounded-2xl shadow-lg",
            header: "text-lg sm:text-xl  text-center",
            body: "sm:text-base leading-relaxed text-center",
            footer: "flex gap-4 justify-center mt-4",
          }}
          hideCloseButton={true}
          size="3xl"
        >
          <ModalContent>
            {() => (
              <>
                <ModalHeader className="bg-secondary"></ModalHeader>
                <ModalBody>
                  <Image
                    src={"/images/log-danslevent.png"}
                    width={600}
                    height={600}
                    alt="Imagen banner"
                  />
                  <p className="text-2xl">¿Eres mayor de edad?</p>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="primary"
                    onPress={handleYes}
                    className="footer-font rounded-xl text-2xl"
                  >
                    Sí
                  </Button>
                  <Link href={"/unauthorized"}>
                    <Button
                      color="primary"
                      onPress={handleNo}
                      className="footer-font rounded-xl text-2xl"
                    >
                      No
                    </Button>
                  </Link>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
