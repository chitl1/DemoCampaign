import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  Button,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { IAdData } from "../page/campaign/index.interface";
import {
  AdItem,
  CampaignDetail,
  SelectItemCheckbox,
} from "../molecules/child_campaign_info";

const adSelectedItems: AdItem[] = [];

interface AdDataTableProps {
  adData: AdItem[];
  handleAddRow: () => void;
  handleInputChange: (e: any, item: AdItem) => void;
  campaignChildIdSelect: number;
  handleToggle: (item: AdItem) => void;
  itemCheckbox: SelectItemCheckbox[];
  setItemCheckbox: (item: SelectItemCheckbox[]) => void;
  handleDelete: (id: AdItem[], typeDelete: string) => void;
}

const AdDataTable: React.FC<AdDataTableProps> = ({
  adData,
  handleAddRow,
  handleInputChange,
  campaignChildIdSelect,
  handleToggle,
  itemCheckbox,
  setItemCheckbox,
  handleDelete,
}: AdDataTableProps) => {
  const [selectedItems, setSelectedItems] = useState(adSelectedItems);

  const selectedItem = itemCheckbox.find(
    (item) => item.id === campaignChildIdSelect
  );
  const isCheckedIndeterminate = () => {
    const totalSelectItem = selectedItem
      ? selectedItem.ad_datas_select.length
      : 0;
    if (totalSelectItem > 0 && totalSelectItem < adData.length) {
      return true;
    } else return false;
  };

  const handleSelectAll = () => {
    const selectedItem = itemCheckbox.find(
      (item) => item.id === campaignChildIdSelect
    );
    const isAllSelected = selectedItem
      ? selectedItem.ad_datas_select.length === adData.length
      : false;

    setItemCheckbox(
      itemCheckbox.map((item) =>
        item.id === campaignChildIdSelect
          ? {
              ...item,
              ad_datas_select: isAllSelected ? [] : adData,
            }
          : item
      )
    );
  };
  return (
    <div>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox
                indeterminate={isCheckedIndeterminate()}
                checked={
                  (selectedItem ? selectedItem.ad_datas_select.length : 0) ===
                  adData.length
                }
                onChange={handleSelectAll}
              />
            </TableCell>
            <TableCell>
              {selectedItem?.ad_datas_select.length ? (
                <>
                  <IconButton
                    onClick={() => {
                      handleDelete(
                        selectedItem?.ad_datas_select,
                        "multiDelete"
                      );
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </>
              ) : (
                <>
                  Tên quảng cáo <span style={{ color: "red" }}>*</span>
                </>
              )}
            </TableCell>
            <TableCell align="left">
              {selectedItem?.ad_datas_select.length ? (
                <></>
              ) : (
                <>
                  Số lượng <span style={{ color: "red" }}>*</span>
                </>
              )}
            </TableCell>
            <TableCell style={{ width: 100 }}>
              <Button
                variant="outlined"
                startIcon={<AddIcon />}
                onClick={handleAddRow}
              >
                THÊM
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {Array.isArray(adData) &&
            adData.map((row: IAdData) => {
              const selectedItem = itemCheckbox.find(
                (item) => item.id === campaignChildIdSelect
              );
              const isChecked = selectedItem
                ? selectedItem.ad_datas_select.some(
                    (ad) => ad.ad_id === row.ad_id
                  )
                : false;

              return (
                <TableRow
                  key={row.ad_id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Checkbox
                      checked={isChecked}
                      onChange={() => handleToggle(row)}
                    />
                  </TableCell>

                  <TableCell align="left">
                    <TextField
                      name="ad_name"
                      value={row.ad_name}
                      fullWidth
                      required
                      onChange={(e) => handleInputChange(e, row)}
                    />
                  </TableCell>
                  <TableCell align="left">
                    <TextField
                      name="ad_number"
                      value={row.ad_number}
                      fullWidth
                      required
                      onChange={(e) => handleInputChange(e, row)}
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton
                      onClick={() => handleDelete([row], "oneDelete")}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdDataTable;
