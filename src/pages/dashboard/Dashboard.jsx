import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import ViewStreamOutlinedIcon from "@mui/icons-material/ViewStreamOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import SearchIcon from "@mui/icons-material/Search";

import "../dashboard/Dashboard.scss";
import Notes from "../notes/Notes";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  backgroundcolor: "#fff",
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    backgroundColor: "#fff",
  }),
  ...(open && {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  let iconlist = [
    {
      icons: <LightbulbOutlinedIcon />,
      iText: "Notes",
    },
    {
      icons: <NotificationsOutlinedIcon />,
      iText: "Reminders",
    },
    {
      icons: <CreateOutlinedIcon />,
      iText: "Edit Labels",
    },
    {
      icons: <ArchiveOutlinedIcon />,
      iText: "Archive",
    },
    {
      icons: <DeleteForeverOutlinedIcon />,
      iText: "Bin",
    },
  ];

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <div className="mainHeader">
            <div className="fundoologo">
              <img
                src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
                alt="logo"
              />
            </div>

            <Typography variant="h5" noWrap component="div">
              Fundoo Notes
            </Typography>

            <div className="searchBar">
              <IconButton className="mag">
                <SearchIcon />
              </IconButton>
              <input className="search" type="text" placeholder="Search"></input>
            </div>

            <div className="icon-list">
              <ul className="headerIcon">
                <IconButton>
                  {" "}
                  <RefreshOutlinedIcon />{" "}
                </IconButton>
                <IconButton>
                  {" "}
                  <ViewStreamOutlinedIcon />{" "}
                </IconButton>
                <IconButton>
                  {" "}
                  <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                  {" "}
                  <AppsOutlinedIcon />
                </IconButton>
                <IconButton>
                  {" "}
                  <AccountCircleOutlinedIcon />
                </IconButton>
              </ul>
            </div>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader></DrawerHeader>
        <List>
          {iconlist.map((text, index) => (
            <ListItem button key={text.iText}>
              <ListItemIcon>{text.icons}</ListItemIcon>
              <ListItemText primary={text.iText} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Notes />
      </Box>
    </Box>
  );
}
