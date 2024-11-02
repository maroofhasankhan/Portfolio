import { stagger } from "framer-motion";

export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.5,
    },
  },
};

export const titleAnim = {
  hidden: {
    y: 200,
  },
  show: {
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.75 },
  },
};

export const photoAnim = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};

export const lineAnim = {
  hidden: { width: "0%" },
  show: {
    width: "100%",
    transition: {
      duration: 1,
    },
  },
};

export const slider = {
  hidden: { x: "-130%", skew: "45deg" },
  show: {
    x: "100%",
    skew: "0deg",
    transition: { type: "tween", ease: "easeOut", duration: 1 },
  },
};

export const sliderContainer = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.1,
      ease: "easeOut",
    },
  },
};

export const scrollReveal = {
  hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const flipAni = {
  hidden: {
    rotateX: "180deg",
    opacity: 0,
    transition: {
      duration: 0.25,
    },
  },
  show: {
    rotateX: "0deg",
    opacity: 1,
    transition: {
      duration: 0.2,
      staggerChildren: 0.0,
    },
  },
};
export const skiingAnimation = {
  variants: {
    idle: {
      x: 0,
      y: 0,
      rotate: 0,
    },
    skiing: {
      x: [0, 1, -1, 1, 0],
      y: [0, -1, 0, -1, 0],
      rotate: [0, -1, 1, -1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
  initial: "idle",
  animate: "skiing",
};
export const scale = {
  hidden: {
    scale: 1.2,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const leftAnim = {
  hide: {
    x: "-100%",
    opacity: 0,
  },
  show: {
    x: "0%",
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};
export const rightAnim = {
  hide: {
    x: "100%",
    opacity: 0,
  },
  show: {
    x: "0%",
    opacity: 1,
    transition: { duration: 2, ease: "easeOut" },
    staggerChildren: 0.1,
  },
};
