import React from "react";
import { main } from "./style";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import Typography from "../Typography";

/**
 * @param {string} type video or list
 * @param {string} link url if type is video
 */
const ListItem = ({ children, type, link = "" }) => {
  return (
    <div style={main}>
      {type === "video" ? (
        <PlayCircleFilledRoundedIcon />
      ) : (
        <ArrowRightAltRoundedIcon />
      )}
      {type === "video" ? (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.open(link, "_blank");
          }}
        >
          <Typography variant="b2">{children}</Typography>
        </div>
      ) : (
        <div>
          <Typography variant="b2">{children}</Typography>
        </div>
      )}
    </div>
  );
};

export default ListItem;
