"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, AlertOctagon, Quote } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/site/section";
import { Icon } from "@/components/site/icon";
import { warStats, warTimeline, charityBreakdown, mediaImages } from "@/lib/avrora-data";
import { cn } from "@/lib/utils";

export function WarResilience() {
  return (
    <Section
      id="war"
      eyebrow="Війна та стійкість"
      title={
        <>
          Випробування війною: <span className="text-primary">втрати</span> та{" "}
          <span className="text-chart-3">відновлення</span>
        </>
      }
      description="Повномасштабне вторгнення стало найтяжчим випробуванням для мережі: втрата 200+ магазинів, знищення розподільних центрів. Та «Аврора» не лише відновила операції — а й стала одним із перших гравців роздрібної торгівлі, хто системно підтримує Сили оборони, ветеранів та українських виробників."
      className="bg-muted/30 border-y border-border/60"
    >
      {/* Feature image hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="group relative overflow-hidden rounded-2xl border border-border/70 shadow-lg shadow-primary/5"
      >
        <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
          <img
            src={mediaImages.warResilience}
            alt="Волонтери «Аврори» формують гуманітарні вантажі на підтримку Сил оборони України"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/45 to-transparent" />
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" />

          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 lg:p-10">
            <Badge className="mb-3 w-fit gap-1.5 bg-primary text-primary-foreground hover:bg-primary">
              <ShieldCheck className="size-3.5" />
              Стійкість та підтримка
            </Badge>
            <blockquote className="max-w-2xl text-pretty text-lg font-medium leading-snug text-foreground sm:text-xl lg:text-2xl">
              <Quote className="mb-1 size-5 text-primary sm:size-6" />
              «Аврора» передала на благодійність 929 млн ₴ з початку
              повномасштабного вторгнення — підтримка ЗСУ, ветеранів та
              реабілітації.
            </blockquote>
            <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
              Джерело: відкриті дані мережі, станом на літо 2026
            </p>
          </div>
        </div>
      </motion.div>

      {/* Stats grid */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {warStats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <WarStatCard stat={s} />
          </motion.div>
        ))}
      </div>

      {/* Timeline + charity breakdown */}
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {/* Timeline */}
        <Card className="lg:col-span-2 gap-0 p-6">
          <div className="mb-5 flex items-center gap-2">
            <AlertOctagon className="size-4 text-primary" />
            <h3 className="font-display text-lg font-bold">
              Хронологія: втрати та відновлення
            </h3>
          </div>
          <div className="relative">
            {/* vertical line */}
            <div className="pointer-events-none absolute bottom-2 left-[7px] top-2 w-px bg-border/70" />
            <ol className="space-y-5">
              {warTimeline.map((t, i) => (
                <motion.li
                  key={t.year + t.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.35, delay: i * 0.03 }}
                  className="relative flex gap-4 pl-0"
                >
                  <span
                    className={cn(
                      "z-10 mt-1 size-3.5 shrink-0 rounded-full border-2 border-background",
                      t.tone === "loss" ? "bg-destructive" : "bg-chart-3"
                    )}
                  />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-bold text-primary">
                        {t.year}
                      </span>
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
                          t.tone === "loss"
                            ? "bg-destructive/10 text-destructive"
                            : "bg-chart-3/10 text-chart-3"
                        )}
                      >
                        {t.tone === "loss" ? "Втрати" : "Відновлення"}
                      </span>
                    </div>
                    <div className="mt-1 text-sm font-semibold">{t.title}</div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {t.text}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </Card>

        {/* Charity breakdown */}
        <Card className="gap-0 p-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-chart-3" />
            <h3 className="font-display text-lg font-bold">Структура благодійності</h3>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Розподіл 929 млн ₴ за напрямами з 2022 року
          </p>

          {/* Stacked bar */}
          <div className="mt-5 flex h-3 w-full overflow-hidden rounded-full bg-muted">
            {charityBreakdown.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ width: 0 }}
                whileInView={{ width: `${c.share}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: "easeOut" }}
                style={{ backgroundColor: c.color }}
                className="h-full"
              />
            ))}
          </div>

          <ul className="mt-5 space-y-3">
            {charityBreakdown.map((c) => (
              <li
                key={c.label}
                className="flex items-center justify-between gap-3 text-sm"
              >
                <span className="flex items-center gap-2">
                  <span
                    className="size-2.5 rounded-sm"
                    style={{ backgroundColor: c.color }}
                  />
                  <span className="text-muted-foreground">{c.label}</span>
                </span>
                <span className="font-mono font-semibold tabular-nums">
                  {c.share}%
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-5 rounded-lg border border-chart-3/30 bg-chart-3/5 p-4">
            <div className="font-display text-2xl font-bold text-chart-3">
              929 млн ₴
            </div>
            <div className="mt-1 text-xs text-muted-foreground">
              загалом передано на потреби країни з 2022 року
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}

function WarStatCard({
  stat,
}: {
  stat: (typeof warStats)[number];
}) {
  const isLoss = stat.tone === "loss";
  return (
    <Card
      className={cn(
        "group h-full gap-0 p-5 transition-all hover:shadow-md hover:-translate-y-0.5",
        isLoss ? "border-destructive/30" : "border-chart-3/30"
      )}
    >
      <div className="flex items-start justify-between">
        <div
          className={cn(
            "flex size-10 items-center justify-center rounded-lg",
            isLoss
              ? "bg-destructive/10 text-destructive"
              : "bg-chart-3/10 text-chart-3"
          )}
        >
          <Icon name={stat.icon} className="size-5" />
        </div>
        <span
          className={cn(
            "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
            isLoss
              ? "bg-destructive/10 text-destructive"
              : "bg-chart-3/10 text-chart-3"
          )}
        >
          {isLoss ? "Втрати" : "Стійкість"}
        </span>
      </div>
      <div className="mt-4">
        <div
          className={cn(
            "font-display text-3xl font-bold leading-none tracking-tight",
            isLoss ? "text-destructive" : "text-chart-3"
          )}
        >
          {stat.value}
        </div>
        <div className="mt-2 text-sm font-medium text-foreground/80">
          {stat.label}
        </div>
        <div className="mt-1 text-xs text-muted-foreground">{stat.sub}</div>
      </div>
    </Card>
  );
}
