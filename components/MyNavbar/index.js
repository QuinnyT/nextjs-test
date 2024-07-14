import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
// import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
// import DrawerComp from "./Drawer";
const Header = ({ routes }) => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const renderRoutes = routes.map(({ name, icon, noCollapse, key, href }) => {
    const returnValue = 
      <Tab label={name} component={Link} value={href} href={href} >
        {/* <Link
          href={href}
          key={key}
          rel="noreferrer"
          sx={{ textDecoration: "none" }}
        /> */}
      </Tab>
    ;

    return returnValue;
  });

  return (
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Bit
              </Typography>
              {/* <DrawerComp /> */}
            </>
          ) : (
            <>
              <Tabs
                indicatorColor="#fefefe"
                textColor="secondary"
                value={value}
                onChange={(e, value) => setValue(value)}
                sx={{ width: "60%" }}
              >
                {/* <Tab label="Chat" />
                <Tab label="Cabin" />
                <Tab label="Experiments" /> */}
                {renderRoutes}
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Upload
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
  );
};

export default Header;