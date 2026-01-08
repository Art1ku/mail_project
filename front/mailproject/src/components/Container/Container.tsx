import React, { ReactNode } from "react";
import styles from "./Container.module.scss"

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: ContainerProps) {
  return <div className={`${styles.container} ${className}`.trim()}>{children}</div>;
}

