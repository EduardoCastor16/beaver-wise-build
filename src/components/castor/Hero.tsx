import logoMono from "@/assets/logo_mono_t.png.asset.json";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-32">
      <div className="weave-texture pointer-events-none absolute inset-0 opacity-[0.045]" />
      <div className="pointer-events-none absolute -right-32 top-10 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-7">
          <div className="animate-rise inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Engenharia de Marketing B2B
            </span>
          </div>

          <h1
            className="animate-rise mt-8 text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.4rem]"
            style={{ animationDelay: "80ms" }}
          >
            Engenharia Estratégica de Marketing para Negócios que Buscam{" "}
            <span className="text-primary">Domínio de Mercado</span>
          </h1>

          <p
            className="animate-rise mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground"
            style={{ animationDelay: "160ms" }}
          >
            Construímos ecossistemas sólidos de vendas, adaptamos rotas com agilidade analítica e
            transformamos tráfego em crescimento previsível para o seu negócio.
          </p>

          <div className="animate-rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: "240ms" }}>
            <a
              href="#contato"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background transition-all duration-300 hover:bg-primary hover:shadow-lift"
            >
              Construir Minha Estratégia de Crescimento
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#metodo"
              className="inline-flex items-center rounded-full border border-input px-8 py-4 text-sm font-semibold transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              Ver o método
            </a>
          </div>

          <div
            className="animate-rise mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8"
            style={{ animationDelay: "320ms" }}
          >
            {[
              { k: "12 anos", v: "de mercado somados" },
              { k: "40+", v: "operações estruturadas" },
              { k: "B2B e B2C", v: "times comerciais" },
            ].map((s) => (
              <div key={s.k}>
                <div className="font-display text-xl font-bold">{s.k}</div>
                <div className="mt-1 text-xs leading-snug text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={200} className="lg:col-span-5">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-0 rounded-full border border-primary/20" />
            <div className="absolute inset-8 rounded-full border border-primary/10" />
            <div className="absolute inset-16 rounded-full bg-card shadow-soft" />
            <img
              src={logoMono.url}
              alt="Monograma Castor"
              className="animate-float absolute inset-0 m-auto w-[52%]"
            />
            <div className="absolute right-0 top-8 rounded-2xl border border-border bg-card px-5 py-4 shadow-soft">
              <div className="font-display text-2xl font-bold text-primary">Estratégia</div>
              <div className="text-xs text-muted-foreground">antes de qualquer anúncio</div>
            </div>
            <div className="absolute bottom-6 left-0 rounded-2xl border border-border bg-card px-5 py-4 shadow-soft">
              <div className="font-display text-2xl font-bold">Estrutura</div>
              <div className="text-xs text-muted-foreground">que sustenta o crescimento</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
