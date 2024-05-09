import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

type Props = {
  index: number;
  adQuantity: number;
};
const BoxInfo = (props: Props) => {
  return (
    <Box
      sx={{
        padding: "5px",
        border: "2px solid rgb(250, 250, 250)",
        boxShadow:
          "0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)",
        bgcolor: "background.paper",
        width: "210px",
        minWidth: "210px",
        height: "120px",
        marginLeft: "16px",
        cursor: "pointer",
      }}
    >
      <div style={{ display: "flex" }}>
        <Typography sx={{ fontSize: "20px" }}>
          Chiến dịch con {props.index}{" "}
        </Typography>
        <CheckCircleRoundedIcon
          sx={{
            width: "15px !important",
            height: "15px !important",
            color: "green",
            margin: "auto",
          }}
        />
      </div>
      <Typography
        sx={{
          textAlign: "center",
          padding: "5px",
          fontSize: "25px",
        }}
      >
        {props.adQuantity}
      </Typography>
    </Box>
  );
};

export default BoxInfo;
