import React from "react";

type Props = {
  children?: React.ReactNode;
};

const GlobalLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="text-red-500">
      <>
        <p>fooooo</p>
        {children}
      </>
    </div>
  );
};

export default GlobalLayout;
