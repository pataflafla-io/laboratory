'use client';

import { BreadcrumbPage, BreadcrumbItem, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { usePathname } from 'next/navigation';


export const BreadcrumbItemPath = () => {
    const currentPath = usePathname()
    return (
        currentPath !== '/' &&
        <>
            <BreadcrumbSeparator className="hidden md:block" />
            <BreadcrumbItem>
                <BreadcrumbPage>{currentPath.slice(1)}</BreadcrumbPage>
            </BreadcrumbItem>
        </>

    )
}
