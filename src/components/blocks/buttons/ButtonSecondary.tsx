import React from "react";
import ButtonBase from "./ButtonBase";

type Props = {
  children?: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonSecondary: React.FC<Props> = ({
  className = "",
  children,
  ...rest
}) => {
  const baseClasses = `border-icco-light-90`;
  const resolvedClasses = baseClasses + " " + className;
  return (
    <ButtonBase {...rest} className={resolvedClasses}>
      {children}
    </ButtonBase>
  );
};

export default ButtonSecondary;
