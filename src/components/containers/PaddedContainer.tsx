type Props = {
  children?: React.ReactNode;
};

const PaddedContainer: React.FC<Props> = ({ children }) => {
  return <div className="max-w-3xl mx-auto p-4">{children}</div>;
};

export default PaddedContainer;
