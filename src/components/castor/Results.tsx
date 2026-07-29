import logoMonoLight from "@/assets/logo_mono_light.png.asset.json";
import { Reveal } from "./Reveal";

const metrics = [
  { v: "3,8x", l: "ROAS médio", d: "nas operações com mídia gerida por 6 meses ou mais" },
  { v: "92%", l: "Retenção", d: "de clientes que seguem com a Castor após o primeiro ciclo" },
  { v: "40+", l: "Operações", d: "estruturadas entre serviços, indústria e varejo" },
  { v: "14 dias", l: "Para o plano", d: "do diagnóstico ao projeto comercial aprovado" },
];

export function Results() {
  return (
    <section id="resultados" className="relative overflow-hidden bg-foreground py-28 text-background lg:py-36">
      <div className="weave-texture absolute inset-0 opacity-[0.06]" />
      <img
        src={logoMonoLight.url}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-16 -bottom-16 w-96 opacity-[0.06]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Resultados</span>
          <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">
            Números que só aparecem quando existe <span className="text-primary">método</span>.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-background/15 bg-background/15 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.l} delay={i * 90}>
              <div className="h-full bg-foreground p-8">
                <div className="font-display text-5xl font-bold text-primary">{m.v}</div>
                <div className="mt-4 text-base font-semibold">{m.l}</div>
                <p className="mt-2 text-sm leading-relaxed text-background/55">{m.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
