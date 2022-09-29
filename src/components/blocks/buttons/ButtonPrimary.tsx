import React from "react";
import ButtonBase from "./ButtonBase";

type Props = {
  children?: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonPrimary: React.FC<Props> = ({
  className = "",
  children,
  ...rest
}) => {
  const baseClasses = `border-red-500`;
  const resolvedClasses = baseClasses + " " + className;
  return (
    <ButtonBase {...rest} className={resolvedClasses}>
      {children}
    </ButtonBase>
  );
};

export default ButtonPrimary;
