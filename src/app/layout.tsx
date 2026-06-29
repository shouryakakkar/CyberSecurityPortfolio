import type { Metadata } from "next";
import { DM_Serif_Display, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { CursorTracker } from "@/components/ui/CursorTracker";
import { StarField } from "@/components/ui/StarField";

const dmSerifDisplay = DM_Serif_Display({
    variable: "--font-display",
    subsets: ["latin"],
    weight: ["400"],
    style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
    variable: "--font-sans",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["normal", "italic"],
});

export const metadata: Metadata = {
    title: "Shourya Kakkar | Cybersecurity Portfolio",
    description: "Professional portfolio of a cybersecurity engineer and security researcher.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={`${dmSerifDisplay.variable} ${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}
            >
                <CursorTracker />
                <StarField />
                {children}
            </body>
        </html>
    );
}
