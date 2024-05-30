import Button from "@mui/material/Button/Button";
import { ICampaignData } from "../page/campaign/index.interface";

interface Props {
  handleSubmit: (x: ICampaignData) => void;
  dataSubmit: ICampaignData;
}
const BtnSubmit: React.FC<Props> = (props: Props) => {
  return (
    <>
      <Button
        variant="contained"
        onClick={() => props.handleSubmit(props.dataSubmit)}
      >
        SUBMIT
      </Button>
    </>
  );
};
export default BtnSubmit;
