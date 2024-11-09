import { UserButton } from "@clerk/nextjs";
import React from "react";

function DashboardHeader() {
  return (
    <div className="p-5 shadow-sm border-b flex items-center justify-center gap-4">
      <div className="ml-auto">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default DashboardHeader;
