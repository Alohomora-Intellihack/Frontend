import React from "react";
import { NavLink } from "react-router-dom";
import { links } from "./SidebarLinks";
import { Drawer,Toolbar,Divider,List,ListItem,ListItemButton,ListItemIcon,ListItemText,} from "@mui/material";
import { LayoutStyles } from "../styles";

const Sidebar = () => {
  const classes = LayoutStyles();

  return (
    <>
      <Drawer variant="permanent" anchor="left" className={classes.drawer} >
        <Toolbar style={{backgroundColor:'#7F00FF'}}>Train well</Toolbar>
        <Divider />
        <List  style={{backgroundColor:'#E5E4E2'}} >
          {links.map((text) => (
            <NavLink to={`/home/${text.name}`} key={text.name}>
              <ListItem key={text} disablePadding>
                <ListItemButton >
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
