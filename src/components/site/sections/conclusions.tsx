"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Quote } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/section";

const findings = [
  {
    n: "01",
    title: "Лідерство у ніші мультимаркету",
    text: "«Аврора» — безперечний лідер сегменту доступних непродовольчих товарів із 1 900+ магазинами, що формує бар'єр для входу нових гравців.",
  },
  {
    n: "02",
    title: "Стійкість до макрошоків",
    text: "≈50% українських товарів, розвинена логістика та людиноцентрична модель забезпечили швидке відновлення після втрат 2022 року.",
  },
  {
    n: "03",
    title: "Дві точки зростання",
    text: "E-commerce (+22% річних) та формат МАКСІ у великих містах — ключові драйвери середньострокового зростання та підвищення маржинальності через СТМ.",
  },
  {
    n: "04",
    title: "Ризики масштабування",
    text: "Канібалізація при щільній мережі, посилення АТБ та потенційний вихід міжнародних гравців вимагають чіткого позиціонування та цифрової диференціації.",
  },
  {
    n: "05",
    title: "ESG як конкурентна перевага",
    text: "Відновлювана енергія, підтримка ветеранів та українських виробників формують сильну ESG-позицію для підготовки до IPO та європейської експансії.",
  },
  {
    n: "06",
    title: "Стратегічний фокус",
    text: "Подальший успіх залежить від цифрової трансформації (loyalty + e-com), розширення СТМ та екосистеми Aurora Next для партнерів-виробників.",
  },
];

export function Conclusions() {
  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Section
      id="conclusions"
      eyebrow="Висновки"
      title={
        <>
          Висновки{" "}
          <span className="text-primary">дослідження</span>
        </>
      }
      description="Проведений комплексний аналіз підтверджує: «Аврора» є системно важливим гравцем українського ритейлу з вираженими конкурентними перевагами та чіткими напрямами стратегічного розвитку."
    >
      <Card className="gap-0 overflow-hidden p-0">
        {/* Hero strip */}
        <div className="relative overflow-hidden bg-primary p-6 text-primary-foreground sm:p-8">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <Quote className="size-7 shrink-0 opacity-80" />
              <p className="max-w-2xl text-pretty text-base font-medium leading-relaxed sm:text-lg">
                «Аврора» поєднує масштаб найбільшої мережі мультимаркетів з
                людиноцентричною моделлю та локальним виробництвом — це
                формує стійкий фундамент для подальшого зростання та підготовки
                до IPO.
              </p>
            </div>
            <div className="shrink-0 rounded-xl bg-primary-foreground/15 px-4 py-3 text-sm backdrop-blur">
              <div className="text-xs uppercase tracking-wider opacity-80">
                Підсумкова оцінка
              </div>
              <div className="mt-1 font-display text-2xl font-bold">
                Стабільно сильна
              </div>
            </div>
          </div>
        </div>

        {/* Findings grid */}
        <div className="grid gap-px bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {findings.map((f, i) => (
            <motion.div
              key={f.n}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-card p-6"
            >
              <div className="font-mono text-sm font-bold text-primary">
                {f.n}
              </div>
              <h4 className="mt-2 font-display text-base font-bold leading-snug">
                {f.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.text}
              </p>
            </motion.div>
          ))}
        </div>
      </Card>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mt-6 flex flex-col items-start justify-between gap-4 rounded-xl border border-border/70 bg-muted/30 p-6 sm:flex-row sm:items-center"
      >
        <div className="flex items-start gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Sparkles className="size-5" />
          </span>
          <div>
            <h4 className="font-display text-base font-bold">
              Готові глибше розібрати окремий блок?
            </h4>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Поверніться до розділу «Огляд» або «Стратегія» для деталей.
            </p>
          </div>
        </div>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline" onClick={() => go("overview")}>
            До огляду
          </Button>
          <Button onClick={() => go("strategy")}>
            До стратегії
            <ArrowUpRight className="size-4" />
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
