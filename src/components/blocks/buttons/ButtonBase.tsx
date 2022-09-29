type Props = {
  children?: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({ className = "", children, ...rest }) => {
  const baseClasses = `border border-solid px-4 py-2`;
  const resolvedClasses = baseClasses + " " + className;
  return (
    <button {...rest} className={resolvedClasses}>
      {children}
    </button>
  );
};

export default Button;
