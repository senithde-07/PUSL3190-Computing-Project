
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/CocoScan.svg";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FaMapLocation } from "react-icons/fa6";
import { MdDocumentScanner } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";
import { IoHome } from "react-icons/io5";


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: "Home",
            icon: <IoHome />,
        },
        {
            text: "Predict",
            icon: <MdDocumentScanner />,
        },
        {
            text: "Information",
            icon: <FaInfoCircle />,
        },
        {
            text: "Map",
            icon: <FaMapLocation />,
        },
    ];
    return (
        <nav>
            <div className="nav-logo-container">
                <img src={Logo} alt="" />
            </div>
            <div className="navbar-links-container">
                <Link to="../pages/Home.js">Home</Link>
                <Link to="/predict">Predict</Link>
                <Link to="../pages/Info.js">Information</Link>
                <Link to="/map">Map</Link>
            </div>
            <div className="navbar-menu-container">
                <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
            </div>
            <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                >
                    <List>
                        {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>
            </Drawer>
        </nav>
    );
};

export default Navbar;
