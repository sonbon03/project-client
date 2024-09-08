import React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FunctionComponent = () => {
  return (
    <>
      <div className="container-fluid padding0">
        <span className="screen-darken" />
        {/* <Sidebar /> */}
        <main>
          {/* <Header /> */}
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
