"use client";

import { useEffect, useRef, useState } from "react";

export function CursorTracker() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const trailRef = useRef<HTMLDivElement>(null);
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        let mouseX = 0;
        let mouseY = 0;
        let trailX = 0;
        let trailY = 0;
        let animFrame: number;

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate(${mouseX - 8}px, ${mouseY - 8}px)`;
            }

            const target = e.target as HTMLElement;
            const isHover =
                target.closest("a, button, [role='button'], input, textarea, select") !== null;
            setIsPointer(isHover);
        };

        const animate = () => {
            trailX += (mouseX - trailX) * 0.08;
            trailY += (mouseY - trailY) * 0.08;
            if (trailRef.current) {
                trailRef.current.style.transform = `translate(${trailX - 20}px, ${trailY - 20}px)`;
            }
            animFrame = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", onMouseMove);
        animFrame = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            cancelAnimationFrame(animFrame);
        };
    }, []);

    return (
        <>
            {/* Main cursor dot */}
            <div
                ref={cursorRef}
                className={`cursor-dot ${isPointer ? "cursor-dot--hover" : ""}`}
            />
            {/* Trailing ring */}
            <div
                ref={trailRef}
                className={`cursor-ring ${isPointer ? "cursor-ring--hover" : ""}`}
            />
        </>
    );
}
