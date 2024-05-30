import { useState } from "react";
import BtnSubmit from "../../atoms/btn_submit";
import CampaignTab from "../../organisms/campaign_tab";
import { IAdData, ICampaignChildData, ICampaignData } from "./index.interface";

const adDatas: IAdData[] = [
  {
    ad_id: 1,
    ad_name: "Quảng cáo cho chiến dịch 1",
    ad_number: 0,
  },
];
const detailChildData: ICampaignChildData[] = [
  {
    campaign_child_id: 1,
    campaign_child_name: "Chiến dịch con 1",
    campaign_child_active: true,
    ad_datas: adDatas,
    campaign_select: true,
  },
];

const initialCampaignData: ICampaignData = {
  campaign_id: 1,
  campaign_name: "",
  describe: "",
  detail: detailChildData,
};

const x = {
  campaign_id: 1,
  campaign_name: "CHIEN DICH 1",
  describe: "KHONG MO TA",
  detail: [
    {
      campaign_child_id: 1,
      campaign_child_name: "Chiến dịch con 1",
      campaign_child_active: true,
      ad_datas: [
        {
          ad_id: 1,
          ad_name: "Quảng cáo 1",
          ad_number: 0,
        },
      ],
      campaign_select: true,
    },
  ],
};

export const initialAdItems: IAdData = {
  ad_id: 1,
  ad_name: "Quảng cáo 1",
  ad_number: 0,
};
const CampaignPage = () => {
  const [campaignData, setCampaignData] = useState(initialCampaignData);
  const [campaignNameError, setCampaignNameError] = useState(false);
  const [campaignName, setCampaignName] = useState("");

  const handleCampaignNameChange = (e: any) => {
    setCampaignName(e.target.value);
    if (e.target.validity.valid) {
      setCampaignNameError(false);
    } else {
      setCampaignNameError(true);
    }
  };
  const handleSubmit = (dataSubmit: ICampaignData) => {
    if (campaignName !== "") {
      setCampaignData((prevData) => {
        return {
          ...prevData,
          campaign_name: campaignName,
        };
      });

      alert(
        ` Thêm chiến dịch thành công \n  {campaign_id : ${
          campaignData.campaign_id
        } ,
          campaign_name : ${campaignData.campaign_name} ,
          describe : ${campaignData.describe},
          detail: [ ${campaignData.detail.map((x) => {
            const str =
              `{campaign_child_id : ` +
              x.campaign_child_id +
              ` ,\n` +
              `campaign_child_name : ` +
              x.campaign_child_name +
              `,\n` +
              `campaign_child_active : ` +
              x.campaign_child_active +
              `}; \n`;
            return str;
          })}] } `
      );
    } else {
      alert("Vui lòng điền đúng và đầy đủ thông tin");
    }
  };

  return (
    <>
      <div className="action-submit-container">
        <BtnSubmit handleSubmit={handleSubmit} dataSubmit={campaignData} />
      </div>
      {/* tab form */}
      <div className="tab-container">
        <div className="form-container">
          <CampaignTab
            data={campaignData}
            setData={setCampaignData}
            campaignName={campaignName}
            campaignNameError={campaignNameError}
            handleCampaignNameChange={handleCampaignNameChange}
          />
        </div>
      </div>
    </>
  );
};
export default CampaignPage;
