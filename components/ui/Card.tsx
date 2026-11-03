import type { HTMLAttributes, ReactNode } from "react";

import styles from "./ui.module.css";

type CardProps = Readonly<
  {
    children: ReactNode;
    className?: string;
  } & HTMLAttributes<HTMLElement>
>;

export function Card({ children, className, ...props }: CardProps) {
  const classes = [styles.card, className].filter(Boolean).join(" ");

  return (
    <article className={classes} {...props}>
      {children}
    </article>
  );
}
