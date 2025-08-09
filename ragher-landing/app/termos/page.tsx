import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from 'lucide-react'
import Image from "next/image"

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-[#f3f1ee] text-[#171412]">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-white/20 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image src="/logo-ragher.svg" alt="ragher.ia" width={320} height={100} className="h-16 w-auto" />
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
              <h1 className="text-3xl font-bold text-[#003c78] mb-8">Termos de Uso</h1>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  Ao utilizar nosso site ou enviar informações por meio do formulário, você concorda com os seguintes
                  termos:
                </p>

                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold text-[#003c78] mb-3">1. Objetivo do site</h2>
                    <p className="text-gray-700">
                      O site da ragher.ia oferece informações sobre nossos serviços em automação, IA e consultoria
                      estratégica.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-[#003c78] mb-3">2. Responsabilidades do usuário</h2>
                    <p className="text-gray-700">
                      Você se compromete a fornecer informações verídicas no formulário e utilizar os recursos
                      disponíveis de forma ética.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-[#003c78] mb-3">3. Propriedade intelectual</h2>
                    <p className="text-gray-700">
                      Todos os conteúdos, marcas e layouts são de propriedade exclusiva da ragher.ia. É proibida a
                      reprodução sem autorização.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-[#003c78] mb-3">4. Atualizações</h2>
                    <p className="text-gray-700">
                      Podemos alterar estes termos sem aviso prévio. As alterações terão efeito imediato após
                      publicação.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-[#003c78] mb-3">5. Contato</h2>
                    <p className="text-gray-700">
                      Dúvidas? Fale com a gente pelo e-mail:{" "}
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
