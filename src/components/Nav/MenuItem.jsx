import * as React from "react";
import { motion } from "framer-motion";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

export const MenuItem = ({ i, item, link }) => {
    return (
        <>
            <motion.li
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <div className="px-4 font-semibold text-3xl tracking-tight" ><a href={`${link}`}>{item}</a></div>
            </motion.li>
        </>
    );
};
