import * as React from "react";
import { ExternalLink, BookOpen } from "lucide-react";

import { sources, mediaImages } from "@/lib/avrora-data";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border/70 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand + disclaimer */}
          <div className="md:col-span-1">
            <img
              src={mediaImages.logo}
              alt="Логотип «Аврора»"
              className="h-12 w-auto object-contain sm:h-14"
            />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Навчальний проєкт з дисципліни «Маркетингові дослідження».
              Комплексний аналіз мережі мультимаркетів «Аврора» в Україні.
            </p>
          </div>

          {/* Sources */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <BookOpen className="size-4 text-primary" />
              Джерела даних
            </div>
            <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {sources.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-start gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="leading-snug">{s.label}</span>
                    <ExternalLink className="mt-0.5 size-3 shrink-0 opacity-50 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {year} Навчальний проєкт. Дані наведено для дослідницьких цілей
            та можуть бути наближеними.
          </p>
          <p className="font-mono">
            Дисципліна: Маркетингові дослідження · Україна
          </p>
        </div>
      </div>
    </footer>
  );
}
