"use client";

import Sidenav from 'components/Sidenav'
import ChatBot from "layouts/chatbot";

import { useMaterialUIController, setMiniSidenav } from "context";
import { useState } from 'react';

export default function Page() {
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  const routes = [{
      name: "list 1",
      icon: "",
      noCollapse: false,
      key: "dashboard",
      href: "/"
    }
  ]
  return (
    <>
      <Sidenav
        color={sidenavColor}
        brand={""}
        brandName="历史记录"
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        routes={routes}
      />
      <ChatBot/>
    </>
  );
}
