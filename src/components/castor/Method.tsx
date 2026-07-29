import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    t: "Diagnóstico do Terreno",
    d: "Mapeamento de gargalos e oportunidades no seu funil atual.",
  },
  {
    n: "02",
    t: "Engenharia de Ecossistema",
    d: "Criação de campanhas de tráfego, influência e conversão integradas.",
  },
  {
    n: "03",
    t: "Adaptação Dinâmica de Rota",
    d: "Análise constante de dados para pivotar estratégias no momento certo.",
  },
  {
    n: "04",
    t: "Consolidação e Escala",
    d: "Maximização do ROI e escala previsível das vendas.",
  },
];

export function Method() {
  return (
    <section id="metodo" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">O método</span>
          <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">
            O Método Castor: Como <span className="text-primary">Arquitetamos</span> o Seu
            Crescimento
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Assim como o castor molda o ambiente com precisão e inteligência, nós construímos a
            estrutura necessária para o seu negócio dominar o mercado.
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

        <Reveal delay={120}>
          <div className="mt-14">
            <a
              href="#contato"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background transition-all duration-300 hover:bg-primary hover:shadow-lift"
            >
              Quero Estruturar Minha Operação
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
