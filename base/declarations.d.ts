declare module "*.jsx" {
  import * as React from "react";

  // Declare exports genéricos para arquivos JSX
  export const Header: React.FC<any>;

  const Component: React.FC<any>;
  export default Component;
}
