import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import BoxInfo from "./box_info";
import AddIcon from "@mui/icons-material/Add";

interface Props {
  adQuantity: number;
}
const GeneralInfo = (props: Props) => {
  const [boxCount, setBoxCount] = useState(1);

  const handleAddBoxInfo = () => {
    setBoxCount(boxCount + 1);
  };
  return (
    <>
      <div
        style={{
          marginRight: "20px",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          background: "#ccc",
          backgroundColor: "#ccc",
        }}
      >
        <IconButton
          onClick={handleAddBoxInfo}
          sx={{
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            background: "#ccc",
            backgroundColor: "#ccc",
          }}
        >
          <AddIcon sx={{ color: "red" }} />{" "}
        </IconButton>
      </div>
      <div
        className="box-container"
        style={{ display: "flex", width: "100%", overflow: "auto" }}
      >
        {[...Array(boxCount)].map((_, index) => (
          <BoxInfo index={index + 1} adQuantity={props.adQuantity} />
        ))}
      </div>
    </>
  );
};

export default GeneralInfo;
