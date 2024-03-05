import React from 'react';

const Content: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="h-full overflow-y-auto ml-64 md:ml-0">{children}</div>;
};

export default Content;
