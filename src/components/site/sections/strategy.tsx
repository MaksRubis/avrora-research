"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Clock, Target } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/site/section";
import { Icon } from "@/components/site/icon";
import { recommendations } from "@/lib/avrora-data";
import { cn } from "@/lib/utils";

export function Strategy() {
  return (
    <Section
      id="strategy"
      eyebrow="Стратегія"
      title={
        <>
          Стратегічні{" "}
          <span className="text-primary">рекомендації</span> для розвитку
        </>
      }
      description="На основі проведеного аналізу сформовано шість взаємопов'язаних стратегічних напрямів. Пріоритети розставлено за впливом на конкурентоздатність та готовністю до реалізації у короткостроковій та середньостроковій перспективі."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {recommendations.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <Card className="group h-full gap-0 p-5 transition-all hover:shadow-md hover:shadow-primary/5 hover:-translate-y-0.5">
              <div className="flex items-start justify-between">
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon name={r.icon} className="size-5" />
                </div>
                <span className="font-mono text-xs font-bold text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h4 className="mt-3 font-display text-base font-bold leading-snug">
                {r.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {r.text}
              </p>

              <div className="mt-4 flex items-center gap-2 border-t border-border/60 pt-3">
                <Badge
                  variant={r.priority === "Високий" ? "default" : "secondary"}
                  className={cn(
                    "gap-1",
                    r.priority === "Високий"
                      ? "bg-primary/10 text-primary hover:bg-primary/15"
                      : ""
                  )}
                >
                  <Target className="size-3" />
                  {r.priority}
                </Badge>
                <Badge variant="outline" className="gap-1 font-mono">
                  <Clock className="size-3" />
                  {r.horizon}
                </Badge>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
