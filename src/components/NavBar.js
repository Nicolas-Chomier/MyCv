import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import HomeIcon from "@mui/icons-material/Home";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import InfoIcon from "@mui/icons-material/Info";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
//import { pink } from "@mui/material/colors";
import cvPdf from "../assets/shared/test.pdf";
import { Link } from "react-router-dom";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Portal from "@mui/material/Portal";
import InfoTile from "./InfoTile";

const NavBar = () => {
  const myGithub = "https://github.com/Nicolas-Chomier";
  const myLinkedin = "https://www.linkedin.com/in/nicolas-chomier-88621b107/";
  const style = { fontSize: 25 };
  //test
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardContent>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={0}
        >
          <IconButton aria-label="home">
            <Link to={"/"}>
              <HomeIcon sx={style} />
            </Link>
          </IconButton>
          <IconButton aria-label="download" href={cvPdf}>
            <FileDownloadIcon sx={style} />
          </IconButton>
          <ClickAwayListener onClickAway={handleClickAway}>
            <IconButton aria-label="info" onClick={handleClick}>
              <InfoIcon sx={style} />
              {open ? (
                <Portal>
                  <InfoTile />
                </Portal>
              ) : null}
            </IconButton>
          </ClickAwayListener>
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
