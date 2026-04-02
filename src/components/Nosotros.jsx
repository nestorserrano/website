export default function Nosotros() {
  return (
    <section id="nosotros" style={{ background: '#0a0a14', padding: '5rem 0' }}>
      <div className="container-fluid px-4 px-lg-5">
        <div className="row align-items-center g-5">

          {/* Texto */}
          <div className="col-lg-6">
            <p className="text-uppercase fw-semibold mb-2" style={{ color: '#60a5fa', letterSpacing: '2px', fontSize: '0.85rem' }}>
              Quiénes somos
            </p>
            <h2 className="fw-black mb-4" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#f1f5f9', lineHeight: 1.2 }}>
              Tecnología empresarial con propósito
            </h2>
            <p className="mb-3" style={{ color: '#94a3b8', lineHeight: 1.85, fontSize: '1rem' }}>
              <strong style={{ color: '#f1f5f9' }}>Zyntello</strong> es una empresa de tecnología empresarial especializada en
              soluciones de <strong style={{ color: '#60a5fa' }}>Inteligencia Artificial</strong> y automatización. Tenemos presencia
              directa en <strong style={{ color: '#f1f5f9' }}>República Dominicana, Venezuela, Colombia, Guatemala y Costa Rica</strong>,
              con soporte remoto a otros países de la región, acompañando a empresas, PyMEs y entidades del sector público
              en su transformación digital.
            </p>
            <p className="mb-5" style={{ color: '#94a3b8', lineHeight: 1.85, fontSize: '1rem' }}>
              Nuestro equipo combina más de dos décadas de experiencia en infraestructura TI, sistemas ERP, desarrollo de
              software y automatización con IA — construyendo soluciones que resuelven problemas reales, hoy.
            </p>
            <a href="#contacto" className="btn btn-primary btn-lg px-5 rounded-3 fw-semibold">
              Agenda una consulta →
            </a>
          </div>

          {/* Lema visual */}
          <div className="col-lg-6">
            <div className="p-5 rounded-4 text-center"
              style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.08), rgba(139,92,246,0.08))', border: '1px solid rgba(255,255,255,0.08)' }}>
              {[
                { texto: 'Datos que revelan.', color: '#60a5fa' },
                { texto: 'Tecnología que transforma.', color: '#a78bfa' },
                { texto: 'Resultados que perduran.', color: '#f1f5f9' },
              ].map((linea, i) => (
                <p key={i} className="fw-bold mb-2" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.45rem)', color: linea.color, lineHeight: 1.4 }}>
                  {linea.texto}
                </p>
              ))}
              <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '1.5rem 0' }} />
              <div className="row g-3 text-start">
                {[
                  { num: '20+', label: 'Años de experiencia en TI y ERP' },
                  { num: '5+', label: 'Países: RD, VE, CO, GT, CR + soporte remoto' },
                  { num: 'IA', label: 'Aplicada a procesos empresariales reales' },
                  { num: '∞', label: 'Soporte post-implementación continuo' },
                ].map((item, i) => (
                  <div key={i} className="col-6 d-flex align-items-start gap-2">
                    <span className="fw-black" style={{ color: '#60a5fa', fontSize: '1.1rem', minWidth: '36px' }}>{item.num}</span>
                    <span style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.4 }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
