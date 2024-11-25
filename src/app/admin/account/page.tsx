import { Topbar } from "../../../components/admin/topbar/Topbar";
import AuthGuard from "../../../components/common/auth/AuthGurd";

const Account = () => {
  return (
    <AuthGuard>
      <div className="bg-gray-100"></div>
    </AuthGuard>
  );
};

export default Account;
