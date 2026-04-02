import NeuralBackground from './NeuralBackground'

export default function Hero() {
  return (
    <section id="inicio" className="min-vh-100 d-flex align-items-center"
      style={{
        background: 'linear-gradient(135deg, #0a0a14 0%, #0f172a 55%, #1e1b4b 100%)',
        paddingTop: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}>

      {/* Red neuronal animada de fondo */}
      <NeuralBackground />

      {/* Capa de oscurecimiento para que el texto se lea bien */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(10,10,20,0.6) 0%, rgba(15,23,42,0.4) 60%, rgba(30,27,75,0.5) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Contenido por encima del canvas */}
      <div className="container-fluid px-4 px-lg-5" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center g-5">

          {/* Texto principal */}
          <div className="col-lg-7">
            <p className="text-uppercase fw-semibold mb-3" style={{ color: '#60a5fa', letterSpacing: '2px', fontSize: '0.85rem' }}>
              Tecnología Empresarial · IA · Automatización
            </p>
            <h1 className="fw-black mb-4" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', lineHeight: 1.15, color: '#f1f5f9' }}>
              Datos que revelan.{' '}
              <span style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Tecnología que transforma.
              </span>{' '}
              Resultados que perduran.
            </h1>
            <p className="mb-5" style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: 1.8, maxWidth: '580px' }}>
              Acompañamos a empresas, PyMEs y entidades públicas en su transformación digital
              con presencia en <strong style={{ color: '#f1f5f9' }}>RD, Venezuela, Colombia, Guatemala y Costa Rica</strong> —
              con <strong style={{ color: '#f1f5f9' }}>IA aplicada</strong>, automatización y más de dos décadas de experiencia.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="#servicios" className="btn btn-primary btn-lg px-5 fw-semibold rounded-3">
                Ver Servicios
              </a>
              <a href="#contacto" className="btn btn-outline-light btn-lg px-5 fw-semibold rounded-3">
                Agenda una consulta
              </a>
            </div>
          </div>

          {/* Estadísticas */}
          <div className="col-lg-5">
            <div className="row g-3">
              {[
                { numero: '20+', label: 'Años de experiencia', color: '#3b82f6' },
                { numero: '100+', label: 'Proyectos exitosos', color: '#8b5cf6' },
                { numero: '5+', label: 'Países con presencia', color: '#10b981' },
                { numero: '24/7', label: 'Soporte disponible', color: '#f59e0b' },
              ].map((stat, i) => (
                <div key={i} className="col-6">
                  <div className="p-4 rounded-4 text-center h-100"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(8px)',
                    }}>
                    <div className="fw-black mb-1" style={{ fontSize: '2.2rem', color: stat.color }}>{stat.numero}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
