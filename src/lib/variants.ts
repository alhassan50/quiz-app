export const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 50 : -50,
        opacity: 0
      };
    },

    center: {
      x: 0,
      opacity: 1
    },
    
    exit: (direction: number) => {
      return {
        x: direction < 0 ? 50 : -50,
        opacity: 0
      };
    }
};

export const transition={
    x: { type: "spring", stiffness: 800, damping: 30 },
    opacity: { duration: 0.5 }
}