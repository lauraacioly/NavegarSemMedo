const tipos = [
  { titulo: 'Exclusão social', texto: 'Impedir intencionalmente que alguém participe de grupos, conversas ou atividades online.' },
  { titulo: 'Humilhação pública', texto: 'Compartilhar situações constrangedoras, fotos ou vídeos para ridicularizar a vítima perante outros.' },
  { titulo: 'Ameaças e intimidação', texto: 'Enviar mensagens com conteúdo ameaçador ou intimidador de forma repetida.' },
  { titulo: 'Perseguição online', texto: 'Seguir e monitorar a pessoa em diferentes plataformas com intenção de assediar ou controlar.' },
  { titulo: 'Disseminação de rumores', texto: 'Espalhar mentiras ou boatos sobre alguém para destruir sua reputação.' },
  { titulo: 'Falsidade de identidade', texto: 'Criar perfis falsos se passando pela vítima para prejudicá-la socialmente.' },
]

export default function Cyberbullying() {
  return (
    <section id="cyberbullying" className="bg-bege py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <p className="section-subtitle">Violência entre pares</p>
          <h2 className="section-title">O que é Cyberbullying?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
          <div>
            <p className="section-text mb-5">
              Cyberbullying é uma forma específica de violência digital caracterizada por atos
              agressivos, intencionais e <strong>repetidos</strong> contra uma pessoa que não
              consegue se defender facilmente, cometidos por meio de tecnologias digitais.
            </p>
            <p className="section-text mb-5">
              Diferente de um conflito pontual, o cyberbullying envolve desequilíbrio de poder
              e é recorrente — pode ocorrer a qualquer hora do dia ou da noite, invadindo todos
              os espaços da vida da vítima.
            </p>
            <p className="section-text">
              Ele afeta principalmente crianças, adolescentes e jovens, mas adultos também podem
              ser vítimas, especialmente em ambientes de trabalho digitais.
            </p>
          </div>

          <div className="space-y-3">
            <div className="bg-white rounded-xl p-5 border border-rosa/20">
              <h4 className="font-semibold text-vinho mb-2">3 características principais</h4>
              <ul className="space-y-2">
                {[
                  { marca: '🔁', texto: 'Repetição — acontece mais de uma vez' },
                  { marca: '⚡', texto: 'Intencionalidade — há intenção de machucar' },
                  { marca: '⚖️', texto: 'Desequilíbrio de poder — a vítima tem dificuldade de se defender' },
                ].map((item) => (
                  <li key={item.marca} className="flex items-start gap-2 text-sm">
                    <span>{item.marca}</span>
                    <span className="text-texto/80">{item.texto}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-5 border border-alerta/20">
              <h4 className="font-semibold text-alerta mb-2">No Brasil</h4>
              <p className="text-sm text-texto/80 leading-relaxed">
                A Lei nº 13.185/2015 (Programa de Combate ao Intimidação Sistemática)
                define e combate o bullying e o cyberbullying, obrigando escolas a
                adotarem medidas de prevenção e punição.
              </p>
            </div>
          </div>
        </div>

        <h3 className="font-display text-xl font-semibold text-texto mb-5">
          Tipos de cyberbullying
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {tipos.map((item) => (
            <div key={item.titulo} className="bg-white rounded-xl p-5 border border-bege shadow-sm">
              <h4 className="font-semibold text-vinho text-sm mb-2">{item.titulo}</h4>
              <p className="text-xs text-texto/70 leading-relaxed">{item.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
