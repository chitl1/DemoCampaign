import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import CustomTabPanel, { a11yProps } from "../../molecules/custom_tab_panel";
import { Tab } from "@mui/material";
import CampaignInfo from "../../molecules/campaign_info";
import ChildCampaignInfo from "../../molecules/child_campaign_info";
import { useState } from "react";
import { ICampaignData } from "../../page/campaign/index.interface";

interface ICampaignTabProps {
  data: ICampaignData;
  setData: (data: any) => void;
  campaignName: string;
  campaignNameError: boolean;
  handleCampaignNameChange: (e: any) => void;
}

const CampaignTab = (props: ICampaignTabProps) => {
  const {
    data,
    setData,
    campaignName,
    campaignNameError,
    handleCampaignNameChange,
  } = props;
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <form>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="THÔNG TIN" {...a11yProps(0)} />
            <Tab label="CHIẾN DỊCH CON" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          {/* form tab thông tin */}
          <CampaignInfo
            campaignName={campaignName}
            campaignNameError={campaignNameError}
            handleCampaignNameChange={handleCampaignNameChange}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {/* form chiến dịch con */}
          {/* thông tin chung và chiến dịch con */}
          <ChildCampaignInfo data={data} setData={setData} />
        </CustomTabPanel>
      </form>
    </>
  );
};
export default CampaignTab;
