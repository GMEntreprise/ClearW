"use client";
import SideNav from "./_components/SideNav";
import DashboardHeader from "./_components/DashboardHeader";
import { Budgets } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import { useRouter } from "next/navigation";
import { db } from "../../../utils/dbConfig";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

function DashboardLayout({ children }) {
  const { user } = useUser();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (user) checkUserBudgets();
  }, [user]);

  const checkUserBudgets = async () => {
    const result = await db
      .select()
      .from(Budgets)
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress));
    if (result?.length === 0) router.replace("/dashboard/budgets");
  };

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div>
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 fixed top-5 left-5 z-50"
      >
        {isOpen ? (
          <X color="#000" size={30} />
        ) : (
          <Menu color="#000" size={30} />
        )}
      </button>
      <SideNav isOpen={isOpen} toggleMenu={toggleMenu} />
      <div className="md:ml-64 p-5">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
