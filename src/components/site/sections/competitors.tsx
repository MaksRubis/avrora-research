"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Crown, Scale } from "lucide-react";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Section } from "@/components/site/section";
import { competitors } from "@/lib/avrora-data";
import { cn } from "@/lib/utils";

export function Competitors() {
  const sorted = [...competitors].sort((a, b) => b.strength - a.strength);
  const maxStrength = Math.max(...competitors.map((c) => c.strength));

  return (
    <Section
      id="competitors"
      eyebrow="Конкуренти"
      title={
        <>
          Конкурентне <span className="text-primary">поле</span> українського
          ритейлу
        </>
      }
      description="«Аврора» конкурує як із продуктовими дискаунтерами (АТБ, Фора), так і з форматом мультимаркетів (Echo Market) та супермаркетами. Сильна сторона — лідерство у непродовольчому сегменті доступних цін, тоді як продуктові мережі переважають у частоті покупок продуктів харчування."
    >
      <Card className="gap-0 overflow-hidden p-0">
        <div className="flex items-center gap-2 border-b border-border/60 px-6 py-4">
          <Scale className="size-4 text-primary" />
          <h3 className="font-display text-base font-bold">
            Порівняння ключових гравців
          </h3>
        </div>
        <div className="scroll-thin overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="min-w-[180px]">Мережа</TableHead>
                <TableHead className="min-w-[160px]">Формат</TableHead>
                <TableHead className="min-w-[110px]">Магазинів</TableHead>
                <TableHead className="min-w-[220px]">Асортимент</TableHead>
                <TableHead className="min-w-[220px]">Позиціонування</TableHead>
                <TableHead className="min-w-[160px]">Сила бренду</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sorted.map((c, i) => (
                <TableRow
                  key={c.name}
                  className={cn(
                    "transition-colors",
                    c.isSubject
                      ? "bg-primary/5 [&>td]:font-medium"
                      : "hover:bg-muted/40"
                  )}
                >
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {c.isSubject && (
                        <Crown className="size-4 shrink-0 text-primary" />
                      )}
                      <span
                        className={cn(
                          "font-display",
                          c.isSubject ? "font-bold text-primary" : "font-semibold"
                        )}
                      >
                        {c.name}
                      </span>
                      {c.isSubject && (
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                          Об'єкт
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {c.format}
                  </TableCell>
                  <TableCell className="font-mono text-sm font-semibold">
                    {c.stores}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {c.assortment}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {c.positioning}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-20 overflow-hidden rounded-full bg-muted sm:w-24">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(c.strength / maxStrength) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 0.1 + i * 0.05, ease: "easeOut" }}
                          className={cn(
                            "h-full rounded-full",
                            c.isSubject ? "bg-primary" : "bg-chart-2"
                          )}
                        />
                      </div>
                      <span className="font-mono text-xs font-semibold tabular-nums">
                        {c.strength}
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Competitive position summary */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <Card className="gap-0 p-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Прямі конкуренти
          </div>
          <p className="mt-2 text-sm leading-relaxed">
            Echo Market — найближчий за форматом мультимаркету, але значно
            менший за масштабом. Тенденція — поява нових локальних гравців.
          </p>
        </Card>
        <Card className="gap-0 p-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Непрямі конкуренти
          </div>
          <p className="mt-2 text-sm leading-relaxed">
            АТБ, Фора, Сільпо — переважно продуктовий ритейл, перетинаються з
            Авророю лише у категоріях снеків, напоїв та базової гігієни.
          </p>
        </Card>
        <Card className="gap-0 p-5">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Потенційна загроза
          </div>
          <p className="mt-2 text-sm leading-relaxed">
            Міжнародні мережі (Pepco, Biedronka) при виході на ринок можуть
            скласти пряму конкуренцію у непродовольчому сегменті.
          </p>
        </Card>
      </div>
    </Section>
  );
}
