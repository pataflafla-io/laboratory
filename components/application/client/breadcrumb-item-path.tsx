'use client';

import { BreadcrumbPage, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink } from '@/components/ui/breadcrumb'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react/jsx-runtime';


export const BreadcrumbItemPath = () => {
    const currentPath = usePathname();
    const paths = currentPath.split('/').slice(1)

    return (
        <>
            {
                currentPath !== '/' &&
                paths.map((path, i) => (
                    <Fragment key={path}>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            {i === paths.length - 1
                                ? <BreadcrumbPage>{path}</BreadcrumbPage>
                                : <Link href={`/${path}`}>{path}</Link>
                            }
                        </BreadcrumbItem>
                    </Fragment>
                ))
            }
        </>
    )
}

