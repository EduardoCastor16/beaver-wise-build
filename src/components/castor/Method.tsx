import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    t: "Diagnóstico",
    d: "Leitura completa do cenário: oferta, canais, funil, time e números. Nada começa sem entender o terreno.",
  },
  {
    n: "02",
    t: "Projeto",
    d: "Desenhamos a arquitetura de aquisição e a rotina comercial, com metas, responsáveis e prazos claros.",
  },
  {
    n: "03",
    t: "Construção",
    d: "Campanhas, conteúdo, funis e CRM implementados com padrão de execução — sem improviso.",
  },
  {
    n: "04",
    t: "Manutenção",
    d: "Ritual semanal de leitura de dados e ajuste fino. O que funciona, escala. O que não, sai.",
  },
];

export function Method() {
  return (
    <section id="metodo" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">O método</span>
          <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">
            Quatro etapas para <span className="text-primary">represar</span> o crescimento.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Um castor não empilha galhos: ele calcula a correnteza. É assim que tratamos cada
            operação que entra na Castor.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <article className="group h-full rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft">
                <span className="font-display text-sm font-bold tracking-[0.3em] text-primary">
                  {s.n}
                </span>
                <h3 className="mt-6 text-xl font-bold">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                <div className="mt-8 h-px w-full bg-border transition-colors duration-500 group-hover:bg-primary/50" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
