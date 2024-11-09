import React, { useEffect } from "react";
import Image from "next/image";
import {
  LayoutGrid,
  PiggyBank,
  ReceiptText,
  ShieldCheck,
  CircleDollarSign,
  TrendingUp,
  TrendingDownIcon,
} from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Link from "next/link";
function SideNav() {
  const menuList = [
    {
      id: 1,
      name: "Tableau de bord",
      icon: LayoutGrid,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Revenus",
      icon: CircleDollarSign,
      path: "/dashboard/incomes",
    },
    {
      id: 3,
      name: "Budgets",
      icon: PiggyBank,
      path: "/dashboard/budgets",
    },
    {
      id: 4,
      name: "Dépenses",
      icon: ReceiptText,
      path: "/dashboard/expenses",
    },
    // {
    //   id: 5,
    //   name: "Investissements",
    //   icon: TrendingUp,
    //   path: "/dashboard/investments",
    // },
    // {
    //   id: 6,
    //   name: "Dettes",
    //   icon: TrendingDownIcon,
    //   path: "/dashboard/debts",
    // },
    {
      id: 5,
      name: "Améliorations",
      icon: ShieldCheck,
      path: "/dashboard/upgrade",
    },
  ];

  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);
  return (
    <div className="h-screen p-5 border shadow-sm">
      {/* <Image src={'/logo.svg'}
        alt='logo'
        width={160}
        height={100}
        /> */}
      <div className="flex flex-row items-center">
        <Link href="/" className="flex flex-row items-center">
          <Image src={"./chart-donut.svg"} alt="logo" width={40} height={25} />
          <span className="text-blue-800 font-bold text-xl">ClearWallet</span>
        </Link>
      </div>
      <div className="mt-5">
        {menuList.map((menu, index) => (
          <Link href={menu.path} key={index}>
            <h2
              className={`flex gap-2 items-center
                    text-gray-500 font-medium
                    mb-2
                    p-4 cursor-pointer rounded-full
                    hover:text-primary hover:bg-blue-100
                    ${path == menu.path && "text-primary bg-blue-100"}
                    `}
            >
              <menu.icon />
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>
      <div
        className="fixed bottom-10 p-5 flex gap-2
            items-center"
      >
        <UserButton />
        Profile
      </div>
    </div>
  );
}

export default SideNav;