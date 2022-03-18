import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import cvPdf from "../Private/test.pdf";
import dtPdf from "../Private/test.pdf";
import Popover from "@mui/material/Popover";
import PopUp from "./PopUp";

const LandingPageNavbar = ({ data }) => {
  // Pop Up settings
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  // Const declaration and data management
  const myGithub = data.links.Github;
  const myLinkedin = data.links.Linkedin;
  const cardStyle = {
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
  };
  const cardContentStyle = { p: 0, "&:last-child": { pb: 0 } };
  const iconStyle = { fill: "#2A2A2A", fontSize: 30 };
  const buttonStyle = { pt: 2.2 };
  //
  return (
    <Card sx={cardStyle}>
      <CardContent sx={cardContentStyle}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <IconButton aria-label="download" href={cvPdf} sx={buttonStyle}>
            <FilePresentIcon sx={iconStyle} />
          </IconButton>
          <IconButton aria-label="download-dt" href={dtPdf} sx={buttonStyle}>
            <FolderSharedIcon fontSize="large" sx={iconStyle} />
          </IconButton>
          <div>
            <IconButton
              aria-label="info"
              aria-describedby={id}
              onClick={handleClick}
              sx={buttonStyle}
            >
              <InfoTwoToneIcon
                fontSize="large"
                sx={{ fill: "#CCA43D", fontSize: 30 }}
              />
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
          <IconButton aria-label="gitHub" href={myGithub} sx={buttonStyle}>
            <GitHubIcon fontSize="large" sx={iconStyle} />
          </IconButton>
          <IconButton aria-label="linkedin" href={myLinkedin} sx={buttonStyle}>
            <LinkedInIcon fontSize="large" sx={iconStyle} />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default LandingPageNavbar;
