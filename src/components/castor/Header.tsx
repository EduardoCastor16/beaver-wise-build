
const logoFull = "/logo_full.png";

const links = [
  { href: "#metodo", label: "Método" },
  { href: "#servicos", label: "Serviços" },
  { href: "#resultados", label: "Resultados" },
  { href: "#sobre", label: "Liderança" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl py-3"
          : "border-b border-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#topo" aria-label="Castor Marketing e Vendas">
          <img
            src={logoFull}
            alt="Castor Marketing e Vendas"
            className={`w-auto transition-all duration-500 ${scrolled ? "h-9" : "h-11"}`}
          />
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-all duration-300 hover:bg-primary hover:shadow-lift"
        >
          Falar com a Castor
        </a>
      </div>
    </header>
  );
}
