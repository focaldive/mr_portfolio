import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = () => (
  <>
    <motion.ul variants={variants}>
      {itemIds.map(i => (
        <MenuItem i={i} key={i} item={items[i]} link={links[i]} />
      ))}
    </motion.ul>
  </>
);

const itemIds = [0, 1, 2, 3];
const items = ["Home", "Work", "Services", "About"];
const links = ["/#intro", "/#work", "/#service", "/#about"];
