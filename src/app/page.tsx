import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { Hero } from "@/components/site/sections/hero";
import { Overview } from "@/components/site/sections/overview";
import { Growth } from "@/components/site/sections/growth";
import { WarResilience } from "@/components/site/sections/war-resilience";
import { Market } from "@/components/site/sections/market";
import { Competitors } from "@/components/site/sections/competitors";
import { Audience } from "@/components/site/sections/audience";
import { Swot } from "@/components/site/sections/swot";
import { MarketingMix } from "@/components/site/sections/marketing-mix";
import { Strategy } from "@/components/site/sections/strategy";
import { Conclusions } from "@/components/site/sections/conclusions";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Overview />
        <Growth />
        <WarResilience />
        <Market />
        <Competitors />
        <Audience />
        <Swot />
        <MarketingMix />
        <Strategy />
        <Conclusions />
      </main>
      <SiteFooter />
    </div>
  );
}
