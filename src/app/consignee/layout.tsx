import type { Metadata } from "next";
import { Topbar } from "../../components/consignee/Topbar";

export const metadata: Metadata = {
  title: "Freight Hub",
  description: "Freight Hub is a logistics management system",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Topbar />
        <div className="w-full overflow-x-auto bg-gray-200">
          <div className="sm:h-[calc(99vh-60px)] overflow-auto">
            <div className="w-full flex justify-center mx-auto overflow-auto h-full">
              <div className="w-full md:max-w-6xl mt-6">{children}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
