import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { links } from "./SidebarLinks";
import { Drawer,Toolbar,Divider,List,ListItem,ListItemButton,ListItemIcon,ListItemText } from "@mui/material";
import { LayoutStyles } from "../styles";
import { UserContext } from "./../../../Context/UserContext";

const Sidebar = () => {
  const classes = LayoutStyles();
  const { userId } = useContext(UserContext);

  return (
    <>
      <Drawer
        variant="permanent"
        anchor="left"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}>
        <Toolbar style={{ backgroundColor: "#8d67af", color: "#fff" , height : '80px'}}>
          <p style={{paddingLeft:'50px',fontSize:'18px'}}>Train well</p>
        </Toolbar>
        <Divider />
        <List>
          {links.map((text) => (
            <NavLink
              to={`/home/${text.name}`}
              key={text.name}
              activeClassName={classes.activeNavLink} style={{ textDecoration: 'none', color: 'purple' }}>
              <ListItem key={text} disablePadding >
                <ListItemButton style={{paddingLeft:'50px'}}>
                  <ListItemIcon>{text.icon}</ListItemIcon>
                  <ListItemText primary={text.name} />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
