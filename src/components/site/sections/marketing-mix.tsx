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
import { marketingMix, assortment } from "@/lib/avrora-data";

const colors = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
];

export function MarketingMix() {
  return (
    <Section
      id="mix"
      eyebrow="Маркетинг-мікс"
      title={
        <>
          Маркетинг-мікс <span className="text-primary">7P</span> мережі «Аврора»
        </>
      }
      description="Розширена модель 7P дозволяє врахувати специфіку роздрібної торгівлі: окрім класичних 4P (продукт, ціна, місце, просування) — аналізуємо людей, процеси та фізичне середовище магазинів."
      className="bg-muted/30 border-y border-border/60"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {marketingMix.map((p, i) => (
          <motion.div
            key={p.p}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <Card className="group h-full gap-0 p-5 transition-all hover:shadow-md hover:shadow-primary/5 hover:-translate-y-0.5">
              <div className="flex items-center justify-between">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon name={p.icon} className="size-5" />
                </div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {p.p}
                </span>
              </div>
              <h4 className="mt-3 font-display text-base font-bold">{p.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.text}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Assortment breakdown */}
      <Card className="mt-6 gap-0 p-6">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-lg font-bold">
              Структура асортименту
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Орієнтовний розподіл ~4 000 SKU за категоріями товарів
            </p>
            <div className="mt-6 h-56 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={assortment}
                    dataKey="share"
                    nameKey="category"
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    innerRadius={48}
                    paddingAngle={2}
                    stroke="var(--card)"
                    strokeWidth={2}
                  >
                    {assortment.map((_, i) => (
                      <Cell key={i} fill={colors[i % colors.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    content={
                      <ChartTooltip formatter={(v) => `${v}% асортименту`} />
                    }
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-2.5">
            {assortment.map((a, i) => (
              <div
                key={a.category}
                className="flex items-center justify-between gap-3 border-b border-border/40 pb-2.5 last:border-0 last:pb-0"
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="size-3 rounded-sm"
                    style={{ backgroundColor: colors[i % colors.length] }}
                  />
                  <span className="text-sm font-medium">{a.category}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-1.5 w-20 overflow-hidden rounded-full bg-muted">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${a.share * 4}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.04 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: colors[i % colors.length] }}
                    />
                  </div>
                  <span className="w-9 text-right font-mono text-xs font-semibold tabular-nums">
                    {a.share}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </Section>
  );
}
