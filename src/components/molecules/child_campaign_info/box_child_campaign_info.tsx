import { Box, Typography } from "@mui/material";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import {
  ICampaignChildData,
  ICampaignData,
} from "../../page/campaign/index.interface";
const _ = require("lodash");

type Props = {
  data: ICampaignData;
  detailData: ICampaignChildData;
  setData: (data: any) => void;
  index: number;
};
const BoxChildCampaignInfo = (props: Props) => {
  const { data, detailData, setData, index } = props;

  const handleClick = () => {
    const updatedDetailData = data.detail.map((campaign_child) => {
      const a = {
        ...campaign_child,
        selectCampaign:
          campaign_child.campaign_child_id === detailData.campaign_child_id,
      };

      return {
        ...campaign_child,
        campaign_select:
          campaign_child.campaign_child_id === detailData.campaign_child_id,
      };
    });

    setData({ ...data, detail: updatedDetailData });
  };
  return (
    <>
      <Box
        onClick={handleClick}
        className={
          detailData.campaign_select ? "custom-box-select" : "custom-box"
        }
      >
        <div style={{ display: "flex" }}>
          <Typography sx={{ fontSize: "20px" }}>
            {detailData.campaign_child_name}{" "}
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
          {Array.isArray(detailData?.ad_datas)
            ? detailData.ad_datas.reduce((sum: number, adData) => {
                return sum + Number(adData.ad_number);
              }, 0)
            : 0}
        </Typography>
      </Box>
    </>
  );
};
export default BoxChildCampaignInfo;
