import type { Metadata } from "next";
import { Topbar } from "../../components/consigner/topbar/Topbar";
import Sidebar from "../../components/consigner/sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Freight Hub",
  description: "Freight Hub is a logistics management system",
};
<p></p>
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <body>
        <Topbar />
        <div className="flex">
          <Sidebar />
          <div className="w-full overflow-x-auto bg-gray-200">
            <div className="sm:h-[calc(99vh-60px)] overflow-auto">
              <div className=" w-full flex justify-center mx-auto overflow-auto h-[calc(100vh - 120px)] overflow-y-auto relative">
                <div className=" w-full md:max-w6xl mt-6"> {children}</div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
