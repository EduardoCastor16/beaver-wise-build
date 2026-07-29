import { Reveal } from "./Reveal";

const points = [
  "Diagnóstico gratuito da operação atual",
  "Plano de crescimento em até 14 dias",
  "Atendimento direto com quem executa",
];

export function Contact() {
  return (
    <section id="contato" className="py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 rounded-[2.5rem] border border-border bg-secondary p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
          <Reveal>
            <span className="eyebrow">Contato</span>
            <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">
              Vamos desenhar a sua <span className="text-primary">próxima estrutura</span>.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Conte onde a sua operação trava hoje. Respondemos com uma leitura honesta do cenário e
              o caminho que faríamos no seu lugar.
            </p>
            <ul className="mt-10 space-y-4">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 h-1 w-5 shrink-0 rounded-full bg-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <form
              className="rounded-3xl border border-border bg-background p-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-5">
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Nome
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    className="mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    E-mail
                  </span>
                  <input
                    type="email"
                    required
                    placeholder="voce@empresa.com"
                    className="mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Empresa
                  </span>
                  <input
                    type="text"
                    placeholder="Nome da empresa"
                    className="mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    Desafio atual
                  </span>
                  <textarea
                    rows={4}
                    placeholder="O que você quer resolver nos próximos 90 dias?"
                    className="mt-2 w-full resize-none rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-2 rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background transition-all duration-300 hover:bg-primary hover:shadow-lift"
                >
                  Enviar mensagem
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
