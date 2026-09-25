"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowDownRight,
  ArrowUpRight,
  Sparkles,
  Store,
  Users,
  TrendingUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { company } from "@/lib/avrora-data";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background grid + gradient */}
      <div className="bg-grid bg-grid-fade pointer-events-none absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute -top-24 right-0 -z-10 h-[40rem] w-[40rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-chart-2/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              <Sparkles className="size-3.5" />
              Маркетингове дослідження · Україна
            </div>
            <h1 className="mt-6 text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Мережа «Аврора»:
              <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                {" "}
                доступний ритейл{" "}
              </span>
              у фокусі маркетингу
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {company.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button size="lg" onClick={() => scrollTo("overview")}>
                Перейти до аналізу
                <ArrowRight className="size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("conclusions")}
              >
                Висновки дослідження
              </Button>
            </div>

            {/* Inline mini-stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border/60 pt-6">
              {[
                { v: "1 900+", l: "магазинів" },
                { v: "17 000+", l: "працівників" },
                { v: "≈50%", l: "укр. товарів" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl font-bold sm:text-3xl">
                    {s.v}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: dashboard preview mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -1 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative"
          >
            <HeroDashboard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroDashboard() {
  // A static, stylized "Tremor-like" dashboard preview composed of mini cards + a sparkline.
  const bars = [28, 42, 36, 55, 48, 70, 62, 88, 96, 100];
  return (
    <div className="relative rounded-2xl border border-border/70 bg-card p-5 shadow-xl shadow-primary/5 ring-1 ring-border/40">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/60 pb-4">
        <div>
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Динаміка мережі
          </div>
          <div className="mt-0.5 flex items-baseline gap-2">
            <span className="font-display text-2xl font-bold">1 900</span>
            <span className="inline-flex items-center gap-0.5 text-xs font-semibold text-chart-3">
              <ArrowUpRight className="size-3.5" />
              +9,5%
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-chart-3/10 px-2.5 py-1 text-xs font-semibold text-chart-3">
          <span className="size-1.5 rounded-full bg-chart-3" />
          Зростання
        </div>
      </div>

      {/* Mini KPI cards */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          { icon: Store, label: "Магазини", value: "1 900", up: true },
          { icon: Users, label: "Команда", value: "17k", up: true },
          { icon: TrendingUp, label: "Аудиторія", value: "5М+", up: true },
        ].map((c) => (
          <div
            key={c.label}
            className="rounded-lg border border-border/60 bg-muted/30 p-3"
          >
            <c.icon className="size-4 text-primary" />
            <div className="mt-2 font-display text-lg font-bold leading-none">
              {c.value}
            </div>
            <div className="mt-1 text-[10px] text-muted-foreground">
              {c.label}
            </div>
          </div>
        ))}
      </div>

      {/* Sparkline / bar chart */}
      <div className="mt-4 rounded-lg border border-border/60 bg-muted/20 p-4">
        <div className="flex items-end justify-between gap-1.5">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 * i, ease: "easeOut" }}
              className="flex-1 rounded-t bg-gradient-to-t from-primary/70 to-chart-2"
              style={{ minHeight: 6 }}
            />
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between text-[10px] text-muted-foreground">
          <span>2011</span>
          <span>2018</span>
          <span>2026</span>
        </div>
      </div>

      {/* Footer row */}
      <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-xs">
        <span className="text-muted-foreground">Джерело: відкриті дані</span>
        <span className="inline-flex items-center gap-1 font-medium text-chart-4">
          <ArrowDownRight className="size-3" />
          Оновлено 2026
        </span>
      </div>

      {/* Decorative floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
        className="absolute -right-4 -top-4 hidden rounded-xl border border-border/70 bg-card px-3 py-2 shadow-md sm:block"
      >
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
          Частка ринку
        </div>
        <div className="font-display text-sm font-bold">
          #1 мультимаркет
        </div>
      </motion.div>
    </div>
  );
}
