import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = Readonly<{
  children: ReactNode;
  className?: string;
}> & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className">;

export function ButtonLink({ children, className, ...props }: ButtonLinkProps) {
  const classes = ["button-link", className].filter(Boolean).join(" ");

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  );
}
