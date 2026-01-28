import { Link } from '@inertiajs/react';
import { LayoutGrid } from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { type NavItem } from '@/types';

import categories from '@/routes/admin/product-categories';
import products from '@/routes/admin/products';
import services from '@/routes/admin/services';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
  {
    title: 'Serviços',
    href: services.index(),
    icon: LayoutGrid,
  },
  {
    title: 'Produtos',
    href: products.index(),
    icon: LayoutGrid,
  },
  {
    title: 'Categorias',
    href: categories.index(),
    icon: LayoutGrid,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href={''} prefetch>
                <AppLogo />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={mainNavItems} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
