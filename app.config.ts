import {
  Code,
  Contact,
  DollarSign,
  Home,
  HomeIcon,
  KeyRound,
  LucideIcon,
  LucideProps,
  Mail,
  Settings,
  User,
  Zap,
} from "lucide-react"
import { ForwardRefExoticComponent, RefAttributes } from "react"

export interface AppConfig {
  logo?: string
  name: string
}

export const appConfig: AppConfig = {
  logo: undefined,
  name: "NXT",
}

export const apiPrefix: string = "/api"

export const REDIRECT_AUTHENTICATED: string = "/dashboard"

export const REDIRECT_NOT_AUTHENTICATED: string = "/"

export const publicRoutes:RouteTypes = {
  contact: {
    label: 'About',
    href: "/about",
    icon: User,
  },
  pricing: {
    label: 'Pricing',
    href: "/pricing",
    icon: KeyRound,
  },
}

export const protectedRoutes: RouteTypes = {
  dashboard: {
    label: 'Dashboard',
    href: "/dashboard",
    icon: HomeIcon,
  },
  projects: {
    label: 'Projects',
    href: "/projects",
    icon: Code,
  },
  contact: {
    label: 'Contact',
    href: "/contact",
    icon: Contact,
  },
}

interface RouteTypes {
  [key: string]: {
    label: string,
    href: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  }
}