import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

const BtnAddChildCampaign = (props: {
  handleAddBoxInfo: (data: any) => void;
}) => {
  const { handleAddBoxInfo } = props;
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
    </>
  );
};
export default BtnAddChildCampaign;
