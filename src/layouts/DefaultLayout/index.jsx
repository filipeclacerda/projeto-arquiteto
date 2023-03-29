import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../../components/Menu";

export default function DefaultLayout() {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  );
}
