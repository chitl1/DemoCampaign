import { ICampaignData } from "../../page/campaign/index.interface";

export interface ICampaignTabProps {
  data: ICampaignData;
  setData: (data: any) => void;
}
