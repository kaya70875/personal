'use client';

import { StaticImageData } from "next/image";
import { createContext, SetStateAction, useContext, useState } from "react";

interface ModalImage {
    open: boolean;
    image: StaticImageData | null;
}

interface ImageModalProps {
    modalImage: ModalImage;
    setModalImage: React.Dispatch<SetStateAction<ModalImage>>;
}

const ImageContext = createContext<ImageModalProps | undefined>(undefined);

export default function ImageModalProvider({ children }: { children: React.ReactNode }) {
    const [modalImage, setModalImage] = useState<ModalImage>({
        open: false,
        image: null
    });

    return (
        <ImageContext.Provider value={{ modalImage, setModalImage }}>
            {children}
        </ImageContext.Provider>
    )
}

export const useModal = () => {
    const context = useContext(ImageContext);

    if (context === undefined) {
        throw new Error('useContext must be used within a ThemeContextProvider');
    }

    return context;
}