import React, { useEffect, useState } from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button/Button";
import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DataTable from "./components/ad_list";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import BoxInfo from "./components/general_info/box_info";
import GeneralInfo from "./components/general_info";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export interface AdItem {
  id: number;
  ad_name: string;
  quantity: number;
}
const initialAdItems: AdItem[] = [
  { id: 1, ad_name: "Quảng cáo 1", quantity: 0 },
];
function App() {
  const [checked, setChecked] = useState(true);
  const [data, setData] = useState(initialAdItems);

  const [totalQuantity, setTotalQuantity] = useState(0);
  useEffect(() => {
    // Tính tổng giá trị ban đầu khi component được render
    calculateTotalQuantity();
  }, [data]);

  const calculateTotalQuantity = () => {
    let total: number = 0;
    data.forEach((item: AdItem) => {
      total = total + item.quantity;
    });
    setTotalQuantity(total);
  };
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleCheckbox = (event: any) => {
    setChecked(event.target.checked);
  };
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(event);
    // Validation logic
    // const newErrors = {};
    // if (!formData.firstName.trim()) {
    //   newErrors.firstName = 'First name is required';
    // }
    // if (!formData.lastName.trim()) {
    //   newErrors.lastName = 'Last name is required';
    // }
    // if (!formData.email.trim()) {
    //   newErrors.email = 'Email is required';
    // } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    //   newErrors.email = 'Invalid email address';
    // }

    // if (Object.keys(newErrors).length > 0) {
    //   setErrors(newErrors);
    // } else {
    //   // Submit form data
    //   console.log(formData);
    // }
  };
  return (
    <div className="App">
      {/* button */}
      <div className="action-submit-container">
        <Button
          variant="contained"
          onClick={() => {
            alert("clicked");
          }}
        >
          SUBMIT
        </Button>
      </div>
      {/* tab form */}
      <div className="tab-form-container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
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
              <TextField
                id="campaign-name"
                label="Tên chiến dịch"
                variant="standard"
                fullWidth
                required
                sx={{ margin: "8px" }}
              />
              <TextField
                id="describe"
                label="Mô tả"
                variant="standard"
                fullWidth
                sx={{ margin: "8px" }}
              />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              {/* form chiến dịch con */}
              {/* thông tin chung và chiến dịch con */}
              <div
                className="general-info-container"
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <GeneralInfo adQuantity={totalQuantity} />
              </div>
              <div
                className="child-campaign-form"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TextField
                  id="child-campaign-name"
                  label="Tên chiến dịch con"
                  variant="standard"
                  required
                  sx={{ margin: "8px", flex: 2 }}
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={checked} onChange={handleCheckbox} />
                  }
                  label="Đang hoạt động"
                  sx={{ flex: 1 }}
                />
              </div>
              <div>
                <Typography variant="h6" textAlign={"left"} p={5}>
                  DANH SÁCH QUẢNG CÁO
                </Typography>
                {/* grid */}
                <div style={{ width: "100%" }}>
                  <DataTable data={data} setData={setData} />
                </div>
              </div>
            </CustomTabPanel>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
