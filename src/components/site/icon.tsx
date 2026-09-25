"use client";

import * as React from "react";
import {
  Store,
  Users,
  Flag,
  Handshake,
  HeartHandshake,
  Warehouse,
  Package,
  Tags,
  MapPin,
  Megaphone,
  Workflow,
  Smartphone,
  BadgePercent,
  Maximize,
  TrendingUp,
  Leaf,
  Sprout,
  Home,
  GraduationCap,
  Briefcase,
  Heart,
  Trees,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Store,
  Users,
  Flag,
  Handshake,
  HeartHandshake,
  Warehouse,
  Package,
  Tags,
  MapPin,
  Megaphone,
  Workflow,
  Smartphone,
  BadgePercent,
  Maximize,
  TrendingUp,
  Leaf,
  Sprout,
  Home,
  GraduationCap,
  Briefcase,
  Heart,
  Trees,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = map[name] ?? Store;
  return <Cmp className={className} />;
}
