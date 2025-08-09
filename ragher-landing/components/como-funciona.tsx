import { Card, CardContent } from "@/components/ui/card"
import { Search, Workflow, Brain, Network, LineChart } from 'lucide-react'

export default function ComoFuncionaSection() {
  const steps = [
    { title: "Diagnóstico personalizado", icon: <Search className="h-12 w-12" /> },
    { title: "Mapeamento de processos críticos", icon: <Workflow className="h-12 w-12" /> },
    { title: "Criação dos agentes IA sob medida", icon: <Brain className="h-12 w-12" /> },
    { title: "Integração com seu time e sistemas", icon: <Network className="h-12 w-12" /> },
    { title: "Monitoramento e evolução contínua", icon: <LineChart className="h-12 w-12" /> },
  ]

  return (
    <section id="como-funciona" className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      {/* Background: dark gradient + color glow on the right + soft vignette */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#0b1020_0%,#151a2e_100%)]" />
        <div className="absolute right-[-20%] top-[-10%] h-[120%] w-[60%] rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.55),rgba(99,102,241,0.45),rgba(217,70,239,0.35),transparent_70%)] blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_40%_at_50%_50%,transparent_0%,transparent_65%,rgba(0,0,0,0.45)_100%)]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Como Funciona na Prática
          </h2>
          <div className="mt-4 inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur">
            Implementação prática, com acompanhamento real.
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <Card
              key={i}
              className="bg-white/5 border-white/10 rounded-2xl hover:bg-white/[0.07] transition-colors"
            >
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 p-4 text-white">
                  {/* Icons are strokes by default; keep white for contrast */}
                  <div className="text-white">{step.icon}</div>
                </div>
                <p className="text-white/90 text-sm leading-snug">{step.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline baseline with ticks (visible on md+) */}
        <div className="relative mt-10 hidden md:block">
          <div className="h-[2px] w-full rounded-full bg-white/70" />
          <div className="absolute inset-0 grid grid-cols-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="relative">
                <div className="absolute left-1/2 top-1/2 h-5 w-[2px] -translate-x-1/2 -translate-y-1/2 bg-white/80" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
