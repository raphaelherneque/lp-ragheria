"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Bot, Zap, TrendingUp, MessageSquare, Star, Instagram, MessageCircle, Mail, ArrowRight, CheckCircle, Menu, X, Brain, Target, BadgeCheck, Workflow, Activity, LineChart, Clock, Users, Headphones, Link2, Gauge } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import ComoFuncionaSection from "@/components/como-funciona"

export default function LandingPage() {
const [isMenuOpen, setIsMenuOpen] = useState(false)
const [formData, setFormData] = useState({
nome: "",
email: "",
whatsapp: "",
mensagem: "",
})
const [isSubmitting, setIsSubmitting] = useState(false)
const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault()
setIsSubmitting(true)

try {
const response = await fetch("https://n8n-webhook.ragheria.com.br/webhook/formulario-lp-ragueria", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(formData),
})

if (response.ok) {
setSubmitStatus("success")
setFormData({ nome: "", email: "", whatsapp: "", mensagem: "" })
} else {
setSubmitStatus("error")
}
} catch {
setSubmitStatus("error")
} finally {
setIsSubmitting(false)
}
}

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
setFormData((prev) => ({
...prev,
[e.target.name]: e.target.value,
}))
}

const scrollToForm = () => {
document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
}

return (
<div className="min-h-screen bg-[#f3f1ee] text-[#171412] relative bg-white">
{/* Navbar */}
<nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#0b1020]/60 border-b border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">
  <div className="flex items-center">
    <Link href="/" className="flex items-center leading-8 font-normal">
      <Image
        src="/logo-ragher.svg"
        alt="ragher.ia"
        width={640}
        height={200}
        className="h-20 md:h-24 lg:h-28 w-auto"
      />
    </Link>
  </div>

  {/* Desktop Menu */}
  <div className="hidden md:flex items-center space-x-8">
    <Link href="#solucoes" className="text-white/80 hover:text-white transition-colors">
      Soluções
    </Link>
    <Link href="#contato" className="text-white/80 hover:text-white transition-colors">
      Contato
    </Link>
    <Button
      className="rounded-xl px-6 bg-gradient-to-r from-[#7c3aed] via-[#6366f1] to-[#22d3ee] hover:brightness-110 text-white shadow-lg shadow-indigo-900/30"
      onClick={scrollToForm}
    >
      Solicitar Diagnóstico
    </Button>
  </div>

  {/* Mobile Menu Button */}
  <div className="md:hidden">
    <Button variant="ghost" size="sm" className="text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
      {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </Button>
  </div>
</div>

{/* Mobile Menu */}
{isMenuOpen && (
  <div className="md:hidden absolute top-20 left-0 right-0 bg-[#0b1020]/90 backdrop-blur-xl border-b border-white/10 shadow-xl">
    <div className="px-4 py-4 space-y-4">
      <Link
        href="#solucoes"
        className="block text-white/90 hover:text-white transition-colors"
        onClick={() => setIsMenuOpen(false)}
      >
        Soluções
      </Link>
      <Link
        href="#contato"
        className="block text-white/90 hover:text-white transition-colors"
        onClick={() => setIsMenuOpen(false)}
      >
        Contato
      </Link>
      <Button
        className="w-full rounded-xl bg-gradient-to-r from-[#7c3aed] via-[#6366f1] to-[#22d3ee] hover:brightness-110 text-white shadow-lg"
        onClick={() => {
          setIsMenuOpen(false)
          scrollToForm()
        }}
      >
        Solicitar Diagnóstico
      </Button>
    </div>
  </div>
)}
</div>
</nav>

{/* Hero (Capa / Slide 1) */}
<section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-900">
{/* Plano de fundo em camadas */}
<div className="absolute inset-0 -z-10 pointer-events-none">
{/* Base: gradiente escuro roxo/azul */}
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_-10%_-10%,#3b82f6_0%,transparent_60%),radial-gradient(1000px_500px_at_110%_0%,#8b5cf6_0%,transparent_55%),linear-gradient(180deg,#0b1020_0%,#151a2e_100%)]" />
{/* Textura suave */}
<Image
  src="/images/bg-soft-blobs.png"
  alt="Textura fluida com manchas coloridas"
  fill
  priority
  sizes="100vw"
  className="object-cover opacity-40 mix-blend-soft-light"
/>
{/* Acentos 3D */}
<Image
  src="/images/bg-ribbon.png"
  alt="Fita 3D azul metálica"
  width={980}
  height={380}
  className="absolute -right-24 md:-right-10 top-8 md:top-4 opacity-70 blur-[1px] rotate-[4deg]"
/>
<Image
  src="/images/bg-amoeba.png"
  alt="Forma 3D iridescente"
  width={820}
  height={360}
  className="absolute -left-24 bottom-0 opacity-60 blur-[0.5px]"
/>
{/* Vinheta sutil */}
<div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,transparent_0%,transparent_60%,rgba(0,0,0,0.35)_100%)]" />
</div>

