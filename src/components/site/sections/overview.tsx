"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Building2,
  CalendarDays,
  Users2,
  Handshake,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/site/section";
import { Icon } from "@/components/site/icon";
import { company, kpis, timeline, storeGallery } from "@/lib/avrora-data";
import { Camera } from "lucide-react";

export function Overview() {
  return (
    <Section
      id="overview"
      eyebrow="Огляд"
      title={
        <>
          «Аврора» — найбільша мережа{" "}
          <span className="text-primary">мультимаркетів</span> України
        </>
      }
      description="Компанія заснована 2011 року в Полтаві за адаптованою до українського ринку моделлю «dollar store». За 15 років — від одного магазину до 1 900+ точок у всіх регіонах країни."
    >
      {/* KPI grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {kpis.map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
          >
            <KpiCard kpi={kpi} />
          </motion.div>
        ))}
      </div>

      {/* Company profile + associations */}
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 gap-0 overflow-hidden p-0">
          <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-start">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Building2 className="size-6" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Профіль компанії
              </div>
              <h3 className="mt-1 font-display text-xl font-bold">
                {company.full}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {company.concept}
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <ProfileRow icon={CalendarDays} label="Заснована" value={`${company.founded}, ${company.hq}`} />
                <ProfileRow icon={Users2} label="Засновники" value={company.founders.join(", ")} />
                <ProfileRow icon={Building2} label="CEO" value={company.ceo} />
                <ProfileRow icon={Handshake} label="Інвестор" value={company.investors} />
              </div>
            </div>
          </div>
        </Card>

        <Card className="gap-0 p-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Членство в асоціаціях
          </div>
          <ul className="mt-4 space-y-3">
            {company.associations.map((a) => (
              <li
                key={a}
                className="flex items-start gap-2.5 text-sm leading-snug"
              >
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Timeline */}
      <div className="mt-6">
        <div className="mb-6 flex items-center gap-2">
          <h3 className="font-display text-lg font-bold">
            Хронологія розвитку
          </h3>
          <Badge variant="secondary" className="font-mono">
            2011 → 2026
          </Badge>
        </div>

        <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* horizontal line for lg */}
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-border/70 lg:block" />
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="z-10 flex size-7 items-center justify-center rounded-full border-2 border-primary bg-background text-[10px] font-bold text-primary">
                  {i + 1}
                </span>
                <span className="font-display text-sm font-bold">
                  {t.year}
                </span>
              </div>
              <div className="rounded-lg border border-border/60 bg-muted/20 p-4">
                <div className="text-sm font-semibold">{t.title}</div>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {t.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Store format gallery */}
      <div className="mt-6">
        <div className="mb-4 flex items-center gap-2">
          <Camera className="size-4 text-primary" />
          <h3 className="font-display text-lg font-bold">Формат магазинів</h3>
          <Badge variant="secondary" className="font-mono">
            компактний формат
          </Badge>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {storeGallery.map((g, i) => (
            <motion.figure
              key={g.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-xl border border-border/70 shadow-sm"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={g.src}
                  alt={g.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4">
                  <div className="font-display text-sm font-bold text-foreground">
                    {g.caption}
                  </div>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">
                    {g.text}
                  </p>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </Section>
  );
}

function KpiCard({
  kpi,
}: {
  kpi: (typeof kpis)[number];
}) {
  const TrendIcon =
    kpi.trend === "up" ? ArrowUpRight : kpi.trend === "down" ? ArrowDownRight : Minus;
  const trendColor =
    kpi.trend === "up"
      ? "text-chart-3 bg-chart-3/10"
      : kpi.trend === "down"
        ? "text-destructive bg-destructive/10"
        : "text-muted-foreground bg-muted";

  return (
    <Card className="group gap-0 p-5 transition-all hover:shadow-md hover:shadow-primary/5 hover:-translate-y-0.5">
      <div className="flex items-start justify-between">
        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon name={kpi.icon} className="size-5" />
        </div>
        <span
          className={`inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-semibold ${trendColor}`}
        >
          <TrendIcon className="size-3" />
          {kpi.delta}
        </span>
      </div>
      <div className="mt-4">
        <div className="font-display text-3xl font-bold leading-none tracking-tight">
          {kpi.value}
        </div>
        <div className="mt-2 text-sm font-medium text-foreground/80">
          {kpi.label}
        </div>
        <div className="mt-1 text-xs text-muted-foreground">{kpi.sub}</div>
      </div>
    </Card>
  );
}

function ProfileRow({
  icon: I,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <I className="mt-0.5 size-4 shrink-0 text-primary" />
      <div>
        <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className="text-sm font-medium leading-snug">{value}</div>
      </div>
    </div>
  );
}


