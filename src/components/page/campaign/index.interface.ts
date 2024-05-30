export interface IAdData {
  ad_id: number;
  ad_name: string;
  ad_number: number;
}

export interface ICampaignChildData {
  campaign_child_id: number;
  campaign_child_name: string;
  campaign_child_active: boolean;
  ad_datas: IAdData[];
  campaign_select: boolean;
}

export interface ICampaignData {
  campaign_id: number;
  campaign_name: string;
  describe: string;
  detail: ICampaignChildData[];
}
