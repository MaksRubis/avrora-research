"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { MapPin, Milestone } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/site/section";
import { ChartTooltip } from "@/components/site/chart-tooltip";
import { networkGrowth, geography } from "@/lib/avrora-data";

const palette = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
  "var(--chart-1)",
  "var(--chart-2)",
];

export function Growth() {
  const last = networkGrowth[networkGrowth.length - 1];
  const first = networkGrowth[0];

  return (
    <Section
      id="growth"
      eyebrow="Динаміка"
      title={
        <>
          Від 1 до <span className="text-primary">1 900+</span> магазинів за 15
          років
        </>
      }
      description="Мережа продемонструвала експоненційне зростання, подолавши три ключові етапи: пошук формату (2011–2015), масштабування з інвестицією Horizon Capital (2021) та відновлення після втрат 2022 року з подальшим прискореним відкриттям нових точок."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Growth area chart */}
        <Card className="lg:col-span-2 gap-0 p-6">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="font-display text-lg font-bold">
                Кількість магазинів за роками
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Зростання мережі «Аврора», 2011 → 2026
              </p>
            </div>
            <Badge variant="secondary" className="self-start font-mono sm:self-end">
              {first.year} → {last.year}
            </Badge>
          </div>

          <div className="mt-6 h-72 w-full sm:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={networkGrowth}
                margin={{ top: 8, right: 8, bottom: 0, left: -8 }}
              >
                <defs>
                  <linearGradient id="g-stores" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.45} />
                    <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="var(--border)"
                  vertical={false}
                />
                <XAxis
                  dataKey="year"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
                  tickFormatter={(v) => (v >= 1000 ? `${v / 1000}k` : `${v}`)}
                />
                <Tooltip
                  content={
                    <ChartTooltip
                      formatter={(v) => `${v} магазинів`}
                      labelFormatter={(l) => `${l} рік`}
                    />
                  }
                  cursor={{ stroke: "var(--primary)", strokeWidth: 1, strokeDasharray: "4 4" }}
                />
                <Area
                  type="monotone"
                  dataKey="stores"
                  name="Магазинів"
                  stroke="var(--chart-1)"
                  strokeWidth={2.5}
                  fill="url(#g-stores)"
                  dot={{ r: 3, fill: "var(--chart-1)", strokeWidth: 0 }}
                  activeDot={{ r: 5 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Geography bar */}
        <Card className="gap-0 p-6">
          <div className="flex items-center gap-2">
            <MapPin className="size-4 text-primary" />
            <h3 className="font-display text-lg font-bold">Географія мережі</h3>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Розподіл магазинів за макрорегіонами України
          </p>

          <div className="mt-6 h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={geography}
                layout="vertical"
                margin={{ top: 0, right: 16, bottom: 0, left: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="var(--border)"
                  horizontal={false}
                />
                <XAxis
                  type="number"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                />
                <YAxis
                  type="category"
                  dataKey="region"
                  tickLine={false}
                  axisLine={false}
                  width={120}
                  tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
                />
                <Tooltip
                  content={
                    <ChartTooltip
                      formatter={(v, name) =>
                        name === "stores" ? `${v} магазинів` : `${v}%`
                      }
                    />
                  }
                  cursor={{ fill: "var(--muted)", opacity: 0.4 }}
                />
                <Bar dataKey="stores" name="stores" radius={[0, 4, 4, 0]} barSize={18}>
                  {geography.map((_, i) => (
                    <Cell key={i} fill={palette[i % palette.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Milestones strip */}
      <Card className="mt-6 gap-0 p-6">
        <div className="mb-4 flex items-center gap-2">
          <Milestone className="size-4 text-primary" />
          <h3 className="font-display text-base font-bold">
            Ключові віхи масштабування
          </h3>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { y: "2015", t: "100 магазинів", s: "перша точка масштабування" },
            { y: "2021", t: "Інвестиція Horizon", s: "старт прискореного зростання" },
            { y: "2023", t: "1000 магазинів", s: "Івано-Франківськ" },
            { y: "2024", t: "1500 магазинів", s: "+360 за рік — рекорд" },
          ].map((m, i) => (
            <motion.div
              key={m.y}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-lg border border-border/60 bg-muted/20 p-4"
            >
              <div className="font-mono text-xs font-semibold text-primary">
                {m.y}
              </div>
              <div className="mt-1 font-display text-base font-bold">{m.t}</div>
              <div className="mt-0.5 text-xs text-muted-foreground">{m.s}</div>
            </motion.div>
          ))}
        </div>
      </Card>
    </Section>
  );
}
