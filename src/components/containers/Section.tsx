type Props = {
  children?: React.ReactNode;
};

const Section: React.FC<Props> = ({ children }) => {
  return <div className="my-12">{children}</div>;
};

export default Section;
