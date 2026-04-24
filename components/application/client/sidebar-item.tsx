'use client';

import Link from 'next/link';
import type { JSX } from 'react'
import { SidebarMenuButton } from '../../ui/sidebar';
import { usePathname } from 'next/navigation';

interface Props {
    icon?: JSX.Element;
    title: string;
    url: string;
}

export const SidebarItem = ({ title, url, icon }: Props) => {
    const currentPath = usePathname();
    return (
        <SidebarMenuButton asChild isActive={currentPath === url}>
            <div>
                {icon && <i>{icon}</i>}
                <Link href={url}>{title}</Link>
            </div>
        </SidebarMenuButton>
    )
}
