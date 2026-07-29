import logoC from "@/assets/logo_c_t.png.asset.json";
import { Reveal } from "./Reveal";

const values = [
  { t: "Estratégico", d: "Cada ação existe dentro de um plano maior." },
  { t: "Inteligente", d: "Dados guiam a decisão, não a opinião mais alta da sala." },
  { t: "Confiável", d: "Transparência total sobre números, prazos e limites." },
  { t: "Minimalista", d: "Poucas frentes, bem executadas, com profundidade." },
];

export function About() {
  return (
    <section id="sobre" className="py-28 lg:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-border bg-secondary">
            <div className="weave-texture absolute inset-0 opacity-[0.07]" />
            <img
              src={logoC.url}
              alt="Monograma simplificado Castor"
              className="absolute inset-0 m-auto w-[45%]"
            />
            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-border bg-background/80 p-6 backdrop-blur">
              <p className="font-display text-lg font-bold leading-snug">
                Letra C, cabeça e cauda do castor.
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Um símbolo sobre construir com método — a base de tudo que entregamos.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="eyebrow">Sobre a Castor</span>
          <h2 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">
            Leveza na forma.
            <br />
            <span className="text-primary">Engenharia</span> no fundo.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Castores são os arquitetos silenciosos da natureza: mudam o curso da água com paciência,
            leitura de terreno e construção precisa. Trabalhamos igual — sem ruído, sem promessa
            inflada, com estrutura que permanece de pé depois que a campanha acaba.
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
