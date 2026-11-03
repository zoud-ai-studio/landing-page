import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import styles from "./ui.module.css";

type SectionProps<T extends ElementType = "section"> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Section<T extends ElementType = "section">({
  as,
  children,
  className,
  ...props
}: SectionProps<T>) {
  const Component = as ?? "section";
  const classes = [styles.section, className].filter(Boolean).join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
