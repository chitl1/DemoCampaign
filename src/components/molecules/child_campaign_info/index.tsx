import { Typography } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import BtnAddChildCampaign from "../../atoms/btn_add_child_campaign";
import BoxChildCampaignInfo from "./box_child_campaign_info";
import { ICampaignTabProps } from "../../organisms/campaign_tab/index.interface";
import { initialAdItems } from "../../page/campaign";
import DataTable from "../../atoms/tbl_ad";
import AdDataTable from "../../atoms/tbl_ad";
import { ICampaignData } from "../../page/campaign/index.interface";

export interface AdItem {
  ad_id: number;
  ad_name: string;
  ad_number: number;
}

export interface CampaignDetail {
  campaign_child_id: number;
  campaign_child_name: string;
  campaign_child_active: boolean;
  ad_datas: AdItem[];
  campaign_select: boolean;
}

export interface SelectItemCheckbox {
  id: number;
  ad_datas_select: AdItem[];
}

const initialItemCheckbox: SelectItemCheckbox[] = [
  {
    id: 1,
    ad_datas_select: [],
  },
];

const ChildCampaignInfo = (props: ICampaignTabProps) => {
  const { data, setData } = props;
  const [itemCheckbox, setItemCheckbox] =
    useState<SelectItemCheckbox[]>(initialItemCheckbox);

  const handleAddBoxInfo = () => {
    setData((prevDataCampaign: any) => {
      if (prevDataCampaign) {
        const updatedDetailData = Array.isArray(prevDataCampaign.detail)
          ? prevDataCampaign.detail.map((campaign: any) => ({
              ...campaign,
              campaign_select: false,
            }))
          : [];

        const newCampaignChild = {
          campaign_child_id: parseInt(
            `${
              prevDataCampaign.detail ? prevDataCampaign.detail.length + 1 : 1
            }`
          ),

          campaign_child_name: `Chiến dịch con ${
            prevDataCampaign.detail ? prevDataCampaign.detail.length + 1 : 1
          }`,
          campaign_child_active: true,
          ad_datas: [initialAdItems],
          campaign_select: true,
        };
        return {
          ...prevDataCampaign,
          detail: [...updatedDetailData, newCampaignChild],
        };
      }
      return prevDataCampaign;
    });

    setItemCheckbox([
      ...itemCheckbox,
      {
        id: itemCheckbox.length + 1,
        ad_datas_select: [],
      },
    ]);
  };

  const handleAddRow = () => {
    setData((prevData: ICampaignData) => {
      const adList: AdItem[] = data.detail
        .filter((item: CampaignDetail) => item.campaign_select)
        .flatMap((addata: CampaignDetail) => addata.ad_datas);

      const newAdId = adList[adList.length - 1]?.ad_id + 1;

      return {
        ...prevData,
        detail: prevData.detail.map((campaign) => {
          if (campaign.campaign_select) {
            const newAdData = {
              ad_id: newAdId,
              ad_name: `Quảng cáo ${newAdId}`,
              ad_number: 0,
            };
            return {
              ...campaign,
              ad_datas: [...campaign.ad_datas, newAdData],
            };
          }
          return campaign;
        }),
      };
    });
  };

  const handleInputChange = (e: any, item: AdItem) => {
    const { name, value } = e.target;
    const newValue = name === "quantity" ? parseFloat(value) : value;

    setData((prevData: ICampaignData) => {
      const adList: AdItem[] = data.detail
        .filter((item: CampaignDetail) => item.campaign_select)
        .flatMap((addata: CampaignDetail) => addata.ad_datas);

      const newData = adList.map((d) =>
        d.ad_id === item.ad_id ? { ...d, [name]: newValue } : d
      );
      return {
        ...prevData,
        detail: prevData.detail.map((campaign) => {
          if (campaign.campaign_select) {
            return {
              ...campaign,
              ad_datas: newData,
            };
          }
          return campaign;
        }),
      };
    });

    // const newData = dataCampaign.ad_datas.map((d) =>
    //   d.id === item.id ? { ...d, [name]: newValue } : d
    // );
    // setDataCampaign({ ...dataCampaign, ad_datas: newData });
  };

  const handleToggle = (row: AdItem) => {
    const updatedCheckbox = itemCheckbox.map((item) => {
      const campaignChildIdSelect: number = data.detail.filter(
        (item: CampaignDetail) => item.campaign_select
      )[0].campaign_child_id;
      if (item.id === campaignChildIdSelect) {
        const adIndex = item.ad_datas_select.findIndex(
          (ad) => ad.ad_id === row.ad_id
        );
        let newAdDataSelect = [...item.ad_datas_select];

        if (adIndex === -1) {
          newAdDataSelect.push(row);
        } else {
          newAdDataSelect.splice(adIndex, 1);
        }

        return { ...item, ad_datas_select: newAdDataSelect };
      }
      return item;
    });

    setItemCheckbox(updatedCheckbox);
  };

  const handleDelete = (items: AdItem[], typeDelete: string) => {
    const adList: AdItem[] = data.detail
      .filter((item: CampaignDetail) => item.campaign_select)
      .flatMap((addata: CampaignDetail) => addata.ad_datas);

    const newAdList = adList.filter((obj) => !items.includes(obj));
    setData((prevData: ICampaignData) => {
      return {
        ...prevData,
        detail: prevData.detail.map((campaign) => {
          if (campaign.campaign_select) {
            return {
              ...campaign,
              ad_datas: newAdList,
            };
          }
          return campaign;
        }),
      };
    });

    setItemCheckbox((prevItemCheckboxData: SelectItemCheckbox[]) => {
      //loc ra object trong mảng prevItemCheckboxData có id = id_child_select
      const id_child_select = data.detail.filter(
        (item: CampaignDetail) => item.campaign_select
      )[0].campaign_child_id;
      const newItemCheckboxLst: SelectItemCheckbox[] = prevItemCheckboxData.map(
        (item: SelectItemCheckbox) => {
          if (item.id === id_child_select) {
            const filteredItems = item.ad_datas_select.filter(
              (obj) => !items.includes(obj)
            );

            if (typeDelete === "oneDelete") {
              return {
                id: item.id,
                ad_datas_select: item.ad_datas_select.filter(
                  (obj) => !items.includes(obj)
                ),
              };
            } else {
              return {
                id: item.id,
                ad_datas_select: [],
              };
            }
          } else {
            return item;
          }
        }
      );
      return newItemCheckboxLst;
    });
  };

  const renderTable = useMemo(() => {
    if (!Array.isArray(data.detail)) return null;
    const campaignChildIdSelect: number = data.detail.filter(
      (item: CampaignDetail) => item.campaign_select
    )[0].campaign_child_id;
    const adList: AdItem[] = data.detail
      .filter((item: CampaignDetail) => item.campaign_select)
      .flatMap((addata: CampaignDetail) => addata.ad_datas);
    return (
      <AdDataTable
        adData={adList}
        campaignChildIdSelect={campaignChildIdSelect}
        itemCheckbox={itemCheckbox}
        setItemCheckbox={setItemCheckbox}
        handleAddRow={handleAddRow}
        handleInputChange={handleInputChange}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
      />
    );
  }, [data, handleToggle, itemCheckbox, handleAddRow]);

  return (
    <>
      <div
        className="general-info-container"
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <BtnAddChildCampaign handleAddBoxInfo={handleAddBoxInfo} />
        <div
          className="box-container"
          style={{ display: "flex", width: "100%", overflow: "auto" }}
        >
          {Array.isArray(data.detail) &&
            data.detail.map((item, index) => (
              <BoxChildCampaignInfo
                key={index}
                detailData={item}
                data={data}
                setData={setData}
                index={0}
              />
            ))}
        </div>
      </div>
      <div>
        <Typography variant="h6" textAlign={"left"} p={5}>
          DANH SÁCH QUẢNG CÁO
        </Typography>
        {renderTable}
      </div>
    </>
  );
};

export default ChildCampaignInfo;
