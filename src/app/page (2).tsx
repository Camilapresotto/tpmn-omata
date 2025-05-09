'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function EbookTPMPage() {
  const checkoutLink = "https://pay.hotmart.com/C99646145I";

  return (
    <div className="min-h-screen bg-rose-50 flex items-center justify-center p-6">
      <Card className="max-w-xl w-full bg-white shadow-xl rounded-2xl p-6">
        <CardContent className="space-y-4 text-center">
          <h1 className="text-3xl font-bold text-rose-600">
            📕 TPM Não Mata Marido, Mas Quase
          </h1>
          <p className="text-gray-700 text-lg">
            Um guia de sobrevivência leve, real e delicioso para você passar pelos dias mais intensos do ciclo com leveza, sem brigar com o espelho (ou com o mozão).
          </p>
          <ul className="text-left text-gray-600 text-sm list-disc list-inside">
            <li>✅ O que comer antes, durante e depois da menstruação</li>
            <li>✅ Receitas práticas e doces SEM açúcar, lactose e glúten</li>
            <li>✅ Chás e estratégias para cólica, ansiedade e inchaço</li>
            <li>✅ Plano alimentar para quem treina</li>
            <li>✅ PDF completo por apenas R$ 9,90</li>
          </ul>
          <a href={checkoutLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-rose-600 hover:bg-rose-700 text-white text-lg px-6 py-4 rounded-full">
              📲 Quero meu e-book por R$ 9,90
            </Button>
          </a>
          <p className="text-xs text-gray-400 mt-2">
            Download imediato • Garantia de 7 dias • Entrega por e-mail
          </p>
        </CardContent>
      </Card>
    </div>
  );
}