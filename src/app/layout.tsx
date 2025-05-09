export const metadata = {
  title: 'TPM Não Mata Marido',
  description: 'Guia de sobrevivência com receitas e estratégias reais para dias difíceis.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
