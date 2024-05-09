import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
  IconButton,
  TextField,
  Button,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@mui/icons-material/Add";
import { AdItem } from "../../App";

const adSelectedItems: AdItem[] = [];

function DataTable({ data, setData }: { data: AdItem[]; setData: any }) {
  const [selectedItems, setSelectedItems] = useState(adSelectedItems);

  const handleAddRow = () => {
    const newId = data.length + 1;
    setData([
      ...data,
      { id: newId, ad_name: `Quảng cáo ${newId}`, quantity: 0 },
    ]);
  };
  const handleToggle = (item: AdItem) => {
    const selectedIndex = selectedItems.indexOf(item);
    let newSelected: AdItem[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedItems, item);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedItems.slice(1));
    } else if (selectedIndex === selectedItems.length - 1) {
      newSelected = newSelected.concat(selectedItems.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedItems.slice(0, selectedIndex),
        selectedItems.slice(selectedIndex + 1)
      );
    }

    setSelectedItems(newSelected);
  };
  const handleDelete = (item: number) => {
    const newData = data.filter((d) => d.id !== item);
    setData(newData);
    setSelectedItems([]);
  };

  const handleInputChange = (e: any, item: AdItem) => {
    const { name, value } = e.target;
    const newValue = name === "quantity" ? parseFloat(value) : value;

    const newData = data.map((d) =>
      d.id === item.id ? { ...d, [name]: newValue } : d
    );
    setData(newData);
  };
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                indeterminate={
                  selectedItems.length > 0 && selectedItems.length < data.length
                }
                checked={selectedItems.length === data.length}
                onChange={() =>
                  setSelectedItems(
                    selectedItems.length === data.length ? [] : data
                  )
                }
              />
            </TableCell>
            <TableCell>
              {selectedItems.length === data.length ? (
                <>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </>
              ) : (
                <>
                  Tên quảng cáo <span style={{ color: "red" }}>*</span>
                </>
              )}
            </TableCell>
            <TableCell>
              {selectedItems.length === data.length ? (
                ""
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
        <TableBody
          className={
            selectedItems.length === data.length
              ? "change-background-color"
              : ""
          }
        >
          {data.map((item) => (
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedItems.indexOf(item) !== -1}
                  onChange={() => handleToggle(item)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  name="ad_name"
                  value={item.ad_name}
                  fullWidth
                  required
                  onChange={(e) => handleInputChange(e, item)}
                />
              </TableCell>
              <TableCell>
                <TextField
                  name="quantity"
                  value={item.quantity}
                  type="number"
                  fullWidth
                  required
                  onChange={(e: any) => handleInputChange(e, item)}
                />
              </TableCell>
              <TableCell>
                <IconButton onClick={() => handleDelete(item.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default DataTable;
