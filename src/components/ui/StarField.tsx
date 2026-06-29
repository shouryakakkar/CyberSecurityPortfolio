"use client";

import { useEffect, useRef } from "react";

export function StarField() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const STAR_COUNT = 200;
        type Star = { x: number; y: number; z: number; size: number; speed: number };
        const stars: Star[] = Array.from({ length: STAR_COUNT }, () => ({
            x: Math.random() * width - width / 2,
            y: Math.random() * height - height / 2,
            z: Math.random() * width,
            size: 0,
            speed: Math.random() * 0.3 + 0.1,
        }));

        let animFrame: number;

        const onMouseMove = (e: MouseEvent) => {
            mouseRef.current = {
                x: (e.clientX / width - 0.5) * 30,
                y: (e.clientY / height - 0.5) * 30,
            };
        };

        const draw = () => {
            ctx.fillStyle = "rgba(0,0,0,0.15)";
            ctx.fillRect(0, 0, width, height);

            ctx.save();
            ctx.translate(width / 2 + mouseRef.current.x, height / 2 + mouseRef.current.y);

            for (const star of stars) {
                star.z -= star.speed;
                if (star.z <= 0) {
                    star.x = Math.random() * width - width / 2;
                    star.y = Math.random() * height - height / 2;
                    star.z = width;
                }

                const sx = (star.x / star.z) * width;
                const sy = (star.y / star.z) * height;
                const size = ((1 - star.z / width) * 2.5);
                const alpha = (1 - star.z / width);

                // Draw star with subtle silver glow
                const gradient = ctx.createRadialGradient(sx, sy, 0, sx, sy, size * 2);
                gradient.addColorStop(0, `rgba(220, 225, 240, ${alpha})`);
                gradient.addColorStop(1, "transparent");

                ctx.beginPath();
                ctx.arc(sx, sy, Math.max(size, 0.3), 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
            }
            ctx.restore();
            animFrame = requestAnimationFrame(draw);
        };

        const onResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("resize", onResize);
        draw();

        return () => {
            cancelAnimationFrame(animFrame);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.85 }}
        />
    );
}
