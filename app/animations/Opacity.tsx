import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

export const Opacity = ({ children, width = "fit-content" }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 1, delay: 0.5 }}
            >
                {children}
            </motion.div>
        </div>
    )
}
