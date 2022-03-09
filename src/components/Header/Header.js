import React, { useState } from "react";
// icon
import {
  MenuSharp,
  SearchSharp,
  VideoCall,
  Apps,
  Notifications,
  CameraAltOutlined,
  PersonAddOutlined,
} from "@mui/icons-material";
// material element
import { Avatar, Button, Popover, Badge } from "@mui/material";
// logo
import logo from "../../assets/logo.png";
// style css
import "./header.scss";
import { useHistory } from "react-router-dom";

const Header = ({ showSidebar }) => {
  const history = useHistory();
  const homeRoute = () => {
    history.push("/");
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <header id="header">
        <div className="header_left">
          <MenuSharp className={`bar_icon`} onClick={showSidebar} />
          <img
            className="header_logo"
            src={logo}
            alt="Youtube"
            onClick={homeRoute}
          />
        </div>
        <div className="header_center">
          <form className="header_center">
            <input className="header_input" placeholder="Search" />
            <Button className="header_btn">
              <SearchSharp className="header_searchIcon" />
            </Button>
          </form>
        </div>
        <div className="header_right">
          <VideoCall />
          <Apps />
          <Notifications />
          <Avatar onClick={handleClick} />
        </div>

        {/* popover start */}
        <Popover
          open={open}
          id={id}
          onClose={handleClose}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
          }}
        >
          <div className="home__popoverContainer">
            <div className="home__popover__top">
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                badgeContent={
                  <div className="home__badge">
                    <CameraAltOutlined className="home__camera" />
                  </div>
                }
              >
                <Avatar />
              </Badge>

              <div className="home__text">
                <div className="home__displayName">Mahabur</div>
                <div className="home__mail">abc@gmail.com</div>
              </div>
              <div className="home__btn">Manage your google account</div>
            </div>

            <div className="home__popover__btm">
              <div className="home__addBtn">
                <PersonAddOutlined className="home__addIcon" />
                <p>Add another account</p>
              </div>

              <Button variant="outlined" className="home__signOut">
                Sign Out
              </Button>

              <div className="home__popover__footer">
                <p>Privacy Policy</p>
                <span>•</span>
                <p>Terms of service</p>
              </div>
            </div>
          </div>
        </Popover>
      </header>
    </>
  );
};

export default Header;
