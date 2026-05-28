import imgInstagram from '../../assets/img/instagram.png'
import imgFacebook from '../../assets/img/facebook.png'
import imgWhatsapp from '../../assets/img/whatsapp.png'
import imgTiktok from '../../assets/img/tiktok.png'
import imgYoutube from '../../assets/img/youtube.png'
import imgTwitter from '../../assets/img/twitter.png'

const plataformas = [
  {
    nome: 'Instagram',
    imagem: imgInstagram,
    passos: 'Toque nos três pontos ao lado da publicação ou perfil → "Denunciar" → selecione o motivo. Para contas falsas, use "Denunciar conta".',
  },
  {
    nome: 'Facebook',
    imagem: imgFacebook,
    passos: 'Clique nos três pontos no canto da postagem ou perfil → "Encontrar suporte ou denunciar" → escolha o motivo e siga as instruções.',
  },
  {
    nome: 'WhatsApp',
    imagem: imgWhatsapp,
    passos: 'Na conversa, toque e segure a mensagem → "Denunciar" → ou acesse o perfil do contato e toque em "Denunciar".',
  },
  {
    nome: 'TikTok',
    imagem: imgTiktok,
    passos: 'Pressione e segure o vídeo → "Denunciar" → selecione o tipo de violação. Para perfis, acesse o perfil → três pontos → "Denunciar".',
  },
  {
    nome: 'YouTube',
    imagem: imgYoutube,
    passos: 'Abaixo do vídeo, clique nos três pontos → "Denunciar" → selecione o motivo. Para comentários, clique nos três pontos ao lado do comentário.',
  },
  {
    nome: 'X (Twitter)',
    imagem: imgTwitter,
    passos: 'Clique nos três pontos no tweet ou perfil → "Denunciar" → selecione o motivo adequado. Você também pode bloquear o usuário.',
  },
]

const canaisOficiais = [
  {
    orgao: 'Delegacia de Polícia',
    descricao: 'Registre um Boletim de Ocorrência (B.O.) presencialmente ou pela plataforma online do estado. É o passo formal para iniciar uma investigação criminal.',
    urgencia: 'normal',
  },
  {
    orgao: 'SaferNet Brasil',
    descricao: 'Recebe denúncias de crimes contra direitos humanos na internet, como discurso de ódio, pornografia infantil e outros. O canal é gratuito e pode ser anônimo.',
    urgencia: 'normal',
  },
  {
    orgao: 'Central 180',
    descricao: 'Canal nacional para casos de violência contra a mulher, incluindo violência digital. Funciona 24 horas por dia, 7 dias por semana.',
    urgencia: 'urgente',
  },
  {
    orgao: 'Disque 100',
    descricao: 'Ouvidoria de Direitos Humanos. Recebe denúncias de violações envolvendo crianças, adolescentes, idosos, pessoas com deficiência e outros grupos.',
    urgencia: 'urgente',
  },
]

export default function ComoDenunciar() {
  return (
    <section id="como-denunciar" className="bg-bege py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <p className="section-subtitle">Tome uma atitude</p>
          <h2 className="section-title">Como denunciar</h2>
          <p className="section-text max-w-2xl">
            Denunciar é um direito e um ato de coragem. Você pode fazê-lo diretamente
            nas plataformas digitais, nos canais oficiais ou em ambos — quanto mais
            caminhos, mais efetiva é a resposta.
          </p>
        </div>

        {/* Canais oficiais */}
        <h3 className="font-display text-xl font-semibold text-texto mb-5">
          Canais oficiais de denúncia
        </h3>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {canaisOficiais.map((canal) => (
            <div
              key={canal.orgao}
              className={`rounded-xl p-5 border-l-4 bg-white shadow-sm ${
                canal.urgencia === 'urgente' ? 'border-alerta' : 'border-vinho'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-semibold text-texto">{canal.orgao}</h4>
                {canal.urgencia === 'urgente' && (
                  <span className="text-xs bg-alerta/10 text-alerta px-2 py-0.5 rounded-full font-medium">
                    24h
                  </span>
                )}
              </div>
              <p className="text-sm text-texto/70 leading-relaxed">{canal.descricao}</p>
            </div>
          ))}
        </div>

        {/* Plataformas digitais */}
        <h3 className="font-display text-xl font-semibold text-texto mb-5">
          Como denunciar nas plataformas
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {plataformas.map((p) => (
            <div key={p.nome} className="card flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <img
                  src={p.imagem}
                  alt={`Ícone do ${p.nome}`}
                  className="w-8 h-8 object-contain flex-shrink-0"
                />
                <h4 className="font-semibold text-vinho">{p.nome}</h4>
              </div>
              <p className="text-sm text-texto/70 leading-relaxed">{p.passos}</p>
            </div>
          ))}
        </div>

        <div className="alert-box">
          <p className="text-alerta font-semibold mb-1">Lembre-se</p>
          <p className="text-texto/80 text-sm leading-relaxed">
            Denunciar nas plataformas e fazer um Boletim de Ocorrência são ações complementares.
            A denúncia na plataforma pode remover o conteúdo, mas apenas o B.O. abre um processo
            legal contra o agressor. Se possível, faça os dois.
          </p>
        </div>
      </div>
    </section>
  )
}
