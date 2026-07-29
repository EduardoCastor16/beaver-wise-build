import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/castor/Header";
import { Hero } from "@/components/castor/Hero";
import { Method } from "@/components/castor/Method";
import { Services } from "@/components/castor/Services";
import { About } from "@/components/castor/About";
import { Results } from "@/components/castor/Results";
import { Contact } from "@/components/castor/Contact";
import { Footer } from "@/components/castor/Footer";

const title = "Agência Castor | Engenharia de Marketing e Crescimento Estratégico";
const description =
  "Aumente a previsibilidade das suas vendas com a Agência Castor. Estratégia, tráfego, influência e arquitetura de crescimento orientada a ROI.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Method />
        <Services />
        <About />
        <Results />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
