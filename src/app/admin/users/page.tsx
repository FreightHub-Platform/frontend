import CommonSummaryCardSmall from "../../../components/common/card/CommonSummaryCardSmall";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Divider } from "@mui/material";
import UserTable from "../../../components/admin/users/UserTable";

const Users = () => {
  return (
    <>
      <div className="flex flex-row gap-8 w-full justify-around content-full-minus-200 mx-auto px-6">
        <CommonSummaryCardSmall
          borderColor="#4e46e590"
          hoverBorderColor="#4e46e5"
          Title="Active users"
          Subtitle="Last 30 days"
          UpdatedDate="2024/1/23"
          Quantity={78}
          imageURL="placeholder.png"
        />
        <CommonSummaryCardSmall
          borderColor="#06ce6390"
          hoverBorderColor="#04a152"
          Title="New users"
          Subtitle="Last 30 days"
          UpdatedDate="2024/1/23"
          Quantity={78}
          imageURL="placeholder.png"
        />
        <CommonSummaryCardSmall
          borderColor="#d148ec90"
          hoverBorderColor="#cf34d4"
          Title="Inactive users"
          Subtitle="Last 30 days"
          UpdatedDate="2024/1/23"
          Quantity={78}
          imageURL="placeholder.png"
        />
        <CommonSummaryCardSmall
          borderColor="#e5464e90"
          hoverBorderColor="#c53030"
          Title="Blocked users"
          Subtitle="Last 30 days"
          UpdatedDate="2024/1/23"
          Quantity={78}
          imageURL="placeholder.png"
        />
      </div>
      <div className=" py-9  gap-x-8   justify-between">
        <div className="flex pb-9 px-6 gap-x-8   justify-between">
          <div className="w-full flex flex-col p-5 bg-white rounded-md">
            <div className="flex flex-row justify-between mb-2 align-middle ">
              <div className="text-lg">System Users</div>
              <div>
                <IconButton aria-label="delete" size="small">
                  <RefreshIcon />
                </IconButton>
              </div>
            </div>
            <Divider className="mb-4 mt-1" />
            <UserTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
