import { Component } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface CustomMotionDivProps extends HTMLMotionProps<"div"> {
  initial?: "initial" | "final" | "hidden";
}

export default class CustomMotionDiv extends Component<CustomMotionDivProps> {
  render() {
    return <motion.div {...this.props}>{this.props.children}</motion.div>;
  }
}
