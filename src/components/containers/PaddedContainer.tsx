type Props = {
  children?: React.ReactNode;
};

const PaddedContainer: React.FC<Props> = ({ children }) => {
  return <div className="bg-red-500 max-w-5xl mx-auto">{children}</div>;
};

export default PaddedContainer;
