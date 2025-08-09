import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from 'lucide-react'
import Image from "next/image"

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-[#f3f1ee] text-[#171412]">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image src="/logo-ragher.svg" alt="ragher.ia" width={640} height={200} className="h-16 w-auto" />
            </Link>
            <Button variant="ghost" asChild>
              <Link href="/" className="flex items-center text-[#003c78]">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao site
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="backdrop-blur-md bg-white/70 border-white/30 shadow-lg rounded-2xl">
            <CardContent className="p-8">
              <h1 className="text-3xl font-bold text-[#003c78] mb-8">Política de Privacidade</h1>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  A ragher.ia se compromete com a privacidade dos seus dados. Coletamos apenas as informações
                  necessárias para fornecer nossos serviços de forma eficiente e segura.
                </p>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold text-[#003c78] mb-3">Quais dados coletamos</h2>
                    <p className="text-gray-700">
                      Nome, e-mail, telefone/WhatsApp e mensagens enviadas via formulário.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-[#003c78] mb-3">Uso dos dados</h2>
                    <p className="text-gray-700">
                      Atendimento comercial, envio de diagnósticos, e melhorias dos serviços.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-[#003c78] mb-3">Compartilhamento</h2>
                    <p className="text-gray-700">Não compartilhamos seus dados com terceiros sem seu consentimento.</p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-[#003c78] mb-3">Segurança</h2>
                    <p className="text-gray-700">
                      Armazenamos os dados em ambientes seguros, com criptografia e controle de acesso.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-[#003c78] mb-3">Seus direitos</h2>
                    <p className="text-gray-700">
                      Você pode solicitar a atualização, correção ou exclusão dos seus dados a qualquer momento pelo
                      e-mail:{" "}
                      <a href="mailto:contato@ragheria.com.br" className="text-[#4da6ff] hover:underline">
                        contato@ragheria.com.br
                      </a>
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-[#4da6ff]/10 rounded-lg">
                  <p className="text-sm text-[#003c78] font-semibold">Última atualização: 03/08/2025</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
