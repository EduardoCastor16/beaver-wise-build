import { Reveal } from "./Reveal";

const services = [
  {
    t: "Estratégia e posicionamento",
    d: "Diagnóstico de mercado, proposta de valor e plano de crescimento com metas mensuráveis.",
    items: ["Pesquisa e benchmark", "Posicionamento", "Plano de canais"],
  },
  {
    t: "Mídia paga e performance",
    d: "Aquisição previsível em Google e Meta, com leitura de dados semanal e otimização contínua.",
    items: ["Google Ads", "Meta Ads", "Análise de funil"],
  },
  {
    t: "Estrutura comercial",
    d: "Processo de vendas, CRM, cadências e scripts para o time transformar lead em contrato.",
    items: ["CRM e pipeline", "Cadências", "Playbook de vendas"],
  },
  {
    t: "Conteúdo e presença",
    d: "Conteúdo com intenção: autoridade no digital, SEO e materiais que sustentam a venda.",
    items: ["SEO e blog", "Social", "Materiais comerciais"],
  },
  {
    t: "Automação e CRM",
    d: "Fluxos que nutrem, qualificam e avisam o time na hora certa — sem depender de memória.",
    items: ["Automação", "Integrações", "Qualificação"],
  },
  {
    t: "Dados e gestão",
    d: "Painéis claros com os números que importam. Decisão baseada em evidência, não em achismo.",
    items: ["Dashboards", "Rituais de gestão", "Relatórios"],
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-secondary py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Serviços</span>
          <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">
            Tudo que sustenta uma operação que <span className="text-primary">vende</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={(i % 3) * 90}>
              <article className="flex h-full flex-col rounded-3xl border border-border bg-background p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft">
                <h3 className="text-xl font-bold leading-snug">{s.t}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                <ul className="mt-6 space-y-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="h-1 w-4 rounded-full bg-primary/60" />
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
