import * as React from "react";

const Loading: React.FunctionComponent<{
  children?: React.ReactNode;
  message: string;
}> = ({ message = "Loading...", children }) => (
  <h1>
    {message}...
    {children}
  </h1>
);
export default Loading;