<div className="max-w-6xl mx-auto relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
  {/* Conteúdo */}
  <div className="text-center lg:text-left">
    {/* Pills */}
    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6">
      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 border border-white/15 backdrop-blur shadow-xl text-white">
        Consultoria de IA
      </span>
      <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-[#7c3aed]/30 to-[#22d3ee]/30 border border-white/15 backdrop-blur text-white">
        Automação Inteligente
      </span>
    </div>

    {/* Headline */}
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
      <span className="bg-gradient-to-r from-cyan-200 via-indigo-200 to-fuchsia-300 bg-clip-text text-transparent">
        Aceleramos negócios com IA aplicada e automações inteligentes.
      </span>
    </h1>

    

    {/* CTAs */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mt-8">
      <Button
        size="lg"
        className="rounded-xl px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#7c3aed] via-[#6366f1] to-[#22d3ee] shadow-xl shadow-indigo-900/30 hover:brightness-110 transition-all"
        onClick={scrollToForm}
      >
        Solicitar Diagnóstico
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      <Link href="#solucoes" className="hover:text-white underline underline-offset-4 text-white">
        Ver soluções
      </Link>
    </div>
  </div>

  {/* Shape/Mock à direita (decorativo) */}
  <div className="hidden lg:block">
    <div className="relative rounded-[28px] bg-gradient-to-br from-violet-500/30 via-indigo-500/20 to-cyan-400/20 border border-white/15 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] overflow-hidden p-5 flex justify-end py-20 px-11 w-full h-[380px] opacity-100 flex-col">
      <div className="space-y-3">
        <div className="chat-row left">
          <div className="chat-bubble left w-44" style={{ animationDelay: "0s" }} />
        </div>
        <div className="chat-row right">
          <div className="chat-bubble right w-56" style={{ animationDelay: "0.2s" }} />
        </div>
        <div className="chat-row left">
          <div className="chat-bubble left w-64" style={{ animationDelay: "0.4s" }} />
        </div>
        <div className="chat-row right">
          <div className="chat-bubble right w-44" style={{ animationDelay: "0.6s" }} />
        </div>
        <div className="chat-row left">
          <div className="chat-bubble left w-52" style={{ animationDelay: "0.8s" }} />
        </div>
      </div>
    </div>
  </div>
</div>
{/*
Estilos globais para a animação dos balões de chat
*/}
<style jsx global>{`
@keyframes bubble-in {
0% { transform: translateY(16px) scale(0.96); opacity: 0; }
60% { opacity: 1; }
100% { transform: translateY(0) scale(1); opacity: 1; }
}
@keyframes subtle-float {
0% { transform: translateY(0); }
50% { transform: translateY(-2px); }
100% { transform: translateY(0); }
}

/* Row controls alignment per side */
.chat-row {
display: flex;
width: 100%;
}
.chat-row.left { justify-content: flex-start; }
.chat-row.right { justify-content: flex-end; }

/* Bubble base */
.chat-bubble {
position: relative;
min-height: 36px;
max-width: 80%;
border-radius: 16px;
padding: 10px 12px; /* No text inside, padding gives volume */
opacity: 0;
animation: bubble-in 520ms cubic-bezier(.2,.8,.2,1) forwards,
           subtle-float 4s ease-in-out 600ms infinite;
box-shadow:
  0 8px 22px rgba(0,0,0,0.18),
  inset 0 1px 0 rgba(255,255,255,0.35);
backdrop-filter: blur(6px);
-webkit-backdrop-filter: blur(6px);
border: 1px solid rgba(255,255,255,0.35);
}

/* Left (receiver) - glassy white */
.chat-bubble.left {
background: rgba(255,255,255,0.92);
}

/* Right (sender) - brand gradient */
.chat-bubble.right {
background: linear-gradient(135deg, rgba(124,58,237,0.26), rgba(99,102,241,0.26), rgba(34,211,238,0.26));
border-color: rgba(124,58,237,0.35);
}

/* Subtle gloss highlight */
.chat-bubble::before {
content: "";
position: absolute;
top: 2px;
left: 8px;
right: 8px;
height: 10px;
background: linear-gradient(to bottom, rgba(255,255,255,0.6), rgba(255,255,255,0));
border-radius: 10px;
pointer-events: none;
}

/* Tails */
.chat-bubble::after {
content: "";
position: absolute;
bottom: 0;
width: 12px;
height: 12px;
background: inherit; /* match bubble bg including gradient */
filter: drop-shadow(0 1px 0 rgba(0,0,0,0.04));
}
.chat-bubble.left::after {
left: -5px;
clip-path: polygon(0 100%, 100% 0, 100% 100%);
border-bottom-left-radius: 2px;
border-left: 1px solid rgba(255,255,255,0.35);
border-bottom: 1px solid rgba(255,255,255,0.35);
}
.chat-bubble.right::after {
right: -5px;
clip-path: polygon(0 0, 100% 100%, 0 100%);
border-bottom-right-radius: 2px;
border-right: 1px solid rgba(124,58,237,0.35);
border-bottom: 1px solid rgba(124,58,237,0.35);
}
`}</style>
</section>

{/* Consultoria + Automação (Nova Seção) */}
<section className="relative px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#4da6ff]/5 to-[#003c78]/5 mx-0 my-0 opacity-100 bg-white py-20">
  {/* Background with provided image (Source URL required) */}
  <div aria-hidden="true" className="absolute inset-0 -z-10 pointer-events-none">
    <div className="absolute inset-0 flex items-center justify-center">
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-08-07%20%C3%A0%28s%29%2023.07.10_ce6efff2.jpg-Y1alNWqfRYjsAGeWSrDKuyhDXYYOW6.jpeg"
        alt=""
        className="w-[1200px] md:w-[1400px] h-auto opacity-30 select-none pointer-events-none"
      />
    </div>
    {/* Soft wash to ensure readability */}
    <div className="absolute inset-0 bg-white/40" />
  </div>

  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Consultoria Comercial */}
      <Card className="backdrop-blur-xl bg-white/60 border-white/40 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
        <CardContent className="p-6 md:p-8">
          <div className="w-12 h-12 rounded-xl bg-white/70 border border-white/40 flex items-center justify-center mb-4">
            {/* Ícone ilustrativo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-[#4da6ff]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 3v18h18" />
              <path d="M19 9l-5 5-4-4-6 6" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#003c78] mb-2">Consultoria Comercial</h2>
          <p className="text-gray-700">
            Somos uma consultoria especializada em aplicar IA de forma estratégica e mensurável. Nada de soluções
            genéricas. Aqui, cada processo é mapeado, automatizado e otimizado com inteligência real.
          </p>
        </CardContent>
      </Card>

      {/* Automação Inteligente */}
      <Card className="backdrop-blur-xl bg-white/60 border-white/40 hover:shadow-xl transition-all duration-300 rounded-2xl">
        <CardContent className="p-6 md:p-8">
          <div className="w-12 h-12 rounded-xl bg-white/70 border border-white/40 flex items-center justify-center mb-4">
            {/* Ícone ilustrativo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-[#f49f0a]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18v-6a3 3 0 0 1 6 0v6" />
              <path d="M8 21h8" />
              <rect x="3" y="3" width="18" height="12" rx="2" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[#003c78] mb-2">Automação Inteligente</h2>
          <p className="text-gray-700">
            Criamos agentes de IA sob medida, conectados à realidade e operação da sua empresa, trazendo{" "}
            <strong>eficiência</strong> e <strong>escalabilidade</strong>.
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

{/* Quem Somos */}
<section className="relative py-12 px-4 sm:px-6 lg:px-8 border-0 overflow-hidden opacity-95 pb-32 pt-32 bg-white">
{/* Background layer */}
<div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
  {/* Soft gradient wash to blend with the page */}
  <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/20 via-indigo-100/10 to-fuchsia-100/0" />
  {/* Decorative ribbon image */}
  <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[760px] h-[380px] md:w-[900px] md:h-[480px] opacity-40 md:opacity-50">
    <Image
      src="/images/whatsapp-ribbon.jpg"
      alt=""
      fill
      sizes="(min-width: 1024px) 900px, 100vw"
      className="object-contain"
      priority
    />
  </div>
</div>

<div className="max-w-5xl mx-auto">
  <Card className="backdrop-blur-xl bg-white/60 border-white/40 shadow-2xl rounded-3xl">
    <CardContent className="p-8">
      <h2 className="text-3xl font-bold text-[#003c78] mb-4">Escalar não é vender mais. É não deixar o crescimento travar por dentro.</h2>
      <p className="text-gray-700 leading-relaxed tracking-normal text-lg font-normal text-center">
        {"Quem não ajusta os gargalos internos, continua apagando incêndio enquanto o concorrente escala com estrutura."}
      </p>
      <p className="mt-4 text-[#003c78] font-semibold">
        {""}
      </p>
    </CardContent>
  </Card>
</div>
</section>

{/* Como Funciona na Prática (substitui "O Novo Cenário") */}
<ComoFuncionaSection />

{/* Dores que Atendemos */}
<section className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden opacity-95 bg-transparent">
{/* Background layer */}
<div aria-hidden="true" className="absolute inset-0 -z-10 pointer-events-none">
  {/* Image */}
  <Image
    src="/images/whatsapp-cube.jpg"
    alt=""
    fill
    sizes="100vw"
    className="object-cover object-right opacity-25"
    priority
  />
  {/* Soft wash to keep content legible */}
  <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/75 to-white/85" />
</div>

<div className="max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-[#003c78] mb-8 text-center">Dores que Atendemos</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      { label: "Leads sem resposta fora do horário", icon: <Headphones className="h-6 w-6" /> },
      { label: "Equipe sobrecarregada", icon: <Users className="h-6 w-6" /> },
      { label: "Falta de follow-up = perda de vendas", icon: <Activity className="h-6 w-6" /> },
      { label: "Clientes desaparecem no atendimento", icon: <MessageSquare className="h-6 w-6" /> },
      { label: "Lento reaproveitamento de leads antigos", icon: <Clock className="h-6 w-6" /> },
      { label: "Tarefas manuais repetitivas", icon: <Workflow className="h-6 w-6" /> },
    ].map((item, idx) => (
      <Card
        key={idx}
        className="bg-white/70 border-white/40 hover:shadow-lg transition-all duration-300 rounded-2xl"
      >
        <CardContent className="p-5 flex items-start gap-3">
          <div className="text-[#4da6ff]">{item.icon}</div>
          <p className="text-gray-800">{item.label}</p>
        </CardContent>
      </Card>
    ))}
  </div>
