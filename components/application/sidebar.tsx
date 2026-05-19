import Image from 'next/image';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';

import { GiAstronautHelmet, GiCalculator, GiChecklist, GiFootprint, GiHeartPlus } from "react-icons/gi";
import { SidebarItem } from './client/sidebar-item';
import Link from 'next/link';


// This is sample data.
const data = {
  versions: ['1.0.1', '1.1.0-alpha', '2.0.0-beta1'],
  navMain: [
    {
      title: '',
      url: '#',
      items: [
        {
          icon: <GiCalculator />,
          title: 'Counter',
          url: '/counter',
        },
        {
          icon: <GiAstronautHelmet />,
          title: 'APoD',
          url: '/apod',
        },
        {
          icon: <GiHeartPlus />,
          title: 'APoD favorites',
          url: '/apodFavorites',
        },
        {
          icon: <GiChecklist />,
          title: 'ToDo with Rest Api',
          url: '/todo-with-rest-api',
        },
        {
          icon: <GiChecklist />,
          title: 'ToDo with Server Actions',
          url: '/todo-with-server-actions',
        },
        {
          icon: <GiFootprint />,
          title: 'useOptimistic',
          url: '/useoptimistic',
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  return (
    <Sidebar {...props}>
      <SidebarHeader className="flex flex-row items-center ml-2 mt-2 bg-background">
        <Image src={'/assets/flask-2.png'} alt='' width={40} height={40} />
        <Link href="/" className='unstyled "text-xl text-stone-300 italic hover:text-stone-500'>{'<Learn { ...props } />'}</Link>
      </SidebarHeader>
      <SidebarContent className='bg-background'>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarItem {...item} />
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
