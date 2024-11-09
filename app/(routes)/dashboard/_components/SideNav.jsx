import React from "react";
import Image from "next/image";
import {
  LayoutGrid,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  CircleDollarSign,
} from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";

function SideNav({ isOpen, toggleMenu }) {
  const menuList = [
    { id: 1, name: "Tableau de bord", icon: LayoutGrid, path: "/dashboard" },
    {
      id: 2,
      name: "Revenus",
      icon: CircleDollarSign,
      path: "/dashboard/incomes",
    },
    { id: 3, name: "Budgets", icon: PiggyBank, path: "/dashboard/budgets" },
    { id: 4, name: "Dépenses", icon: ReceiptText, path: "/dashboard/expenses" },
    {
      id: 5,
      name: "Améliorations",
      icon: ShieldCheck,
      path: "/dashboard/upgrade",
    },
  ];

  const path = usePathname();

  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-300 md:w-64 bg-white shadow-lg z-30`}
    >
      <div className="p-5">
        <Link href="/" className="flex items-center mb-5 mt-20 md:mt-0">
          <Image src="/chart-donut.svg" alt="logo" width={40} height={25} />
          <span className="text-blue-800 font-bold text-xl">ClearWallet</span>
        </Link>
        <div>
          {menuList.map((menu) => (
            <Link href={menu.path} key={menu.id}>
              <h2
                className={`flex items-center gap-2 p-4 mb-2 rounded-full cursor-pointer text-gray-500 font-medium
                  hover:text-primary hover:bg-blue-100 ${
                    path === menu.path && "text-primary bg-blue-100"
                  }`}
              >
                <menu.icon />
                {menu.name}
              </h2>
            </Link>
          ))}
        </div>
        <div className="fixed bottom-10 p-5 flex gap-2 items-center">
          <UserButton />
          Profile
        </div>
      </div>
    </div>
  );
}

export default SideNav;
