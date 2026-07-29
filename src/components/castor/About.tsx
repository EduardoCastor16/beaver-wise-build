import eduCrowd from "@/assets/edu-crowd.png.asset.json";
import { Reveal } from "./Reveal";

const values = [
  { t: "Estratégico", d: "Cada ação existe dentro de um plano maior." },
  { t: "Analítico", d: "Dados guiam a decisão, não a opinião mais alta da sala." },
  { t: "Confiável", d: "Transparência total sobre números, prazos e limites." },
  { t: "Previsível", d: "Estruturas de venda que sustentam escala com ROI medido." },
];

export function About() {
  return (
    <section id="sobre" className="py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-border bg-secondary">
            <img
              src={eduCrowd.url}
              alt="Retrato artístico do fundador da Castor em meio a uma multidão em movimento, simbolizando foco estratégico no meio do caos"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-border bg-background/85 p-6 backdrop-blur">
              <p className="font-display text-lg font-bold leading-snug">
                "Estratégia sem execução é apenas intenção. Nós construímos o que funciona."
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Eduardo — CEO, Agência Castor
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="eyebrow">Liderança estratégica</span>
          <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">
            Liderança <span className="text-primary">Estratégica</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Na Castor, nossa filosofia é guiada pela engenharia de resultados: analisar cenários com
            clareza, recalcular rotas com agilidade e erguer estruturas inexpugnáveis de vendas. Não
            vendemos teorias; entregamos previsibilidade de crescimento.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.t} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="text-base font-bold">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
