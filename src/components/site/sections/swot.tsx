"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Section } from "@/components/site/section";
import { swot } from "@/lib/avrora-data";

interface Quadrant {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  items: string[];
  accent: string;
  bg: string;
  border: string;
}

export function Swot() {
  const quadrants: Quadrant[] = [
    {
      title: "Сильні сторони",
      subtitle: "Strengths",
      icon: CheckCircle2,
      items: swot.strengths,
      accent: "text-chart-3",
      bg: "bg-chart-3/10",
      border: "border-chart-3/30",
    },
    {
      title: "Слабкі сторони",
      subtitle: "Weaknesses",
      icon: AlertTriangle,
      items: swot.weaknesses,
      accent: "text-chart-5",
      bg: "bg-chart-5/10",
      border: "border-chart-5/30",
    },
    {
      title: "Можливості",
      subtitle: "Opportunities",
      icon: TrendingUp,
      items: swot.opportunities,
      accent: "text-chart-1",
      bg: "bg-chart-1/10",
      border: "border-chart-1/30",
    },
    {
      title: "Загрози",
      subtitle: "Threats",
      icon: ShieldAlert,
      items: swot.threats,
      accent: "text-destructive",
      bg: "bg-destructive/10",
      border: "border-destructive/30",
    },
  ];

  return (
    <Section
      id="swot"
      eyebrow="SWOT-аналіз"
      title={
        <>
          Стратегічний{" "}
          <span className="text-primary">SWOT-аналіз</span> мережі «Аврора»
        </>
      }
      description="Системний аналіз внутрішнього середовища (сильні та слабкі сторони) та зовнішнього оточення (можливості й загрози). Синтезує результати ринкового, конкурентного та аудиторного аналізу у стратегічні висновки."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {quadrants.map((q, qi) => (
          <motion.div
            key={q.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: qi * 0.08 }}
          >
            <Card className={`h-full gap-0 border ${q.border} p-6`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex size-10 items-center justify-center rounded-lg ${q.bg} ${q.accent}`}
                  >
                    <q.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold leading-none">
                      {q.title}
                    </h3>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      {q.subtitle}
                    </span>
                  </div>
                </div>
                <span
                  className={`font-mono text-sm font-bold ${q.accent}`}
                >
                  {q.items.length}
                </span>
              </div>

              <ul className="mt-5 space-y-2.5">
                {q.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.03 }}
                    className="flex items-start gap-2.5 text-sm leading-snug"
                  >
                    <span
                      className={`mt-1.5 size-1.5 shrink-0 rounded-full ${q.accent.replace("text-", "bg-")}`}
                    />
                    <span className="text-foreground/90">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
