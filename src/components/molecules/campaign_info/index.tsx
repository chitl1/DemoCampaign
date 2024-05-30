import TextField from "@mui/material/TextField";

interface IcampaignInfoProps {
  campaignName: string;
  campaignNameError: boolean;
  handleCampaignNameChange: (e: any) => void;
}
const CampaignInfo = ({
  campaignName,
  campaignNameError,
  handleCampaignNameChange,
}: IcampaignInfoProps) => {
  return (
    <>
      <TextField
        id="campaign-name"
        label="Tên chiến dịch"
        variant="standard"
        fullWidth
        required
        value={campaignName}
        error={campaignNameError}
        helperText={campaignNameError ? "Dư liệu không hợp lệ." : ""}
        onChange={handleCampaignNameChange}
        sx={{ margin: "8px" }}
      />
      <TextField
        id="describe"
        label="Mô tả"
        variant="standard"
        fullWidth
        sx={{ margin: "8px" }}
      />
    </>
  );
};
export default CampaignInfo;
