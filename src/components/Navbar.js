import * as React from "react";
import PropTypes from "prop-types";

// import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
// import IconButton from '@mui/material/IconButton';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

import "./sidebar.css";
import { Link } from "react-router-dom";

const drawerWidth = 240;

function Sidebar(props) {
  // const { window } = props;
  // const [mobileOpen, setMobileOpen] = React.useState(false);

  // const handleDrawerToggle = () => {
  //   setMobileOpen(!mobileOpen);
  // };
  console.log("pain");
  const icons = [
    <HomeIcon className="icon" />,
    <PersonIcon className="icon" />,
    <BookOnlineIcon className="icon" />,
    <PaymentOutlinedIcon className="icon" />,
    <ChatBubbleOutlineOutlinedIcon className="icon" />,
  ];
  const drawer = (
    <div className="main">
      <h1 className="logo">DoctrEx</h1>
      {/* <Divider /> */}
      <List className="Box">
        {[
          "Dashboard",
          "Appointment",
          "Chat",
          "Payment",
          "Account",
          "Logout",
        ].map((text, index) => (
          <Link
            to={"/" + text.toLowerCase()}
            style={{ textDecoration: "none" }}
          >
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{icons[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  return (
    <Drawer
      className="drawer"
      variant="permanent"
      sx={{
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
      open
    >
      {drawer}
    </Drawer>
  );
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Sidebar;