</div>
</section>

{/* Soluções (cards com benefício) */}
<section id="solucoes" className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-bold text-[#003c78] mb-8 text-center">Soluções</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {[
    {
      title: "Automação Comercial",
      benefit: "Mais conversão com menos esforço manual",
      icon: <Zap className="h-7 w-7 text-[#f49f0a]" />,
    },
    {
      title: "Reativação de Base",
      benefit: "Venda pra quem já te conhece",
      icon: <TrendingUp className="h-7 w-7 text-[#4da6ff]" />,
    },
    {
      title: "Otimização de Processos",
      benefit: "Equipe mais produtiva e menos gargalo",
      icon: <Workflow className="h-7 w-7 text-[#003c78]" />,
    },
    {
      title: "Atendimento com IA",
      benefit: "Leads atendidos rápido, qualificados e quentes",
      icon: <Bot className="h-7 w-7 text-[#f49f0a]" />,
    },
    {
      title: "Board Tecnológico",
      benefit: "Consultoria contínua com foco em crescimento",
      icon: <Brain className="h-7 w-7 text-[#003c78]" />,
    },
  ].map((card, idx) => (
    <Card
      key={idx}
      className="backdrop-blur-xl bg-white/60 border-white/40 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 rounded-2xl"
    >
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-xl bg-white/70 border border-white/40 flex items-center justify-center mb-4">
          {card.icon}
        </div>
        <h3 className="text-xl font-semibold text-[#003c78]">{card.title}</h3>
        <p className="text-gray-700 mt-1">{card.benefit}</p>
      </CardContent>
    </Card>
  ))}
