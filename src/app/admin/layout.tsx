import type { Metadata } from "next";
import { Topbar } from "../../components/admin/topbar/Topbar";
import Sidebar from "../../components/admin/sidebar/Sidebar";
import Breadcrumb from "../../components/common/Breadcrumbs";
import FetchUserById from "../../components/common/FetchUser";

export const metadata: Metadata = {
  title: "Freight Hub",
  description: "Freight Hub is a logistics management system",
};
<p></p>;
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Topbar />
        <div className="flex">
          <Sidebar />
          <div className="w-full overflow-x-auto bg-gray-200">
            <div className="sm:h-[calc(99vh-60px)] overflow-auto">
              <div className=" w-full flex justify-center mx-auto overflow-auto h-[calc(100vh - 120px)] overflow-y-auto relative">
                <div className=" w-full md:max-w6xl m-2">
                  <Breadcrumb />
                  <div className="m-3 flex flex-col mx-auto"> {children}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
