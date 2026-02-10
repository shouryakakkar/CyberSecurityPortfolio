import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";

interface SectionProps extends HTMLMotionProps<"section"> {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export function Section({ children, className, id, ...props }: SectionProps) {
    return (
        <motion.section
            id={id}
            className={cn(
                "py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10",
                className
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            {...props}
        >
            {children}
        </motion.section>
    );
}