</div>
</div>
</section>

{/* Resultados Esperados */}
<section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#4da6ff]/5 to-[#003c78]/5">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-bold text-[#003c78] mb-8">Resultados Esperados</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {[
    { value: "+30%", label: "na conversão de leads", color: "#003c78" },
    { value: "-60%", label: "no tempo médio de atendimento", color: "#4da6ff" },
    { value: "+40%", label: "de produtividade no time comercial", color: "#f49f0a" },
    { value: "24/7", label: "de atendimento com consistência", color: "#003c78" },
  ].map((kpi, idx) => (
    <Card key={idx} className="bg-white/70 border-white/40 rounded-2xl hover:shadow-xl transition">
      <CardContent className="p-6 text-center">
        <div
          className="text-4xl font-extrabold tracking-tight"
          style={{ color: kpi.color }}
          aria-label={kpi.value}
        >
          {kpi.value}
        </div>
        <p className="text-gray-700 mt-2">{kpi.label}</p>
      </CardContent>
    </Card>
  ))}
</div>
</div>
</section>

{/* Por que nos escolher */}
<section className="py-12 px-4 sm:px-6 lg:px-8">
<div className="max-w-5xl mx-auto text-left">
<h2 className="text-3xl font-bold text-[#003c78] mb-6 text-left">Por que nos escolher</h2>
<p className="text-xl text-gray-600 font-bold">- IA não é mágica. É método. E nós dominamos o processo.</p>
<p className="text-xl text-gray-600 font-bold">- Automatizar é fácil. Escalar com inteligência é o diferencial. </p>
<p className="text-xl text-gray-600 font-bold">- Menos promessas. Mais entregas. </p>
<p className="text-xl text-gray-600 font-bold">- A tecnologia trabalha. Você colhe o resultado. </p>
<p className="text-xl text-gray-600 font-bold">- Seu desafio não é a ferramenta. É transformar dados em decisão.</p>

