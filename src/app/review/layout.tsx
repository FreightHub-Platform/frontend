import type { Metadata } from "next";
import { Topbar } from "../../components/review/topbar/Topbar";
import Sidebar from "../../components/review/sidebar/Sidebar";

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
      <body className="bg-gray-100">
        <Topbar />
        <div className="flex">
          <Sidebar />
          <div className="w-full overflow-x-auto bg-gray-200">
            <div className="sm:h-[calc(99vh-60px)] overflow-auto">
              <div className=" w-full flex justify-center mx-auto overflow-auto h-full overflow-y-auto relative ">
                <div className="w-full md:max-w6xl mt-6 "> {children}</div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
