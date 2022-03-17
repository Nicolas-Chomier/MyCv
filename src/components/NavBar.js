import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import HomeIcon from "@mui/icons-material/Home";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import InfoIcon from "@mui/icons-material/Info";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import cvPdf from "../Private/test.pdf";
import dtPdf from "../Private/test.pdf";
import { Link } from "react-router-dom";
import Popover from "@mui/material/Popover";
import PopUp from "./PopUp";
import { grey } from "@mui/material/colors";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const NavBar = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  //
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  //
  const myGithub = "https://github.com/Nicolas-Chomier";
  const myLinkedin = "https://www.linkedin.com/in/nicolas-chomier-88621b107/";
  const style = { p: 0, fontSize: 25, color: grey[900] };

  return (
    <Card
      sx={{ backgroundColor: "transparent", border: "none", boxShadow: "none" }}
    >
      <CardContent sx={windowDimensions.width < 1115 ? { p: 0 } : { pl: 3 }}>
        <Stack
          direction={windowDimensions.width < 1115 ? "row" : "column"}
          justifyContent="space-between"
          alignItems={windowDimensions.width < 1115 ? "flex-start" : "center"}
          spacing={windowDimensions.width < 1115 ? 0 : 1}
        >
          <IconButton aria-label="home">
            <Link to={"/"}>
              <HomeIcon sx={style} />
            </Link>
          </IconButton>
          <IconButton aria-label="download" href={cvPdf}>
            <FileDownloadIcon sx={style} />
          </IconButton>
          <IconButton aria-label="download-dt" href={dtPdf}>
            <FolderSharedIcon sx={style} />
          </IconButton>
          <div>
            <IconButton
              aria-label="info"
              aria-describedby={id}
              onClick={handleClick}
            >
              <InfoIcon sx={style} />
            </IconButton>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 100, left: 100 }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <PopUp />
            </Popover>
          </div>
          <IconButton aria-label="gitHub" href={myGithub}>
            <GitHubIcon sx={style} />
          </IconButton>
          <IconButton aria-label="linkedin" href={myLinkedin}>
            <LinkedInIcon sx={style} />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default NavBar;
