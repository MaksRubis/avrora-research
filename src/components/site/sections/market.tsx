"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Bar,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { ShoppingCart, Globe, TrendingUp, Wallet } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Section } from "@/components/site/section";
import { ChartTooltip } from "@/components/site/chart-tooltip";
import { marketSize, marketStats } from "@/lib/avrora-data";

export function Market() {
  const stats = [
    {
      icon: Wallet,
      label: "Обіг роздрібної торгівлі 2025",
      value: marketStats.totalTurnover2025,
      hint: "понад +10% до попереднього року",
    },
    {
      icon: Globe,
      label: "Частка e-commerce",
      value: marketStats.ecomShare,
      hint: `зростання ${marketStats.ecomGrowth}`,
    },
    {
      icon: ShoppingCart,
      label: "Сегмент дискаунтерів",
      value: marketStats.discountSegment,
      hint: "продуктовий рітейл України",
    },
    {
      icon: TrendingUp,
      label: "Середній чек Аврора",
      value: marketStats.avgBasket,
      hint: `${marketStats.visitsPerMonth} візитів на клієнта`,
    },
  ];

  return (
    <Section
      id="market"
      eyebrow="Ринок"
      title={
        <>
          Ринок роздрібної торгівлі{" "}
          <span className="text-primary">України</span>
        </>
      }
      description="Ринок роздрібної торгівлі України стабільно зростає, а сегмент e-commerce та формат дискаунтерів показують найвищий приріст. «Аврора» працює на перетині двох трендів — доступних цін та цифровізації покупок."
      className="bg-muted/30 border-y border-border/60"
    >
      {/* Stats strip */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <Card className="gap-0 p-5">
              <s.icon className="size-5 text-primary" />
              <div className="mt-3 font-display text-2xl font-bold leading-none">
                {s.value}
              </div>
              <div className="mt-2 text-xs font-medium leading-snug text-foreground/80">
                {s.label}
              </div>
              <div className="mt-1 text-[11px] text-muted-foreground">
                {s.hint}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Main chart */}
      <Card className="mt-6 gap-0 p-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="font-display text-lg font-bold">
              Обіг роздрібної торгівлі vs. e-commerce
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Загальний обіг (млрд ₴) та окремо онлайн-канал, 2020–2025
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <Legend color="var(--chart-1)" label="Обіг роздрібу" />
            <Legend color="var(--chart-2)" label="E-commerce" />
          </div>
        </div>

        <div className="mt-6 h-72 w-full sm:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={marketSize}
              margin={{ top: 8, right: 8, bottom: 0, left: -8 }}
            >
              <defs>
                <linearGradient id="g-turnover" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--chart-1)" stopOpacity={0.95} />
                  <stop offset="100%" stopColor="var(--chart-1)" stopOpacity={0.55} />
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
                tickFormatter={(v) => `${v}`}
              />
              <Tooltip
                content={
                  <ChartTooltip
                    formatter={(v, name) =>
                      name.toLowerCase().includes("commerce")
                        ? `${v} млрд ₴`
                        : `${v} млрд ₴`
                    }
                  />
                }
                cursor={{ fill: "var(--muted)", opacity: 0.4 }}
              />
              <Bar
                dataKey="turnover"
                name="Обіг роздрібу"
                fill="url(#g-turnover)"
                radius={[6, 6, 0, 0]}
                barSize={26}
              />
              <Line
                type="monotone"
                dataKey="ecom"
                name="E-commerce"
                stroke="var(--chart-2)"
                strokeWidth={2.5}
                dot={{ r: 3.5, fill: "var(--chart-2)", strokeWidth: 0 }}
                activeDot={{ r: 5 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-5 grid gap-3 border-t border-border/60 pt-5 text-sm sm:grid-cols-3">
          <Insight
            tone="up"
            title="+22% річних"
            text="зростання e-commerce — потенціал для цифрового каналу Аврори"
          />
          <Insight
            tone="up"
            title="≈11% ринку"
            text="частка форматів «дискаунтер» у продуктівці — основний сегмент зростання"
          />
          <Insight
            tone="neutral"
            title="8,4 візиту"
            text="середня частота відвідувань одного клієнта на місяць"
          />
        </div>
      </Card>
    </Section>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-muted-foreground">
      <span
        className="size-2.5 rounded-sm"
        style={{ backgroundColor: color }}
      />
      {label}
    </span>
  );
}

function Insight({
  tone,
  title,
  text,
}: {
  tone: "up" | "down" | "neutral";
  title: string;
  text: string;
}) {
  const color =
    tone === "up"
      ? "text-chart-3"
      : tone === "down"
        ? "text-destructive"
        : "text-muted-foreground";
  return (
    <div>
      <div className={`font-display text-lg font-bold ${color}`}>{title}</div>
      <div className="mt-0.5 text-xs leading-snug text-muted-foreground">
        {text}
      </div>
    </div>
  );
}
