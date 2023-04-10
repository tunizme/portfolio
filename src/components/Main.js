import React from "react";

const Main = ({ children }) => {
  return (
    <div className="bg-[#fff] dark:bg-[var(--color-bg-dark)] dark:text-[var(--text-color-dark)] transition-all ease-in-out duration-500">
      {children}
    </div>
  );
};

export default Main;
