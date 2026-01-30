import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';

export interface Auth {
  user: User;
}

export interface BreadcrumbItem {
  title: string;
  href: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export interface NavItem {
  title: string;
  href: NonNullable<InertiaLinkProps['href']>;
  icon?: LucideIcon | null;
  isActive?: boolean;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  email_verified_at: string | null;
  two_factor_enabled?: boolean;
  created_at: string;
  updated_at: string;
  [key: string]: unknown; // This allows for additional properties...
}

interface BaseEntity {
  id: number;
  created_at: string; // ISO Date String
  updated_at: string; // ISO Date String
}

export interface ProductCategory extends BaseEntity {
  title: string;
  slug: string;
  description: string | null;
  is_active: boolean;

  products?: Product[];
}

export interface Product extends BaseEntity {
  product_category_id: number;
  title: string;
  slug: string;
  sku: string | null;
  short_description: string | null;
  description: string | null; // HTML ou Markdown string

  // Imagens
  cover_image: string | null; // URL ou path relativo
  gallery_images: string[] | null; // Casted JSON array de strings (URLs)

  // Metadados
  tags: string[] | null; // Casted JSON array: ["DJI", "Mavic"]

  /**
   * Tabela técnica
   * Ex: { "Peso": "200g", "Alcance": "10km" }
   */
  tech_specs: Record<string, string> | null;

  is_active: boolean;

  // Relacionamento (eager loaded)
  category?: ProductCategory;
}

export interface ServicePlan {
  name: string;
  price: string | number; // String se vier formatado ("R$ 100"), number se puro
  description?: string; // Opcional, caso adicione no futuro
}

export interface Service extends BaseEntity {
  title: string;
  slug: string;
  short_description: string | null;
  content: string; // Conteúdo principal (HTML/LongText)

  // Campos específicos JSON
  features_list: string[] | null; // Ex: ["Suporte ART", "Orientação Voo"]
  plans: ServicePlan[] | null;

  cover_image: string | null;
  is_active: boolean;
}

export interface Department extends BaseEntity {
  name: string;
  phone: string | null;
  whatsapp: string | null;
  email: string | null;
  sort_order: number;
}

export interface SiteSettings extends BaseEntity {
  address: string;
  facebook_url: string | null;
  instagram_url: string | null;
  linkedin_url: string | null;
  youtube_url: string | null;
}

export interface Banner extends BaseEntity {
  id: number;
  title: string;
  image_path: string;
  image_path_mobile: string | null;
  link_url: string | null;
  order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

/**
 * Tipagem para Posts
 * Reflete a estrutura da migration 2026_01_28_021209_create_posts_table.php
 */
export interface Post extends BaseEntity {
  id: number;
  title: string;
  slug: string;
  content: string;
  cover_image: string | null;
  tags: string[] | null; // Armazenado como JSON no banco, manipulado como Array
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface SiteSetting extends BaseEntity {
  address: string;
  facebook_url?: string | null;
  instagram_url?: string | null;
  linkedin_url?: string | null;
  youtube_url?: string | null;
}

export interface Department extends BaseEntity {
  name: string;
  whatsapp?: string | null;
  email?: string | null;
  sort_order: number;
}

export interface SharedData {
  name: string;
  auth: Auth;
  sidebarOpen: boolean;
  footer: {
    settings: SiteSetting;
    departments: Department[];
  };
  [key: string]: unknown;
}
