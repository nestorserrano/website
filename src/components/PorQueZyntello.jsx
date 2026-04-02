const diferenciadores = [
  {
    icono: '🎯',
    titulo: '+20 años de experiencia',
    descripcion: 'En infraestructura TI y ERP en República Dominicana y Latinoamérica.'
  },
  {
    icono: '🤖',
    titulo: 'Expertos en IA aplicada',
    descripcion: 'No teoría — implementamos IA directamente en tus procesos empresariales reales.'
  },
  {
    icono: '🌎',
    titulo: 'Presencia regional comprobada',
    descripcion: 'Operamos directamente en RD, Venezuela, Colombia, Guatemala y Costa Rica. Soporte remoto para el resto de la región.'
  },
  {
    icono: '🔄',
    titulo: 'Soporte post-implementación',
    descripcion: 'No desaparecemos al entregar el proyecto. Te acompañamos de forma continua.'
  },
  {
    icono: '🔗',
    titulo: 'Compatible con tus sistemas actuales',
    descripcion: 'No hay que empezar de cero. Nos integramos con lo que ya tienes funcionando.'
  },
  {
    icono: '🛠️',
    titulo: 'Sin soluciones genéricas',
    descripcion: 'Cada implementación parte de entender cómo funciona tu empresa. Tecnología exacta para tu caso.'
  },
]

export default function PorQueZyntello() {
  return (
    <section id="porque" style={{ background: '#0f172a', padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-fluid px-4 px-lg-5">

        {/* Encabezado centrado */}
        <div className="w-100"><div className="text-center mb-5">
          <p className="text-uppercase fw-semibold mb-2" style={{ color: '#60a5fa', letterSpacing: '2px', fontSize: '0.85rem' }}>
            Por qué elegirnos
          </p>
          <h2 className="fw-black mb-0" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#f1f5f9' }}>
            Trabajamos distinto.
          </h2>
        </div>

        <div className="row align-items-start g-5">

          {/* Texto izquierdo */}
          <div className="col-lg-4 d-flex flex-column justify-content-center">
            <p style={{ color: '#94a3b8', lineHeight: 1.9, fontSize: '1.05rem' }}>
              No vendemos software enlatado ni soluciones genéricas. Cada implementación parte de entender cómo funciona
              tu empresa — y construimos o adaptamos la tecnología exacta que necesitas.
            </p>
            <div className="mt-4">
              <a href="#contacto" className="btn btn-outline-primary btn-lg px-5 rounded-3 fw-semibold">
                Conversemos →
              </a>
            </div>
          </div>

          {/* Grid de diferenciadores */}
          <div className="col-lg-8">
            <div className="row g-3">
              {diferenciadores.map((d, i) => (
                <div key={i} className="col-sm-6">
                  <div className="d-flex gap-3 p-4 rounded-4 h-100"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <div style={{ fontSize: '1.8rem', lineHeight: 1, flexShrink: 0 }}>{d.icono}</div>
                    <div>
                      <div className="fw-bold mb-1" style={{ color: '#f1f5f9', fontSize: '0.95rem' }}>{d.titulo}</div>
                      <div style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.55 }}>{d.descripcion}</div>
                    </div>
                  </div>
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
