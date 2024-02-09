"use client";

import { type ElementRef, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import CloseIcon from "@/public/close.svg";
import Image from "next/image";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }

    setDomReady(true);
  }, []);

  function onDismiss() {
    router.back();
  }

  return domReady
    ? createPortal(
        <div className="modal-backdrop fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <dialog
            ref={dialogRef}
            className="modal relative w-[1000px] h-[800px] flex justify-center items-center rounded-md"
            onClose={onDismiss}
          >
            <button
              onClick={onDismiss}
              className="close-button absolute top-0 right-0 pr-6 pt-5"
            >
              <Image src={CloseIcon} width={20} height={20} alt="close" />
            </button>
            {children}
          </dialog>
        </div>,
        document.getElementById("modal-root")!
      )
    : null;
}
