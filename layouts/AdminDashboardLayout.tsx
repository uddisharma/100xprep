"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconBriefcase,
  IconDeviceDesktop,
  IconNotes,
  IconPencil,
  IconUserShield,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";

const AdminDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const links = [
    {
      label: "Dashboard",
      href: "/admin",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Interviews",
      href: "/admin/interviews",
      icon: (
        <IconDeviceDesktop className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Handbooks",
      href: "/admin/handbooks",
      icon: (
        <IconNotes className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Jobs",
      href: "/admin/jobs",
      icon: (
        <IconBriefcase className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Users",
      href: "/admin/users",
      icon: (
        <IconUserShield className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Handbook Requests",
      href: "/admin/handbooks/requests",
      icon: (
        <IconPencil className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Logout",
      href: "/logout",
      icon: (
        <IconArrowLeft className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();
  return (
    <div>
      <div
        className={cn(
          "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
          "h-[100vh]",
        )}
      >
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              {open ? <Logo /> : <LogoIcon />}
              <div className="mt-8 flex flex-col gap-2">
                {links.map((link, idx) => (
                  <SidebarLink key={idx} link={link} setOpen={setOpen} />
                ))}
              </div>
            </div>
            <div>
              <SidebarLink
                link={{
                  label: session?.user?.name ?? "Unknown User",
                  href: "/dashboard/profile",
                  icon: (
                    <>
                      {session?.user?.image ? (
                        <Image
                          src={session.user?.image!}
                          className="h-7 w-7 flex-shrink-0 rounded-full"
                          alt={session.user?.image!}
                          height={50}
                          width={50}
                        />
                      ) : (
                        <IconUserShield className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                      )}
                    </>
                  ),
                }}
              />
            </div>
          </SidebarBody>
        </Sidebar>
        {children}
      </div>
    </div>
  );
};

export default AdminDashboardLayout;

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image
        className="h-7 w-7 flex-shrink-0 rounded-full"
        src="/logo.jpg"
        width={50}
        height={50}
        alt="Logo"
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre text-[16px]"
      >
        100x Prep Admin
      </motion.span>
    </Link>
  );
};
export const LogoIcon = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image
        className="h-7 w-7 flex-shrink-0 rounded-full"
        src="/logo.jpg"
        width={50}
        height={50}
        alt="Logo"
      />
    </Link>
  );
};
