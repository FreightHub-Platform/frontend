import CommonSummaryCardSmall from "../../../components/common/card/CommonSummaryCardSmall";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import { Divider } from "@mui/material";
import UserTable from "../../../components/admin/users/UserTable";
import UserSummaryCards from "../../../components/admin/users/UserSummaryCards";
import AuthGuard from "../../../components/common/auth/AuthGurd";

const Users = () => {
  return (
    <>
      <AuthGuard>
        <UserSummaryCards />
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
      </AuthGuard>
    </>
  );
};

export default Users;
