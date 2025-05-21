'use client';
import { useEffect, useRef, useState } from 'react';
import Image from "next/image";

export default function GallerySlider({ images, className, imageClassName, progressBarClassName }) {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        startTimer();
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [index]);

    const startTimer = () => {
        timeoutRef.current = setTimeout(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
    };

    return (
        <div className={className}>
            {images.map((src, i) => (
                <Image
                    key={i}
                    src={src}
                    alt={`Slide ${i}`}
                    className={`${imageClassName} absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                        i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                    fill
                    objectFit={"cover"}
                />
            ))}
            <div
                key={index}
                className={`${progressBarClassName} absolute h-[2px] bg-[rgba(255,255,255,0.35)] z-20`}
            >
                <div className="progressBar w-full h-full left-0 absolute bg-[rgba(255,255,255,1)]" />
            </div>
        </div>
    );
}
