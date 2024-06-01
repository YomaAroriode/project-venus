import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <div className="mx-5 mt-[72px] sm:mt-16">{children}</div>;
};

export default Wrapper;
