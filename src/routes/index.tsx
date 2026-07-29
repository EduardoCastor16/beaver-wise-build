import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/castor/Header";
import { Hero } from "@/components/castor/Hero";
import { Method } from "@/components/castor/Method";
import { Services } from "@/components/castor/Services";
import { About } from "@/components/castor/About";
import { Results } from "@/components/castor/Results";
import { Contact } from "@/components/castor/Contact";
import { Footer } from "@/components/castor/Footer";

const title = "Castor | Marketing e Vendas com estratégia e estrutura";
const description =
  "Agência de marketing e vendas que constrói operações previsíveis: diagnóstico, estratégia, mídia de performance e estrutura comercial.";

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
