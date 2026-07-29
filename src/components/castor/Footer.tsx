import logoFullLight from "@/assets/logo_full_light.png.asset.json";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-10 border-b border-background/15 pb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <img src={logoFullLight.url} alt="Castor Marketing e Vendas" className="h-12 w-auto" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-background/55">
              Estratégico. Inteligente. Confiável. Construímos operações de marketing e vendas que
              permanecem de pé.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { href: "#metodo", label: "Método" },
              { href: "#servicos", label: "Serviços" },
              { href: "#resultados", label: "Resultados" },
              { href: "#sobre", label: "Sobre" },
              { href: "#contato", label: "Contato" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-background/60 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="pt-8 text-xs text-background/40">
          © {new Date().getFullYear()} Castor Marketing e Vendas. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
