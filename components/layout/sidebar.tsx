import { SidebarLogo } from "./siderbarLogo";
import { SidebarItem } from "./sidebarItem";
import { SidebarTweetButton } from "./sidebarTweetButton";

import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

export const Sidebar = () => {
    const items = [
        {
           label: "Início",
           href: '/',
           icon: BsHouseFill
        },

        {
          label: "Notificações",
          href: '/notifications',
          icon:  BsBellFill
        },

        {
          label: "Perfil",
          href: '/users/123',
          icon: FaUser
        },
    ];

    return (
        <div className="col-span-1 h-full pr-4 md:pr-6">
            <div className="flex flex-col items-end">
                <div className="space-y-2 lg:w-[230px]">
                    <SidebarLogo />
                    {items.map((item) => (
                        <SidebarItem
                            key= {item.href}
                            href= {item.href}
                            label= {item.label}
                            icon= {item.icon}
                        />
                    ))}
                    <SidebarItem onClick={ () => {} } icon={BiLogOut} label="Logout"/>
                    <SidebarTweetButton />
                </div>
            </div>
        </div>
    );
}