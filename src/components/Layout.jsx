import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>

      <footer>
        <p>&copy; 2025 Ressurser</p>
      </footer>
    </>
  );
};

export default Layout;
