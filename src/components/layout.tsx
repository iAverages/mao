"use client";

import { Braces, Cuboid, Dna, Menu, Ruler } from "lucide-react";
import Link, { type LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { type ReactNode } from "react";
import { Button } from "~/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "~/components/ui/sheet";
import { cn } from "~/utils/ui";

export type SidebarProps = {
    children: ReactNode;
};

// json pretty print/simplify
// json parse
// json stringify
// json to yaml
// base64 encode
// base64 decode
// url encode
// url decode
// string length
// json to ts types

const items = [
    {
        name: "JSON Pretty Print",
        icon: <Braces />,
        to: "/json-pretty-print",
    },
    // {
    //   name: "JSON to YAML",
    //   icon: <MessagesSquare />,
    //   to: "/json-to-yaml",
    // },
    {
        name: "Base64 Encode/Decode",
        icon: <Cuboid />,
        to: "/base64",
    },
    {
        name: "URL Encode/Decode",
        icon: <Dna />,
        to: "/url-encode",
    },
    {
        name: "String Length",
        icon: <Ruler />,
        to: "/string-length",
    },
];

const SidebarItem = ({ children, ...props }: LinkProps & { children: ReactNode }) => {
    const pathname = usePathname();

    return (
        <Link {...props}>
            <Button
                variant={"ghost"}
                className={cn("w-full justify-start gap-2", {
                    "bg-accent": props.href === pathname,
                })}
                size={"lg"}
            >
                {children}
            </Button>
        </Link>
    );
};

export const MobileSidebar = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger className={"flex"}>
                    <Menu className={"m-0 block p-0 lg:hidden"} />
                </SheetTrigger>
                <SheetContent side={"left"}>
                    <SheetHeader>
                        <SheetTitle>Mao</SheetTitle>
                        <SheetDescription className={"flex flex-col gap-2"}>
                            {items.map((item) => (
                                <SidebarItem key={item.name} href={item.to}>
                                    {item.icon}
                                    <span>{item.name}</span>
                                </SidebarItem>
                            ))}
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
};

const DesktopSidebar = ({ className }: { className?: string }) => {
    return (
        <div className={cn("sticky top-0 flex-col gap-2 border-r-2 p-4", className)}>
            {items.map((item) => (
                <SidebarItem key={item.name} href={item.to}>
                    {item.icon}
                    <span>{item.name}</span>
                </SidebarItem>
            ))}
        </div>
    );
};

export const Sidebar = ({ children }: SidebarProps) => {
    return (
        <div className={"flex h-full flex-grow flex-col"}>
            <div className={"flex items-center gap-2"}>
                <MobileSidebar />
            </div>
            <div className={"flex flex-grow"}>
                <DesktopSidebar className={"hidden w-full min-w-fit max-w-xs lg:flex"} />
                <div className={"w-full"}>{children}</div>
            </div>
        </div>
    );
};

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Sidebar>
                <div className={"h-full px-4 py-6"}>{children}</div>
            </Sidebar>
        </>
    );
};
