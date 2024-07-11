"use client";

import { useMaterialUIController, setMiniSidenav } from "context";

import brandWhite from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";
import { useState } from 'react';

import Sidenav from 'components/Sidenav'

export default function NavBar() {
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
      name: "chat",
      icon: "",
      noCollapse: false,
      key: "dashboard",
      href: "/"
    }, {
      name: "goods",
      icon: "",
      noCollapse: false,
      key: "goods",
      href: "/goods"
    }, {
      name: "store",
      icon: "",
      noCollapse: false,
      key: "store",
      href: "/store"
    }
  ]

  return (
    <>
      <Sidenav
        color={sidenavColor}
        brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
        brandName="Bit"
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        routes={routes}
      />
    </>
  );
}
