const passos = [
  {
    titulo: 'Não apague nada',
    texto: 'Mesmo que o conteúdo seja perturbador, não delete as mensagens, comentários ou imagens. As provas são essenciais para qualquer denúncia formal.',
  },
  {
    titulo: 'Faça capturas de tela',
    texto: 'Tire prints de tudo: conversas, postagens, perfis, comentários e qualquer conteúdo agressivo. No celular use o botão de volume + power, ou Print Screen no computador.',
  },
  {
    titulo: 'Registre data e hora',
    texto: 'Certifique-se de que as capturas mostrem a data e hora da publicação ou envio. Isso comprova a ocorrência no tempo.',
  },
  {
    titulo: 'Salve os dados do agressor',
    texto: 'Registre o nome de perfil, arroba, endereço de e-mail, número de telefone ou qualquer identificação do agressor visível nas capturas.',
  },
  {
    titulo: 'Grave vídeos da tela se necessário',
    texto: 'Para conteúdos em movimento, transmissões ao vivo ou publicações que podem sumir rapidamente, grave a tela do seu dispositivo.',
  },
  {
    titulo: 'Guarde os arquivos em local seguro',
    texto: 'Armazene as provas em pastas organizadas, com backup em nuvem (Google Drive, iCloud) e, se possível, envie para um e-mail pessoal confiável.',
  },
  {
    titulo: 'Registre URL das páginas',
    texto: 'Copie o endereço completo (URL) das páginas onde o conteúdo está publicado. Isso ajuda a localizar e verificar o material.',
  },
  {
    titulo: 'Conte para alguém de confiança',
    texto: 'Não guarde sozinho. Compartilhe as provas com um familiar, amigo de confiança ou responsável. Ter testemunhas fortalece a sua situação.',
  },
]

export default function GuardarProvas() {
  return (
    <section id="guardar-provas" className="bg-offwhite py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <p className="section-subtitle">Documente tudo</p>
          <h2 className="section-title">Como guardar provas</h2>
          <p className="section-text max-w-2xl">
            Guardar evidências é fundamental para que você possa denunciar formalmente e
            buscar seus direitos. Saiba como documentar as situações de violência digital
            de forma eficaz.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {passos.map((passo, i) => (
            <div key={i} className="flex gap-4 card">
              <div className="step-number mt-0.5">{i + 1}</div>
              <div>
                <h4 className="font-semibold text-texto mb-1">{passo.titulo}</h4>
                <p className="text-sm text-texto/70 leading-relaxed">{passo.texto}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="highlight-box">
          <p className="font-semibold text-vinho mb-2">Dica importante</p>
          <p className="text-texto/80 text-sm leading-relaxed">
            Se o agressor começar a apagar as publicações, não se preocupe — a lei obriga
            as plataformas a guardar registros por um período. Mas quanto mais cedo você
            documentar, melhor. Não espere que o conteúdo suma para agir.
          </p>
        </div>
      </div>
    </section>
  )
}