</section>

{/* Testimonials (mantidos) */}
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#4da6ff]/5 to-[#003c78]/5">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
  <h2 className="text-3xl sm:text-4xl font-bold text-[#003c78] mb-4">O que nossos clientes dizem</h2>
  <p className="text-xl text-gray-600">Resultados reais de empresas que transformaram suas operações</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <Card className="backdrop-blur-xl bg-white/50 border-white/40 shadow-lg rounded-2xl">
    <CardContent className="p-6">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-[#f49f0a] fill-current" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">
        {"As soluções apresentadas pela ragher.ia nos ajudaram a organizar os processos, reduzindo consideravelmente o tempo de espera dos nossos clientes."}
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-[#4da6ff]/20 rounded-full flex items-center justify-center mr-4">
          <span className="text-[#003c78] font-semibold">{"GH"}</span>
        </div>
        <div>
          <p className="font-semibold text-[#003c78]">{"Gabriel Herneque"}</p>
          <p className="text-sm text-gray-600">Gtech Armory 6mm</p>
        </div>
      </div>
    </CardContent>
  </Card>

  <Card className="backdrop-blur-xl bg-white/50 border-white/40 shadow-lg rounded-2xl">
    <CardContent className="p-6">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-[#f49f0a] fill-current" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">
        {"Implementamos um CRM e agora temos acompanhamento da nossa base de leads. O faturamento já aumentou cerca de 30% nos últimos meses!"}
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-[#f49f0a]/20 rounded-full flex items-center justify-center mr-4">
          <span className="text-[#003c78] font-semibold">{"BL"}</span>
        </div>
        <div>
          <p className="font-semibold text-[#003c78]">{"Barbarah Lorenna"}</p>
          <p className="text-sm text-gray-600">Metta Fitness</p>
        </div>
      </div>
    </CardContent>
  </Card>

  <Card className="backdrop-blur-xl bg-white/50 border-white/40 shadow-lg rounded-2xl md:col-span-2 lg:col-span-1">
    <CardContent className="p-6">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-[#f49f0a] fill-current" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">
        {"Achamos que seria só atendimento no WhatsApp, mas ganhamos controle completo de estoque, unindo loja física e o site."}
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-[#4da6ff]/20 rounded-full flex items-center justify-center mr-4">
          <span className="text-[#003c78] font-semibold">{"AF"}</span>
        </div>
        <div>
          <p className="font-semibold text-[#003c78]">{"Bruna"}</p>
          <p className="text-sm text-gray-600">{"StyleBT"}</p>
        </div>
      </div>
    </CardContent>
  </Card>
</div>
</div>
</section>

{/* Contato (CTA forte + formulário) */}
<section id="contato" className="py-16 px-4 sm:px-6 lg:px-8">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-6">
  <h2 className="text-3xl sm:text-4xl font-bold text-[#003c78] mb-3">
    {"Vamos transformar seu operacional em vantagem competitiva com IA."}
  </h2>
  <p className="text-lg text-gray-600">
    {"Solicite um diagnóstico gratuito e descubra como a IA pode revolucionar seus processos."}
  </p>
</div>

<Card className="backdrop-blur-xl bg-white/50 border-white/40 shadow-2xl rounded-3xl">
  <CardContent className="p-8">
    {submitStatus === "success" ? (
      <div className="text-center py-8">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-[#003c78] mb-2">Mensagem enviada com sucesso!</h3>
        <p className="text-gray-600">Entraremos em contato em breve para agendar seu diagnóstico gratuito.</p>
      </div>
    ) : (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-[#003c78] mb-2">
              Nome Completo *
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              required
              value={formData.nome}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 placeholder-gray-500 transition-all duration-200 focus:border-[#4da6ff] focus:ring-0 focus:outline-none"
              placeholder="Seu nome completo"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#003c78] mb-2">
              E-mail *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 placeholder-gray-500 transition-all duration-200 focus:border-[#4da6ff] focus:ring-0 focus:outline-none"
              placeholder="seu@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="whatsapp" className="block text-sm font-medium text-[#003c78] mb-2">
            WhatsApp *
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            required
            value={formData.whatsapp}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 placeholder-gray-500 transition-all duration-200 focus:border-[#4da6ff] focus:ring-0 focus:outline-none"
            placeholder="(85) 99206-3984"
          />
        </div>

        <div>
          <label htmlFor="mensagem" className="block text-sm font-medium text-[#003c78] mb-2">
            Mensagem
          </label>
          <textarea
            id="mensagem"
            name="mensagem"
            rows={4}
            value={formData.mensagem}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 bg-white text-gray-900 placeholder-gray-500 transition-all duration-200 focus:border-[#4da6ff] focus:ring-0 focus:outline-none resize-none"
            placeholder="Conte-nos sobre seus desafios e objetivos..."
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#f49f0a] hover:bg-[#f49f0a]/90 text-white rounded-lg py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
        </Button>

        {submitStatus === "error" && (
          <p className="text-red-600 text-center">
            Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.
          </p>
        )}

        <div className="text-center text-sm text-gray-600 mt-4">
          <p>
            Ao enviar este formulário, você concorda com nossos{" "}
            <Link href="/termos" className="text-[#4da6ff] hover:underline">
              Termos de Uso
            </Link>{" "}
            e{" "}
            <Link href="/privacidade" className="text-[#4da6ff] hover:underline">
              Política de Privacidade
            </Link>
          </p>
        </div>
      </form>
    )}
  </CardContent>
</Card>
</div>
</section>

{/* Footer */}
<footer className="bg-[#003c78] text-white px-4 sm:px-6 lg:px-8 relative z-10 py-12 lg:pl-0 pb-8 bg-slate-900">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <div>
    
    <p className="text-gray-300 mb-4">
      Transformando empresas com automação inteligente e consultoria estratégica.
    </p>
    <div className="flex space-x-4">
      <Link
        href="https://instagram.com/ragher.ia"
        className="text-gray-300 hover:text-[#f49f0a] transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram className="h-6 w-6" />
      </Link>
      <Link
        href="https://wa.me/5585992063984"
        className="text-gray-300 hover:text-[#f49f0a] transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle className="h-6 w-6" />
      </Link>
      <Link href="mailto:contato@ragheria.com.br" className="text-gray-300 hover:text-[#f49f0a] transition-colors">
        <Mail className="h-6 w-6" />
      </Link>
    </div>
  </div>

  <div>
    <h4 className="text-lg font-semibold mb-4">Contato</h4>
    <p className="text-gray-300 mb-2">
      <Mail className="inline h-4 w-4 mr-2" />
      contato@ragheria.com.br
    </p>
    <p className="text-gray-300">
      <MessageCircle className="inline h-4 w-4 mr-2" />
      WhatsApp: (85) 99206-3984
    </p>
  </div>

  <div>
    <h4 className="text-lg font-semibold mb-4">Links Importantes</h4>
    <div className="space-y-2">
      <Link href="/termos" className="block text-gray-300 hover:text-[#f49f0a] transition-colors">
        Termos de Uso
      </Link>
      <Link href="/privacidade" className="block text-gray-300 hover:text-[#f49f0a] transition-colors">
        Política de Privacidade
      </Link>
    </div>
  </div>
</div>

<div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
  <p>&copy; {new Date().getFullYear()} ragher.ia. Todos os direitos reservados.</p>
</div>
</div>
</footer>

{/* Floating WhatsApp Button */}
<div className="fixed bottom-6 right-6 z-50">
<Link
href="https://wa.me/5585992063984"
target="_blank"
rel="noopener noreferrer"
className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
>
<MessageCircle className="h-6 w-6" />
</Link>
</div>
</div>
)
}
