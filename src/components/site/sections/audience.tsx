"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { Card } from "@/components/ui/card";
import { Section } from "@/components/site/section";
import { ChartTooltip } from "@/components/site/chart-tooltip";
import { Icon } from "@/components/site/icon";
import { segments } from "@/lib/avrora-data";

const colors = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
];

export function Audience() {
  const total = segments.reduce((sum, s) => sum + s.share, 0);

  return (
    <Section
      id="audience"
      eyebrow="Аудиторія"
      title={
        <>
          Сегментація{" "}
          <span className="text-primary">цільової аудиторії</span>
        </>
      }
      description="Клієнтська база «Аврори» — переважно домогосподарства з помірним та нижчим за середній доходом, молодь та працюючі 25–40. Сегментація за демографією та ключовою потребою у доступних товарах для повсякденного вжитку."
      className="bg-muted/30 border-y border-border/60"
    >
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Donut chart */}
        <Card className="lg:col-span-2 gap-0 p-6">
          <h3 className="font-display text-lg font-bold">Структура аудиторії</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Розподіл за сегментами, % від покупців
          </p>

          <div className="relative mt-4 h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={segments}
                  dataKey="share"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={62}
                  outerRadius={95}
                  paddingAngle={2}
                  stroke="var(--card)"
                  strokeWidth={2}
                >
                  {segments.map((_, i) => (
                    <Cell key={i} fill={colors[i % colors.length]} />
                  ))}
                </Pie>
                <Tooltip
                  content={
                    <ChartTooltip formatter={(v) => `${v}% аудиторії`} />
                  }
                />
              </PieChart>
            </ResponsiveContainer>
            {/* Center label */}
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-display text-3xl font-bold">5М+</span>
              <span className="text-xs text-muted-foreground">покупців</span>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            {segments.map((s, i) => (
              <div
                key={s.name}
                className="flex items-center justify-between text-sm"
              >
                <span className="flex items-center gap-2">
                  <span
                    className="size-2.5 rounded-sm"
                    style={{ backgroundColor: colors[i % colors.length] }}
                  />
                  <span className="text-muted-foreground">{s.name}</span>
                </span>
                <span className="font-mono font-semibold tabular-nums">
                  {((s.share / total) * 100).toFixed(0)}%
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Persona cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
          {segments.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className="group h-full gap-0 p-5 transition-all hover:shadow-md hover:shadow-primary/5 hover:-translate-y-0.5">
                <div className="flex items-start justify-between">
                  <div
                    className="flex size-10 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: `color-mix(in oklch, ${colors[i % colors.length]} 14%, transparent)`,
                      color: colors[i % colors.length],
                    }}
                  >
                    <Icon name={s.icon} className="size-5" />
                  </div>
                  <div className="text-right">
                    <div className="font-display text-xl font-bold leading-none">
                      {s.share}%
                    </div>
                    <div className="text-[11px] text-muted-foreground">
                      аудиторії
                    </div>
                  </div>
                </div>
                <h4 className="mt-3 font-display text-base font-bold leading-snug">
                  {s.name}
                </h4>
                <div className="mt-1 inline-block rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                  Вік: {s.age}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.need}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
