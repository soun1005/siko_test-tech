export const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export const staggeredMotion = (
  direction: string,
  totalDelayTime: number,
  delayTime: number,
  duration: number = 1.2,
) => {
  return {
    initial: {
      opacity: 0,
      // y: 100,
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        delay: totalDelayTime + delayTime * index,
        duration: duration,
        type: "tween",
      },
    }),
  };
};
